import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SailPointConfigService } from '@sailpoint/angular-sdk';
import { AuthProbe } from './auth-probe';
import { AuthResultComponent } from './auth-result.component';
import { rememberConfig } from './persist';

@Component({
  selector: 'app-auth-pat',
  standalone: true,
  imports: [FormsModule, AuthResultComponent],
  providers: [AuthProbe],
  template: `
    <div class="page-header">
      <h1>Personal access token</h1>
      <p class="subtitle">A token you already hold, passed straight to the SDK</p>
    </div>

    <div class="two-col">
      <div class="card">
        <form (ngSubmit)="connect()" #f="ngForm">
          <div class="field">
            <label for="baseUrl">Tenant API base URL</label>
            <input id="baseUrl" name="baseUrl" type="url" required
                   [(ngModel)]="baseUrl"
                   placeholder="https://yourorg.api.identitynow.com" />
            <span class="hint">Host only. The SDK adds paths such as <code>/identities/v1</code>.</span>
          </div>

          <div class="field">
            <label for="token">Personal access token</label>
            <input id="token" name="token" type="password" required
                   [(ngModel)]="accessToken"
                   placeholder="eyJhbGciOiJSUzI1NiIsInR5cCI6…" />
            <span class="hint">
              Identity Security Cloud, under <strong>Preferences &rarr; Personal Access Tokens</strong>.
            </span>
          </div>

          <div class="actions">
            <button type="submit" class="btn btn-primary" [disabled]="!f.valid">
              Connect and test
            </button>
            <button type="button" class="btn btn-secondary" (click)="clear()">Clear</button>
          </div>
        </form>

        <app-auth-result [probe]="probe" />
      </div>

      <div class="card">
        <h2>How it works</h2>
        <p class="hint" style="margin-bottom: 0.9rem">
          The token is used exactly as given. The SDK never refreshes it, so a
          request fails once the token expires.
        </p>
<pre class="snippet">provideSailPoint({{ '{' }}
  baseUrl: '{{ baseUrl || 'https://yourorg.api.identitynow.com' }}',
  accessToken: 'eyJhbGciOi…',
{{ '}' }})</pre>
        <p class="hint" style="margin-top: 0.9rem">
          Current base URL: <code>{{ configSvc.basePath || '(none)' }}</code>
        </p>
      </div>
    </div>
  `,
})
export class PatComponent {
  readonly probe = inject(AuthProbe);
  readonly configSvc = inject(SailPointConfigService);

  baseUrl = this.configSvc.basePath;
  accessToken = '';

  connect(): void {
    const params = { baseUrl: this.baseUrl, accessToken: this.accessToken };
    rememberConfig(params);
    this.probe.run(params);
  }

  clear(): void {
    this.accessToken = '';
    this.probe.reset();
  }
}
