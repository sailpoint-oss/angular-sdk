import { Component, input } from '@angular/core';
import { AuthProbe } from './auth-probe';

/** Shows the outcome of a connection test. Shared by every authentication page. */
@Component({
  selector: 'app-auth-result',
  standalone: true,
  template: `
    @if (probe().state() !== 'idle') {
      <div
        class="result"
        [class.ok]="probe().state() === 'ok'"
        [class.failed]="probe().state() === 'failed'"
        [class.running]="probe().state() === 'running'"
      >
        @switch (probe().state()) {
          @case ('running') {
            <strong>Testing…</strong> {{ probe().message() }}
          }
          @case ('ok') {
            <strong>Connected.</strong> {{ probe().message() }}
            Returned {{ probe().count() }} identity record(s).
          }
          @case ('failed') {
            <strong>Failed.</strong> {{ probe().message() }}
          }
        }
      </div>
    }
  `,
})
export class AuthResultComponent {
  readonly probe = input.required<AuthProbe>();
}
