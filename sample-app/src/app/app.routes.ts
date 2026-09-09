import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'config', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth-index.component').then(m => m.AuthIndexComponent)
  },
  {
    path: 'auth/pat',
    loadComponent: () => import('./pages/auth/pat.component').then(m => m.PatComponent)
  },
  {
    path: 'auth/client-credentials',
    loadComponent: () => import('./pages/auth/client-credentials.component').then(m => m.ClientCredentialsComponent)
  },
  {
    path: 'auth/token-function',
    loadComponent: () => import('./pages/auth/token-function.component').then(m => m.TokenFunctionComponent)
  },
  {
    path: 'auth/plugin',
    loadComponent: () => import('./pages/auth/plugin-config.component').then(m => m.PluginConfigComponent)
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
