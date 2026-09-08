import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SailPointConfigService } from '@sailpoint/angular-sdk/sailpoint-config.service';

type AuthMode = 'pat' | 'client_credentials';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="page-header">
      <h1>Configuration</h1>
      <p class="subtitle">Connect to your SailPoint Identity Security Cloud tenant</p>
    </div>

    <div class="card config-card">
      <form (ngSubmit)="save()" #f="ngForm">
        <div class="field">
          <label for="baseUrl">Tenant API Base URL</label>
          <input
            id="baseUrl"
            type="url"
            [(ngModel)]="baseUrl"
            name="baseUrl"
            required
            placeholder="https://yourorg.api.identitynow.com"
          />
          <span class="hint">Root hostname only — the SDK appends versioned paths like <code>/accounts/v1</code></span>
        </div>

        <div class="auth-tabs">
          <button type="button" class="tab" [class.active]="mode() === 'pat'" (click)="mode.set('pat')">
            Personal Access Token
          </button>
          <button type="button" class="tab" [class.active]="mode() === 'client_credentials'" (click)="mode.set('client_credentials')">
            Client Credentials (OAuth2)
          </button>
        </div>

        @if (mode() === 'pat') {
          <div class="field">
            <label for="pat">Personal Access Token</label>
            <input
              id="pat"
              type="password"
              [(ngModel)]="accessToken"
              name="accessToken"
              placeholder="eyJhbGciOiJSUzI1NiIsInR5cCI6..."
            />
            <span class="hint">
              Generate in IdentityNow under <strong>Preferences → Personal Access Tokens</strong>
            </span>
          </div>
        }

        @if (mode() === 'client_credentials') {
          <div class="field">
            <label for="clientId">Client ID</label>
            <input
              id="clientId"
              type="text"
              [(ngModel)]="clientId"
              name="clientId"
              placeholder="ab123456-7890-abcd-ef01-234567890abc"
            />
          </div>
          <div class="field">
            <label for="clientSecret">Client Secret</label>
            <input
              id="clientSecret"
              type="password"
              [(ngModel)]="clientSecret"
              name="clientSecret"
              placeholder="••••••••••••••••"
            />
            <span class="hint">
              The SDK will exchange these for a Bearer token at <code>&#123;baseUrl&#125;/oauth/token</code>
              and cache it until it expires.
            </span>
          </div>
        }

        <div class="actions">
          <button type="submit" class="btn btn-primary" [disabled]="!f.valid">
            Save &amp; Connect
          </button>
          @if (configured()) {
            <button type="button" class="btn btn-danger" (click)="clear()">
              Clear Credentials
            </button>
          }
        </div>
      </form>

      @if (configured()) {
        <div class="status-banner success">
          <span class="status-dot"></span>
          Connected to <strong>{{ configSvc.basePath }}</strong>
        </div>
      }
    </div>

    <div class="card help-card">
      <h2>How it works</h2>
      <ol>
        <li>Enter your API base URL and auth credentials above.</li>
        <li>The SDK's <code>SailPointHttpInterceptor</code> automatically adds <code>Authorization: Bearer …</code> to every request.</li>
        <li>Client-credentials tokens are fetched once and cached until expiry — no manual token management needed.</li>
        <li>Navigate to <strong>Identities</strong>, <strong>Accounts</strong>, or <strong>Sources</strong> to call live APIs with pagination.</li>
      </ol>
      <p class="note">
        Credentials are stored in <code>localStorage</code> and only sent to your own tenant.
        In a SailPoint plugin context, omit all config and set <code>window.sailpointConfig()</code>
        instead — the SDK detects it automatically.
      </p>
    </div>
  `,
  styles: [`
    .config-card { max-width: 640px; }
    .field { margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.4rem; }
    label { font-weight: 600; font-size: 0.9rem; color: var(--text-secondary); }
    input {
      padding: 0.65rem 0.9rem; border: 1.5px solid var(--border);
      border-radius: 8px; font-size: 1rem; background: var(--surface);
      color: var(--text); transition: border-color 0.2s;
    }
    input:focus { outline: none; border-color: var(--accent); }
    .hint { font-size: 0.8rem; color: var(--text-muted); }
    .auth-tabs { display: flex; gap: 0; margin-bottom: 1.5rem; border: 1.5px solid var(--border); border-radius: 8px; overflow: hidden; }
    .tab {
      flex: 1; padding: 0.55rem 1rem; background: var(--surface-alt);
      border: none; cursor: pointer; font-size: 0.88rem; font-weight: 500;
      color: var(--text-secondary); transition: background 0.15s, color 0.15s;
    }
    .tab + .tab { border-left: 1.5px solid var(--border); }
    .tab.active { background: var(--accent); color: #fff; font-weight: 600; }
    .actions { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
    .status-banner {
      display: flex; align-items: center; gap: 0.6rem;
      margin-top: 1.5rem; padding: 0.75rem 1rem;
      border-radius: 8px; font-size: 0.9rem;
    }
    .status-banner.success { background: #e6f9f0; color: #1a7a4a; border: 1px solid #a3dfc0; }
    .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
    .help-card { max-width: 640px; margin-top: 1.5rem; }
    .help-card h2 { margin-bottom: 1rem; font-size: 1.1rem; }
    ol { padding-left: 1.4rem; display: flex; flex-direction: column; gap: 0.6rem; }
    li { color: var(--text-secondary); font-size: 0.9rem; }
    .note { margin-top: 1rem; font-size: 0.82rem; color: var(--text-muted); padding: 0.6rem 0.9rem; background: var(--surface-alt); border-radius: 6px; }
  `]
})
export class ConfigComponent {
  configSvc = inject(SailPointConfigService);
  router = inject(Router);

  mode = signal<AuthMode>('pat');

  baseUrl = this.configSvc.basePath;
  accessToken = '';
  clientId = '';
  clientSecret = '';

  configured() {
    return !!this.configSvc.basePath;
  }

  save() {
    if (this.mode() === 'pat') {
      this.configSvc.configure({
        baseUrl: this.baseUrl,
        accessToken: this.accessToken || undefined,
      });
    } else {
      this.configSvc.configure({
        baseUrl: this.baseUrl,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });
    }
    // Persist across page reloads
    localStorage.setItem('sailpoint_sample_config', JSON.stringify({
      baseUrl: this.baseUrl,
      mode: this.mode(),
      accessToken: this.mode() === 'pat' ? this.accessToken : undefined,
      clientId: this.mode() === 'client_credentials' ? this.clientId : undefined,
      clientSecret: this.mode() === 'client_credentials' ? this.clientSecret : undefined,
    }));
    this.router.navigate(['/identities']);
  }

  clear() {
    localStorage.removeItem('sailpoint_sample_config');
    this.configSvc.configure({ baseUrl: undefined, accessToken: undefined, clientId: undefined, clientSecret: undefined });
    this.baseUrl = '';
    this.accessToken = '';
    this.clientId = '';
    this.clientSecret = '';
  }
}
