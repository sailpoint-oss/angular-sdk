import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IdentitiesService } from '@sailpoint/angular-sdk/identities/api/identities.service';
import { Identity } from '@sailpoint/angular-sdk/identities/model/identity';
import { SailPointConfigService } from '@sailpoint/angular-sdk/sailpoint-config.service';
import { Paginator } from '@sailpoint/angular-sdk/paginator';

@Component({
  selector: 'app-identities',
  standalone: true,
  imports: [RouterLink],
  providers: [IdentitiesService],
  template: `
    <div class="page-header">
      <h1>Identities</h1>
      <p class="subtitle">SDK call: <code>IdentitiesService.listIdentitiesV1()</code></p>
    </div>

    @if (!configSvc.basePath) {
      <div class="not-configured card">
        <span class="icon">&#128274;</span>
        <p>No credentials configured. <a routerLink="/config">Set up your connection</a> first.</p>
      </div>
    } @else {
      <div class="toolbar">
        <button class="btn btn-primary" (click)="load(50)" [disabled]="loading()">
          @if (loading()) { Loading… } @else { Fetch (limit 50) }
        </button>
        <button class="btn btn-secondary" (click)="loadAll()" [disabled]="loading()">
          @if (loading()) { Loading… } @else { Paginate All }
        </button>
        @if (identities().length) {
          <span class="count-badge">{{ identities().length }} results</span>
        }
      </div>

      @if (error()) {
        <div class="alert error"><strong>Error:</strong> {{ error() }}</div>
      }

      @if (identities().length) {
        <div class="table-wrapper card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              @for (identity of identities(); track identity.id) {
                <tr>
                  <td><strong>{{ identity.name }}</strong></td>
                  <td>{{ identity.emailAddress ?? '—' }}</td>
                  <td>
                    <span class="badge" [class]="statusClass(identity.identityStatus)">
                      {{ identity.identityStatus ?? 'unknown' }}
                    </span>
                  </td>
                  <td class="mono text-muted">{{ identity.id }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

      @if (!loading() && !identities().length && !error()) {
        <p class="empty-state">Click a button above to fetch identities.</p>
      }
    }
  `,
  styles: [`
    .toolbar { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
    .not-configured { display: flex; align-items: center; gap: 1rem; }
    .icon { font-size: 2rem; }
    .empty-state { color: var(--text-muted); padding: 2rem 0; }
  `]
})
export class IdentitiesComponent {
  // Injected directly — no manual instantiation or Configuration boilerplate.
  private svc = inject(IdentitiesService);
  configSvc = inject(SailPointConfigService);

  loading = signal(false);
  identities = signal<Identity[]>([]);
  error = signal<string | null>(null);

  load(limit: number) {
    this.loading.set(true);
    this.error.set(null);
    this.identities.set([]);

    this.svc.listIdentitiesV1({ limit }).subscribe({
      next: (data) => { this.identities.set(data); this.loading.set(false); },
      error: (err) => { this.error.set(extractMessage(err)); this.loading.set(false); }
    });
  }

  loadAll() {
    this.loading.set(true);
    this.error.set(null);
    this.identities.set([]);

    Paginator.paginate(
      (p) => this.svc.listIdentitiesV1(p),
      {},
      100
    ).subscribe({
      next: (data) => { this.identities.set(data); this.loading.set(false); },
      error: (err) => { this.error.set(extractMessage(err)); this.loading.set(false); }
    });
  }

  statusClass(status?: string | null): string {
    const s = (status ?? '').toUpperCase();
    if (s === 'ACTIVE') return 'badge-green';
    if (s === 'DISABLED' || s === 'DEACTIVATED' || s === 'TERMINATED') return 'badge-gray';
    if (s === 'ERROR' || s === 'LOCKED') return 'badge-red';
    return 'badge-yellow';
  }
}

function extractMessage(err: any): string {
  return err?.error?.messages?.[0]?.text ?? err?.message ?? 'Unknown error';
}
