import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SailPointConfigService, type AccessTokenProvider } from '@sailpoint/angular-sdk';
import { AuthProbe } from './auth-probe';
import { AuthResultComponent } from './auth-result.component';

type Flavour = 'sync' | 'promise' | 'observable';

@Component({
  selector: 'app-auth-token-function',
  standalone: true,
  imports: [FormsModule, AuthResultComponent],
  providers: [AuthProbe],
  template: `
    <div class="page-header">
      <h1>Token function</h1>
      <p class="subtitle">The SDK asks your code for a token on every request</p>
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
            <label for="flavour">Return type</label>
            <select id="flavour" name="flavour" [(ngModel)]="flavour">
              <option value="sync">string</option>
              <option value="promise">Promise&lt;string&gt;</option>
              <option value="observable">Observable&lt;string&gt;</option>
            </select>
            <span class="hint">The SDK accepts all three.</span>
          </div>

          <div class="field">
            <label for="token">Token the function returns</label>
            <input id="token" name="token" type="password" required
                   [(ngModel)]="accessToken"
                   placeholder="eyJhbGciOiJSUzI1NiIsInR5cCI6…" />
          </div>

          <div class="actions">
            <button type="submit" class="btn btn-primary" [disabled]="!f.valid">
              Connect and test
            </button>
            <button type="button" class="btn btn-secondary" (click)="testAgain()"
                    [disabled]="probe.state() === 'idle'">
              Call again
            </button>
            @if (calls()) {
              <span class="count-badge">function called {{ calls() }}&times;</span>
            }
          </div>
        </form>

        <app-auth-result [probe]="probe" />
      </div>

      <div class="card">
        <h2>How it works</h2>
        <p class="hint" style="margin-bottom: 0.9rem">
          Use this when a token comes from somewhere else, such as an existing
          auth library or a silent refresh. The SDK calls the function for every
          request, so it always sends the current token.
        </p>
<pre class="snippet">{{ snippet() }}</pre>
        <p class="hint" style="margin-top: 0.9rem">
          Press <strong>Call again</strong> and watch the counter. It proves the
          function runs per request rather than once at start-up.
        </p>
        <p class="hint" style="margin-top: 0.6rem">
          A function cannot be written to <code>localStorage</code>, so this mode
          is not restored after a reload.
        </p>
      </div>
    </div>
  `,
})
export class TokenFunctionComponent {
  readonly probe = inject(AuthProbe);
  readonly configSvc = inject(SailPointConfigService);

  baseUrl = this.configSvc.basePath;
  accessToken = '';
  flavour: Flavour = 'sync';

  /** How many times the SDK has asked for a token. */
  readonly calls = signal(0);

  connect(): void {
    this.calls.set(0);
    this.probe.run({ baseUrl: this.baseUrl, accessToken: this.provider() });
  }

  testAgain(): void {
    this.probe.probe();
  }

  /** Build the provider in the shape the page has selected. */
  private provider(): AccessTokenProvider {
    const next = () => {
      this.calls.update((n) => n + 1);
      return this.accessToken;
    };

    switch (this.flavour) {
      case 'promise':
        return () => Promise.resolve(next());
      case 'observable':
        return () => of(next());
      default:
        return next;
    }
  }

  snippet(): string {
    const body = {
      sync: `  accessToken: () => store.token,`,
      promise: `  accessToken: () => fetchToken(),          // Promise<string>`,
      observable: `  accessToken: () => tokenService.token$,   // Observable<string>`,
    }[this.flavour];

    return `provideSailPoint({\n  baseUrl: '${this.baseUrl || 'https://yourorg.api.identitynow.com'}',\n${body}\n})`;
  }
}
