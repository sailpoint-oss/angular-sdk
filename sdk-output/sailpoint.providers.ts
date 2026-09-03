import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  SAILPOINT_CONFIG_PARAMS,
  SailPointParams,
} from './sailpoint-config.service';
import { sailpointInterceptor } from './sailpoint.interceptor';

/**
 * Register the SailPoint Angular SDK in your application.
 *
 * Add to `providers` in `app.config.ts`. This function provides `HttpClient`
 * with the SailPoint interceptor wired in, so **do not** call `provideHttpClient()`
 * separately. If you need additional interceptors, pass them in `extraInterceptors`.
 *
 * ```typescript
 * // app.config.ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideSailPoint({
 *       baseUrl: 'https://acme.api.identitynow.com',
 *       accessToken: 'eyJ...',
 *     }),
 *   ],
 * };
 * ```
 *
 * ### Auth modes
 *
 * | Mode | Config keys |
 * |------|-------------|
 * | Personal Access Token | `baseUrl` + `accessToken` |
 * | Client Credentials (OAuth2) | `baseUrl` + `clientId` + `clientSecret` |
 * | Dynamic token function | `baseUrl` + `accessToken: () => fetchToken()` |
 * | Plugin auto-config | *(no params)* — detects `window.sailpointConfig()` |
 *
 * ### Runtime updates
 * ```typescript
 * inject(SailPointConfigService).configure({ baseUrl: '...', accessToken: '...' });
 * ```
 */
export function provideSailPoint(params?: SailPointParams): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: SAILPOINT_CONFIG_PARAMS,
      useValue: params ?? {},
    },
    provideHttpClient(withInterceptors([sailpointInterceptor])),
  ]);
}
