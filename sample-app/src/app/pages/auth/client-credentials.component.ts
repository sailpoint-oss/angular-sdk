import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SailPointConfigService } from '@sailpoint/angular-sdk';
import { AuthProbe } from './auth-probe';
import { AuthResultComponent } from './auth-result.component';
import { rememberConfig } from './persist';

@Component({
  selector: 'app-auth-client-credentials',
  standalone: true,
  imports: [FormsModule, AuthResultComponent],
  providers: [AuthProbe],
  template: `
    <div class="page-header">
      <h1>Client credentials</h1>
      <p class="subtitle">The SDK exchanges an ID and secret for a token, then caches it</p>
    </div>

    <div class="two-col">
      <div class="card">
        <form (ngSubmit)="connect()" #f="ngForm">
          <div class="field">
            <label for="baseUrl">Tenant API base URL</label>
            <input id="baseUrl" name="baseUrl" type="url" required
                   [(ngModel)]="baseUrl"
                   placeholder="https://yourorg.api.identitynow.com" />
          </div>

          <div class="field">
            <label for="clientId">Client ID</label>
            <input id="clientId" name="clientId" type="text" required
                   [(ngModel)]="clientId"
                   placeholder="ab123456-7890-abcd-ef01-234567890abc" />
          </div>

          <div class="field">
            <label for="clientSecret">Client secret</label>
            <input id="clientSecret" name="clientSecret" type="password" required
                   [(ngModel)]="clientSecret"
                   placeholder="••••••••••••••••" />
          </div>

          <div class="field">
            <label for="tokenUrl">Token URL (optional)</label>
            <input id="tokenUrl" name="tokenUrl" type="url"
                   [(ngModel)]="tokenUrl"
                   placeholder="{baseUrl}/oauth/token" />
            <span class="hint">Leave empty to use <code>&#123;baseUrl&#125;/oauth/token</code>.</span>
          </div>

          <div class="actions">
            <button type="submit" class="btn btn-primary" [disabled]="!f.valid">
              Connect and test
            </button>
            <button type="button" class="btn btn-secondary" (click)="testAgain()"
                    [disabled]="probe.state() === 'idle'">
              Call again (cached token)
            </button>
          </div>
        </form>

        <app-auth-result [probe]="probe" />
      </div>

      <div class="card">
        <h2>How it works</h2>
        <ol style="padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-secondary)">
          <li>The first request posts <code>grant_type=client_credentials</code> to the token URL.</li>
          <li>The token is cached until 10 seconds before it expires.</li>
          <li>Requests that arrive together share one exchange.</li>
          <li>A 401 clears the cache, fetches a new token, and retries once.</li>
        </ol>
<pre class="snippet">provideSailPoint({{ '{' }}
  baseUrl: '{{ baseUrl || 'https://yourorg.api.identitynow.com' }}',
  clientId: '…',
  clientSecret: '…',
{{ '}' }})</pre>
        <p class="hint" style="margin-top: 0.9rem">
          Use <strong>Call again</strong> to confirm the second call reuses the
          cached token instead of exchanging the secret again. Watch the network
          tab: there is no second request to <code>/oauth/token</code>.
        </p>
      </div>
    </div>
  `,
})
export class ClientCredentialsComponent {
  readonly probe = inject(AuthProbe);
  readonly configSvc = inject(SailPointConfigService);

  baseUrl = this.configSvc.basePath;
  clientId = '';
  clientSecret = '';
  tokenUrl = '';

  connect(): void {
    const params = {
      baseUrl: this.baseUrl,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      tokenUrl: this.tokenUrl || undefined,
    };
    rememberConfig(params);
    this.probe.run(params);
  }

  testAgain(): void {
    this.probe.probe();
  }
}
