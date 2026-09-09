import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SailPointConfigService } from '@sailpoint/angular-sdk';
import { forgetConfig } from './persist';

@Component({
  selector: 'app-auth-index',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-header">
      <h1>Authentication</h1>
      <p class="subtitle">Four ways to give the SDK a token. Each page connects and tests.</p>
    </div>

    @if (hostInstalled()) {
      <div class="result running" style="margin-bottom: 1.25rem">
        <strong>window.sailpointConfig is installed.</strong>
        The SDK checks the host first, so the other three modes cannot take
        effect until you remove it on the
        <a routerLink="/auth/plugin">plugin page</a>.
      </div>
    }

    <div class="mode-grid">
      <a routerLink="/auth/pat" class="card mode-card">
        <h2>Personal access token</h2>
        <p>A token you already hold. Simplest to try.</p>
        <div class="keys"><code>baseUrl</code> + <code>accessToken</code></div>
      </a>

      <a routerLink="/auth/client-credentials" class="card mode-card">
        <h2>Client credentials</h2>
        <p>The SDK exchanges an ID and secret for a token, then caches it.</p>
        <div class="keys"><code>baseUrl</code> + <code>clientId</code> + <code>clientSecret</code></div>
      </a>

      <a routerLink="/auth/token-function" class="card mode-card">
        <h2>Token function</h2>
        <p>Your code returns the token on every request. Sync, promise, or observable.</p>
        <div class="keys"><code>baseUrl</code> + <code>accessToken: () =&gt; …</code></div>
      </a>

      <a routerLink="/auth/plugin" class="card mode-card">
        <h2>Plugin auto-configuration</h2>
        <p>The host page supplies everything through <code>window.sailpointConfig()</code>.</p>
        <div class="keys">no parameters</div>
      </a>
    </div>

    <div class="card" style="margin-top: 1.5rem">
      <h2>Current state</h2>
      <p class="hint">
        Base URL: <code>{{ configSvc.basePath || '(none)' }}</code><br />
        NERM base URL: <code>{{ configSvc.nermBasePath || '(none)' }}</code><br />
        Retries: <code>{{ configSvc.retries }}</code>,
        base delay <code>{{ configSvc.retryDelay }}ms</code>
      </p>
      <div class="actions">
        <button type="button" class="btn btn-danger" (click)="reset()">
          Clear everything
        </button>
      </div>
      <p class="hint" style="margin-top: 0.9rem">
        The SDK resolves a token in this order: the host function, then
        <code>accessToken</code>, then <code>clientId</code> with
        <code>clientSecret</code>. The first one that is present wins.
      </p>
    </div>
  `,
})
export class AuthIndexComponent {
  readonly configSvc = inject(SailPointConfigService);
  readonly hostInstalled = signal(typeof window !== 'undefined' && !!window.sailpointConfig);

  reset(): void {
    if (typeof window !== 'undefined') {
      delete window.sailpointConfig;
    }
    this.hostInstalled.set(false);
    forgetConfig();
    this.configSvc.configure({
      baseUrl: undefined,
      nermBaseUrl: undefined,
      accessToken: undefined,
      clientId: undefined,
      clientSecret: undefined,
      tokenUrl: undefined,
    });
  }
}
