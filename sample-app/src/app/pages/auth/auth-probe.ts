import { Injectable, inject, signal } from '@angular/core';
import { IdentitiesService } from '@sailpoint/angular-sdk/identities';
import { SailPointConfigService, type SailPointParams } from '@sailpoint/angular-sdk';

export type ProbeState = 'idle' | 'running' | 'ok' | 'failed';

/**
 * Applies a set of SDK parameters, then calls one real endpoint to prove that
 * the resulting token works.
 *
 * Provide it on the component, not in the root injector, so each page keeps its
 * own result.
 */
@Injectable()
export class AuthProbe {
  private readonly config = inject(SailPointConfigService);
  private readonly identities = inject(IdentitiesService);

  readonly state = signal<ProbeState>('idle');
  readonly message = signal('');
  /** Number of records the probe call returned. */
  readonly count = signal(0);

  /**
   * Hand the parameters to the SDK and call `listIdentitiesV1`. The interceptor
   * resolves the token, prepends the base URL, and adds the Authorization
   * header, so a 200 means the credentials are good.
   */
  run(params: SailPointParams): void {
    this.config.configure(params);
    this.probe();
  }

  /** Call the endpoint again with whatever is configured now. */
  probe(): void {
    this.state.set('running');
    this.message.set('Calling listIdentitiesV1 …');
    this.count.set(0);

    this.identities.listIdentitiesV1({ limit: 1 }).subscribe({
      next: (identities) => {
        this.count.set(identities.length);
        this.state.set('ok');
        this.message.set(
          `Authenticated against ${this.config.basePath || '(base URL from the host)'}.`
        );
      },
      error: (error) => {
        this.state.set('failed');
        this.message.set(describe(error));
      },
    });
  }

  reset(): void {
    this.state.set('idle');
    this.message.set('');
    this.count.set(0);
  }
}

/** Turn an SDK or HTTP failure into one readable line. */
function describe(error: any): string {
  const detail =
    error?.error?.messages?.[0]?.text ??
    error?.error?.error_description ??
    error?.error?.error ??
    error?.message ??
    'Unknown error';

  if (error?.status === 0) {
    return `${detail} — the request never reached the tenant. Check the base URL and CORS.`;
  }
  if (error?.status === 401) {
    return `401 Unauthorized — ${detail}`;
  }
  if (error?.status === 403) {
    return `403 Forbidden — the credentials are valid but lack the scope for this endpoint. ${detail}`;
  }
  return error?.status ? `${error.status} — ${detail}` : detail;
}
