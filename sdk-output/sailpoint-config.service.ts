import {
  Injectable,
  signal,
  InjectionToken,
  inject,
} from '@angular/core';
import {
  HttpBackend,
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import {
  Observable,
  from,
  isObservable,
  of,
  shareReplay,
  switchMap,
  tap,
  throwError,
  timer,
  ReplaySubject,
} from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

/** A token can be a static string, a (possibly async) function, or an Observable. */
export type AccessTokenProvider =
  | string
  | (() => string)
  | (() => Promise<string>)
  | (() => Observable<string>);

/** Shape returned by `window.sailpointConfig()`. */
export interface SailPointWindowConfig {
  baseurl: string;
  nermBaseurl?: string;
  accessToken: string;
}

/** The type of `window.sailpointConfig` when exposed by the plugin host. */
export type SailPointConfigProvider = () =>
  | SailPointWindowConfig
  | Promise<SailPointWindowConfig>;

declare global {
  interface Window {
    sailpointConfig?: SailPointConfigProvider;
  }
}

/** Parameters accepted by `provideSailPoint()` and `SailPointConfigService.configure()`. */
export interface SailPointParams {
  /** Root API base URL — no trailing slash, no version segment.
   *  e.g. `https://acme.api.identitynow.com`
   *  The SDK services append their own versioned paths (e.g. `/accounts/v1`).
   */
  baseUrl?: string;
  /** OAuth2 client ID — used with `clientSecret` to exchange for a token. */
  clientId?: string;
  /** OAuth2 client secret. */
  clientSecret?: string;
  /**
   * Override the token URL. Defaults to `{baseUrl}/oauth/token`.
   * Only relevant when `clientId` + `clientSecret` are provided.
   */
  tokenUrl?: string;
  /**
   * Supply an access token directly (string), or as a function / Observable
   * so it can be refreshed on every request.
   */
  accessToken?: AccessTokenProvider;
  /** Number of retries on 429 / 5xx responses. Default: 3 */
  retries?: number;
  /** Base delay in ms for exponential back-off. Default: 1000 */
  retryDelay?: number;
}

/** DI token used internally to pass `SailPointParams` into the service. */
export const SAILPOINT_CONFIG_PARAMS = new InjectionToken<SailPointParams>(
  'SAILPOINT_CONFIG_PARAMS'
);

// ---------------------------------------------------------------------------
// OAuth token response shape
// ---------------------------------------------------------------------------

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
}

interface CachedToken {
  token: string;
  expiresAt: number; // epoch ms, 0 = never expires
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

/**
 * Central Angular service for the SailPoint Angular SDK.
 *
 * Handles:
 * - Static access tokens
 * - Dynamic token functions / Observables
 * - OAuth2 client-credentials token exchange (with caching)
 * - `window.sailpointConfig()` auto-configuration for plugin contexts
 *
 * Inject and call `configure()` at runtime to update credentials dynamically.
 */
@Injectable({ providedIn: 'root' })
export class SailPointConfigService {
  /** Reactive snapshot of the current parameters. Components can read this signal. */
  readonly params = signal<SailPointParams>({});

  /** Number of retries on 429 / 5xx (read by the interceptor). */
  get retries(): number {
    return this.params().retries ?? 3;
  }

  /** Base retry delay in ms (read by the interceptor). */
  get retryDelay(): number {
    return this.params().retryDelay ?? 1000;
  }

  /** Current base URL (no trailing slash, no version segment). */
  get basePath(): string {
    return (this.params().baseUrl ?? '').replace(/\/$/, '');
  }

  private cachedToken: CachedToken | null = null;
  private tokenStream$: Observable<string> | null = null;
  private readonly backendHttp: HttpClient;

  constructor(private readonly httpBackend: HttpBackend) {
    // Use HttpBackend directly so token requests skip the auth interceptor
    // (avoids infinite loops when the interceptor itself needs a token).
    this.backendHttp = new HttpClient(this.httpBackend);

    const initial = inject(SAILPOINT_CONFIG_PARAMS, { optional: true });
    if (initial) {
      this.configure(initial);
    }
  }

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------

  /**
   * Update configuration at any time — e.g. after a user enters credentials.
   * Clears the cached token so the next request will fetch a fresh one.
   */
  configure(params: SailPointParams): void {
    this.params.set({ ...this.params(), ...params });
    this.invalidateToken();
  }

  /** Clear the cached token, forcing re-acquisition on the next request. */
  invalidateToken(): void {
    this.cachedToken = null;
    this.tokenStream$ = null;
  }

  /**
   * Returns an Observable that emits exactly one access token string.
   *
   * Resolution order:
   * 1. `window.sailpointConfig()` — if present (SailPoint plugin context)
   * 2. `params.accessToken` — static string, function, or Observable
   * 3. `params.clientId` + `params.clientSecret` — OAuth2 client-credentials
   */
  getToken(): Observable<string> {
    // ── 1. window.sailpointConfig auto-configuration ──────────────────────
    const windowProvider = getWindowConfigProvider();
    if (windowProvider) {
      return from(Promise.resolve(windowProvider())).pipe(
        map((cfg) => {
          // Update basePath eagerly so URL construction works for the current request.
          if (cfg.baseurl) {
            this.params.update((p) => ({ ...p, baseUrl: cfg.baseurl }));
          }
          if (!cfg.accessToken) {
            throw new Error('window.sailpointConfig() did not return an accessToken.');
          }
          return cfg.accessToken;
        })
      );
    }

    // ── 2. Explicit accessToken provider ──────────────────────────────────
    const { accessToken } = this.params();
    if (accessToken != null) {
      return resolveAccessTokenProvider(accessToken);
    }

    // ── 3. Client credentials ─────────────────────────────────────────────
    const { clientId, clientSecret } = this.params();
    if (clientId && clientSecret) {
      return this.getClientCredentialsToken();
    }

    return throwError(
      () =>
        new Error(
          'SailPoint SDK: no authentication configured. ' +
          'Provide accessToken, clientId + clientSecret, or window.sailpointConfig().'
        )
    );
  }

  // -------------------------------------------------------------------------
  // Client-credentials token acquisition
  // -------------------------------------------------------------------------

  private getClientCredentialsToken(): Observable<string> {
    const now = Date.now();

    // Serve from cache if still valid (10 s buffer before actual expiry).
    if (this.cachedToken && this.cachedToken.expiresAt > now + 10_000) {
      return of(this.cachedToken.token);
    }

    // Coalesce concurrent requests to a single in-flight token fetch.
    if (!this.tokenStream$) {
      this.tokenStream$ = this.fetchClientCredentialsToken().pipe(
        tap((token) => {
          // tokenStream$ is reset after emission so future calls re-enter this path.
          this.tokenStream$ = null;
        }),
        shareReplay(1)
      );
    }

    return this.tokenStream$;
  }

  private fetchClientCredentialsToken(): Observable<string> {
    const p = this.params();
    const tokenUrl = p.tokenUrl ?? `${this.basePath}/oauth/token`;

    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', p.clientId!)
      .set('client_secret', p.clientSecret!);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.backendHttp
      .post<TokenResponse>(tokenUrl, body.toString(), { headers })
      .pipe(
        map((resp) => {
          const token = resp.access_token;
          const expiresAt = resp.expires_in
            ? Date.now() + resp.expires_in * 1000
            : 0;
          this.cachedToken = { token, expiresAt };
          return token;
        }),
        catchError((err) =>
          throwError(
            () =>
              new Error(
                `SailPoint SDK: failed to obtain access token via client credentials. ${err?.message ?? ''}`
              )
          )
        )
      );
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getWindowConfigProvider(): SailPointConfigProvider | undefined {
  if (
    typeof window === 'undefined' ||
    typeof (window as any).sailpointConfig !== 'function'
  ) {
    return undefined;
  }
  return () => (window as any).sailpointConfig!();
}

function resolveAccessTokenProvider(provider: AccessTokenProvider): Observable<string> {
  if (typeof provider === 'string') {
    return of(provider);
  }
  if (typeof provider === 'function') {
    try {
      const result = provider();
      if (typeof result === 'string') return of(result);
      if (isObservable(result)) return result.pipe(take(1));
      // Promise
      return from(result as Promise<string>);
    } catch (e) {
      return throwError(() => e);
    }
  }
  if (isObservable(provider)) {
    return (provider as Observable<string>).pipe(take(1));
  }
  return throwError(() => new Error('SailPoint SDK: unrecognised accessToken type.'));
}
