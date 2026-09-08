import { ApplicationConfig, APP_INITIALIZER, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideSailPoint, SailPointConfigService } from '@sailpoint/angular-sdk';

function restoreConfig() {
  return () => {
    const svc = inject(SailPointConfigService);
    try {
      const raw = localStorage.getItem('sailpoint_sample_config');
      if (raw) {
        const saved = JSON.parse(raw);
        svc.configure(saved);
      }
    } catch {
      // ignore parse errors
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // provideSailPoint() includes provideHttpClient() + the auth interceptor internally.
    provideSailPoint(),
    {
      provide: APP_INITIALIZER,
      useFactory: restoreConfig,
      multi: true,
    }
  ]
};
