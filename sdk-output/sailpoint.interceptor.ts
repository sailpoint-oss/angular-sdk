import { inject } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import {
  Observable,
  throwError,
  timer,
} from 'rxjs';
import { catchError, switchMap, mergeMap, retryWhen } from 'rxjs/operators';
import { NERM_URL_PREFIX, SailPointConfigService } from './sailpoint-config.service';

/**
 * Functional HTTP interceptor for the SailPoint Angular SDK.
 *
 * Intercepts every request whose URL is a relative path (starts with `/`),
 * which is the pattern emitted by SDK services when no explicit basePath is set.
 *
 * For each such request the interceptor:
 *  1. Resolves the current access token via `SailPointConfigService.getToken()`.
 *  2. Prepends the base URL for the target product to produce an absolute URL.
 *     Identity Security Cloud requests use `baseUrl`. NERM requests carry the
 *     `/nerm` prefix, which is stripped and replaced with `nermBaseUrl`.
 *  3. Attaches `Authorization: Bearer <token>`.
 *  4. On **401**: invalidates the cached token, fetches a fresh one, and retries once.
 *  5. On **429** or **5xx**: retries with exponential back-off.
 *
 * Requests with absolute URLs are passed through unchanged.
 */
export function sailpointInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const configSvc = inject(SailPointConfigService);

  // Only rewrite relative-path requests produced by SDK services.
  if (!req.url.startsWith('/')) {
    return next(req);
  }

  return configSvc.getToken().pipe(
    switchMap((token) => {
      const prepared = buildRequest(req, configSvc, token);
      return executeWithRetry(prepared, next, req, configSvc);
    })
  );
}

// ---------------------------------------------------------------------------

/**
 * Turn the relative URL of an SDK request into an absolute one.
 *
 * The generated NERM packages prefix every path with `/nerm`, so the prefix
 * selects the base URL and is then removed. Everything else is an Identity
 * Security Cloud request.
 */
function resolveUrl(url: string, configSvc: SailPointConfigService): string {
  if (url === NERM_URL_PREFIX || url.startsWith(`${NERM_URL_PREFIX}/`)) {
    const nermBasePath = configSvc.nermBasePath;
    if (!nermBasePath) {
      throw new Error(
        'SailPoint SDK: this is a NERM request, but no nermBaseUrl is configured. ' +
        'Pass nermBaseUrl to provideSailPoint() or SailPointConfigService.configure(), ' +
        'for example nermBaseUrl: "https://acme.nonemployee.com".'
      );
    }
    return nermBasePath + url.slice(NERM_URL_PREFIX.length);
  }

  return configSvc.basePath + url;
}

function buildRequest(
  req: HttpRequest<unknown>,
  configSvc: SailPointConfigService,
  token: string
): HttpRequest<unknown> {
  return req.clone({
    url: resolveUrl(req.url, configSvc),
    setHeaders: { Authorization: `Bearer ${token}` },
  });
}

function executeWithRetry(
  prepared: HttpRequest<unknown>,
  next: HttpHandlerFn,
  original: HttpRequest<unknown>,
  configSvc: SailPointConfigService
): Observable<HttpEvent<unknown>> {
  const { retries, retryDelay } = configSvc;

  return next(prepared).pipe(
    // ── 401: refresh token and retry once ──────────────────────────────
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        configSvc.invalidateToken();
        return configSvc.getToken().pipe(
          switchMap((freshToken) =>
            next(buildRequest(original, configSvc, freshToken))
          )
        );
      }
      return throwError(() => err);
    }),
    // ── 429 / 5xx: exponential back-off retries ─────────────────────────
    retryWhen((errors) =>
      errors.pipe(
        mergeMap((err: HttpErrorResponse, attempt) => {
          const shouldRetry =
            attempt < retries &&
            (err.status === 429 || (err.status >= 500 && err.status < 600));

          if (!shouldRetry) {
            return throwError(() => err);
          }
          return timer(retryDelay * Math.pow(2, attempt));
        })
      )
    )
  );
}
