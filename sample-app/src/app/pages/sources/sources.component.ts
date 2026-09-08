import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Source, SourcesService } from '@sailpoint/angular-sdk/sources';
import { Paginator, SailPointConfigService } from '@sailpoint/angular-sdk';

@Component({
  selector: 'app-sources',
  standalone: true,
  imports: [RouterLink],
  providers: [SourcesService],
  template: `
    <div class="page-header">
      <h1>Sources</h1>
      <p class="subtitle">SDK call: <code>SourcesService.listSourcesV1()</code></p>
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
        @if (sources().length) {
          <span class="count-badge">{{ sources().length }} results</span>
        }
      </div>

      @if (error()) {
        <div class="alert error"><strong>Error:</strong> {{ error() }}</div>
      }

      @if (sources().length) {
        <div class="table-wrapper card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Connector</th>
                <th>Health</th>
                <th>Authoritative</th>
              </tr>
            </thead>
            <tbody>
              @for (source of sources(); track source.id) {
                <tr>
                  <td><strong>{{ source.name }}</strong></td>
                  <td>{{ source.type ?? '—' }}</td>
                  <td>{{ source.connectorName ?? source.connector }}</td>
                  <td>
                    <span class="badge" [class]="source.healthy ? 'badge-green' : 'badge-red'">
                      {{ source.healthy ? 'Healthy' : 'Unhealthy' }}
                    </span>
                  </td>
                  <td>
                    @if (source.authoritative) {
                      <span class="badge badge-blue">Yes</span>
                    } @else {
                      <span class="text-muted">No</span>
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

      @if (!loading() && !sources().length && !error()) {
        <p class="empty-state">Click a button above to fetch sources.</p>
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
export class SourcesComponent {
  private svc = inject(SourcesService);
  configSvc = inject(SailPointConfigService);

  loading = signal(false);
  sources = signal<Source[]>([]);
  error = signal<string | null>(null);

  load(limit: number) {
    this.loading.set(true);
    this.error.set(null);
    this.sources.set([]);

    this.svc.listSourcesV1({ limit }).subscribe({
      next: (data) => { this.sources.set(data); this.loading.set(false); },
      error: (err) => { this.error.set(extractMessage(err)); this.loading.set(false); }
    });
  }

  loadAll() {
    this.loading.set(true);
    this.error.set(null);
    this.sources.set([]);

    Paginator.paginate(
      (p) => this.svc.listSourcesV1(p),
      {},
      100
    ).subscribe({
      next: (data) => { this.sources.set(data); this.loading.set(false); },
      error: (err) => { this.error.set(extractMessage(err)); this.loading.set(false); }
    });
  }
}

function extractMessage(err: any): string {
  return err?.error?.messages?.[0]?.text ?? err?.message ?? 'Unknown error';
}
