import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SailPointConfigService } from '@sailpoint/angular-sdk';
import { AuthProbe } from './auth-probe';
import { AuthResultComponent } from './auth-result.component';

@Component({
  selector: 'app-auth-plugin',
  standalone: true,
  imports: [FormsModule, AuthResultComponent],
  providers: [AuthProbe],
  template: `
    <div class="page-header">
      <h1>Plugin auto-configuration</h1>
      <p class="subtitle">The host page supplies the base URL and the token</p>
    </div>

    <div class="two-col">
      <div class="card">
        <p class="hint" style="margin-bottom: 1rem">
          Inside a SailPoint plugin the host defines
          <code>window.sailpointConfig()</code>, and the app passes no parameters
          at all. The form below installs that function, so you can try the mode
          outside a plugin.
        </p>

        <form (ngSubmit)="install()" #f="ngForm">
          <div class="field">
            <label for="baseurl">baseurl</label>
            <input id="baseurl" name="baseurl" type="url" required
                   [(ngModel)]="baseurl"
                   placeholder="https://yourorg.api.identitynow.com" />
          </div>

          <div class="field">
            <label for="token">accessToken</label>
            <input id="token" name="token" type="password" required
                   [(ngModel)]="accessToken"
                   placeholder="eyJhbGciOiJSUzI1NiIsInR5cCI6…" />
          </div>

          <div class="field">
            <label for="nerm">nermBaseurl (optional)</label>
            <input id="nerm" name="nerm" type="url"
                   [(ngModel)]="nermBaseurl"
                   placeholder="https://yourorg.nonemployee.com" />
          </div>

          <div class="actions">
            <button type="submit" class="btn btn-primary" [disabled]="!f.valid">
              Install and test
            </button>
            <button type="button" class="btn btn-danger" (click)="remove()" [disabled]="!installed()">
              Remove
            </button>
            @if (calls()) {
              <span class="count-badge">host called {{ calls() }}&times;</span>
            }
          </div>
        </form>

        @if (installed()) {
          <div class="result running" style="margin-top: 1rem">
            <strong>window.sailpointConfig is installed.</strong>
            It now overrides every other mode, on every page of this app.
            Remove it before you try the other three.
          </div>
        }

        <app-auth-result [probe]="probe" />
      </div>

      <div class="card">
        <h2>How it works</h2>
        <p class="hint" style="margin-bottom: 0.9rem">
          The SDK checks for the host function before it looks at anything you
          passed to <code>provideSailPoint()</code>. It reads the base URLs and
          the token from the answer on every request, so the host can rotate any
          of them.
        </p>
<pre class="snippet">// the host page
window.sailpointConfig = () =&gt; ({{ '{' }}
  baseurl: '…',
  accessToken: '…',
{{ '}' }});

// the app
provideSailPoint();   // no parameters</pre>
        <p class="hint" style="margin-top: 0.9rem">
          The function may also return a <code>Promise</code>. The SDK waits for
          it before it sends the request.
        </p>
        <p class="hint" style="margin-top: 0.6rem">
          Base URL the SDK holds now: <code>{{ configSvc.basePath || '(none)' }}</code><br />
          NERM base URL: <code>{{ configSvc.nermBasePath || '(none)' }}</code>
        </p>
      </div>
    </div>
  `,
})
export class PluginConfigComponent {
  readonly probe = inject(AuthProbe);
  readonly configSvc = inject(SailPointConfigService);

  baseurl = this.configSvc.basePath;
  accessToken = '';
  nermBaseurl = '';

  readonly installed = signal(typeof window !== 'undefined' && !!window.sailpointConfig);
  readonly calls = signal(0);

  install(): void {
    this.calls.set(0);
    window.sailpointConfig = () => {
      this.calls.update((n) => n + 1);
      return {
        baseurl: this.baseurl,
        accessToken: this.accessToken,
        nermBaseurl: this.nermBaseurl || undefined,
      };
    };
    this.installed.set(true);

    // configure() clears the cached token, so the next call goes to the host.
    this.probe.run({});
  }

  remove(): void {
    delete window.sailpointConfig;
    this.installed.set(false);
    this.calls.set(0);
    this.probe.reset();
  }
}
