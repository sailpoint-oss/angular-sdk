import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Account, AccountsService } from '@sailpoint/angular-sdk/accounts';
import { Paginator, SailPointConfigService } from '@sailpoint/angular-sdk';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [RouterLink],
  providers: [AccountsService],
  template: `
    <div class="page-header">
      <h1>Accounts</h1>
      <p class="subtitle">SDK call: <code>AccountsService.listAccountsV1()</code></p>
    </div>

    @if (!configSvc.basePath) {
      <div class="not-configured card">
        <span class="icon">&#128274;</span>
        <p>No credentials configured. <a routerLink="/auth">Choose an authentication mode</a> first.</p>
      </div>
    } @else {
      <div class="toolbar">
        <button class="btn btn-primary" (click)="load(50)" [disabled]="loading()">
          @if (loading()) { Loading… } @else { Fetch (limit 50) }
        </button>
        <button class="btn btn-secondary" (click)="loadAll()" [disabled]="loading()">
          @if (loading()) { Loading… } @else { Paginate All }
        </button>
        @if (accounts().length) {
          <span class="count-badge">{{ accounts().length }} results</span>
        }
      </div>

      @if (error()) {
        <div class="alert error"><strong>Error:</strong> {{ error() }}</div>
      }

      @if (accounts().length) {
        <div class="table-wrapper card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Source</th>
                <th>Connection Type</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              @for (account of accounts(); track account.id) {
                <tr>
                  <td><strong>{{ account.name ?? '—' }}</strong></td>
                  <td>{{ account.sourceName ?? '—' }}</td>
                  <td><span class="badge badge-blue">{{ account.connectionType ?? 'direct' }}</span></td>
                  <td class="text-muted">{{ account.created?.slice(0, 10) ?? '—' }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

      @if (!loading() && !accounts().length && !error()) {
        <p class="empty-state">Click a button above to fetch accounts.</p>
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
export class AccountsComponent {
  private svc = inject(AccountsService);
  configSvc = inject(SailPointConfigService);

  loading = signal(false);
  accounts = signal<Account[]>([]);
  error = signal<string | null>(null);

  load(limit: number) {
    this.loading.set(true);
    this.error.set(null);
    this.accounts.set([]);

    this.svc.listAccountsV1({ limit }).subscribe({
      next: (data) => { this.accounts.set(data); this.loading.set(false); },
      error: (err) => { this.error.set(extractMessage(err)); this.loading.set(false); }
    });
  }

  loadAll() {
    this.loading.set(true);
    this.error.set(null);
    this.accounts.set([]);

    Paginator.paginate(
      (p) => this.svc.listAccountsV1(p),
      {},
      100
    ).subscribe({
      next: (data) => { this.accounts.set(data); this.loading.set(false); },
      error: (err) => { this.error.set(extractMessage(err)); this.loading.set(false); }
    });
  }
}

function extractMessage(err: any): string {
  return err?.error?.messages?.[0]?.text ?? err?.message ?? 'Unknown error';
}
