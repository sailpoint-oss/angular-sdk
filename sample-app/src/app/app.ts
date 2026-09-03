import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SailPointConfigService } from 'sailpoint-angular-sdk/sailpoint-config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-icon">SP</div>
          <div>
            <div class="brand-name">SailPoint</div>
            <div class="brand-sub">Angular SDK Demo</div>
          </div>
        </div>

        <nav>
          <a routerLink="/config" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">&#9881;&#65039;</span> Configuration
          </a>
          <a routerLink="/identities" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">&#128100;</span> Identities
          </a>
          <a routerLink="/accounts" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">&#128196;</span> Accounts
          </a>
          <a routerLink="/sources" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">&#128268;</span> Sources
          </a>
        </nav>

        <div class="sidebar-footer">
          @if (svc.basePath) {
            <div class="conn-indicator connected">
              <span class="dot"></span> Connected
            </div>
          } @else {
            <div class="conn-indicator disconnected">
              <span class="dot"></span> Not configured
            </div>
          }
        </div>
      </aside>

      <main class="content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100vh; }
    .layout { display: flex; height: 100vh; }
    .sidebar {
      width: 240px;
      min-width: 240px;
      background: var(--sidebar-bg);
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      padding: 0;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.25rem 1.25rem 1rem;
      border-bottom: 1px solid var(--border);
    }
    .brand-icon {
      width: 36px; height: 36px;
      border-radius: 8px;
      background: var(--accent);
      color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.85rem; flex-shrink: 0;
    }
    .brand-name { font-weight: 700; font-size: 0.95rem; }
    .brand-sub { font-size: 0.72rem; color: var(--text-muted); }
    nav { flex: 1; padding: 0.75rem 0; }
    .nav-item {
      display: flex; align-items: center; gap: 0.6rem;
      padding: 0.6rem 1.25rem;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      border-radius: 0;
      transition: background 0.15s, color 0.15s;
    }
    .nav-item:hover { background: var(--surface-alt); color: var(--text); }
    .nav-item.active { background: var(--accent-subtle); color: var(--accent); font-weight: 600; }
    .nav-icon { font-size: 1rem; width: 20px; }
    .sidebar-footer { padding: 1rem 1.25rem; border-top: 1px solid var(--border); }
    .conn-indicator { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; }
    .conn-indicator .dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .connected { color: #16a34a; }
    .connected .dot { background: #22c55e; }
    .disconnected { color: var(--text-muted); }
    .disconnected .dot { background: #94a3b8; }
    .content { flex: 1; overflow-y: auto; padding: 2rem 2.5rem; background: var(--bg); }
  `]
})
export class App {
  svc = inject(SailPointConfigService);
}
