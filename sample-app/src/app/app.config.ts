import { ApplicationConfig, provideAppInitializer, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideSailPoint, SailPointConfigService } from '@sailpoint/angular-sdk';
import { readConfig } from './pages/auth/persist';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // provideSailPoint() includes provideHttpClient() and the auth interceptor.
    // It is called with no parameters, so every mode is set on an auth page.
    provideSailPoint(),
    // Bring back whatever the last authentication page stored, so the API pages
    // still work after a reload. Only plain values survive, which means the
    // token function and the host function are not restored.
    provideAppInitializer(() => {
      const saved = readConfig();
      if (saved) {
        inject(SailPointConfigService).configure(saved);
      }
    }),
  ]
};
