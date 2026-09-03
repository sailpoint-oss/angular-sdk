import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'config', pathMatch: 'full' },
  {
    path: 'config',
    loadComponent: () => import('./pages/config/config.component').then(m => m.ConfigComponent)
  },
  {
    path: 'identities',
    loadComponent: () => import('./pages/identities/identities.component').then(m => m.IdentitiesComponent)
  },
  {
    path: 'accounts',
    loadComponent: () => import('./pages/accounts/accounts.component').then(m => m.AccountsComponent)
  },
  {
    path: 'sources',
    loadComponent: () => import('./pages/sources/sources.component').then(m => m.SourcesComponent)
  }
];
