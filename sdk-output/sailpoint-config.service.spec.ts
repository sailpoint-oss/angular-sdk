import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import {
  SAILPOINT_CONFIG_PARAMS,
  SailPointConfigService,
  type SailPointConfigProvider,
  type SailPointParams,
} from './sailpoint-config.service';

/** Build a service with the given start-up parameters. */
function configure(params?: SailPointParams): SailPointConfigService {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      ...(params ? [{ provide: SAILPOINT_CONFIG_PARAMS, useValue: params }] : []),
    ],
  });
  return TestBed.inject(SailPointConfigService);
}

/** Pretend the plugin host exposes window.sailpointConfig(). */
function setWindowProvider(provider: SailPointConfigProvider): void {
  (globalThis as any).window.sailpointConfig = provider;
}

/** Resolve the one value the token Observable emits. */
function token(service: SailPointConfigService): Promise<string> {
  return new Promise((resolve, reject) => {
    service.getToken().subscribe({ next: resolve, error: reject });
  });
}

afterEach(() => {
  delete (globalThis as any).window.sailpointConfig;
  TestBed.resetTestingModule();
});

describe('base URLs', () => {
  it('strips a trailing slash from the base URL', () => {
    const service = configure({ baseUrl: 'https://acme.api.identitynow.com/' });

    expect(service.basePath).toStrictEqual('https://acme.api.identitynow.com');
  });

  it('is empty when no base URL is configured', () => {
    expect(configure().basePath).toStrictEqual('');
  });

  it('strips a trailing /api from the NERM base URL', () => {
    // The generated NERM paths already carry /api, so keeping it here would
    // produce /api/api/ne_attributes.
    const service = configure({ nermBaseUrl: 'https://acme.nonemployee.com/api' });

    expect(service.nermBasePath).toStrictEqual('https://acme.nonemployee.com');
  });

  it('accepts a NERM base URL that is already the bare origin', () => {
    const service = configure({ nermBaseUrl: 'https://acme.nonemployee.com' });

    expect(service.nermBasePath).toStrictEqual('https://acme.nonemployee.com');
  });
});

describe('retry settings', () => {
  it('defaults to 3 retries and a 1000 ms delay', () => {
    const service = configure();

    expect(service.retries).toStrictEqual(3);
    expect(service.retryDelay).toStrictEqual(1000);
  });

  it('takes the configured values', () => {
    const service = configure({ retries: 5, retryDelay: 250 });

    expect(service.retries).toStrictEqual(5);
    expect(service.retryDelay).toStrictEqual(250);
  });
});

describe('access tokens', () => {
  it('serves a static token', async () => {
    const service = configure({ accessToken: 'static-token' });

    expect(await token(service)).toStrictEqual('static-token');
  });

  it('calls a token function on every request', async () => {
    let calls = 0;
    const service = configure({ accessToken: () => `token-${++calls}` });

    expect(await token(service)).toStrictEqual('token-1');
    expect(await token(service)).toStrictEqual('token-2');
  });

  it('awaits a token promise', async () => {
    const service = configure({ accessToken: () => Promise.resolve('async-token') });

    expect(await token(service)).toStrictEqual('async-token');
  });

  it('takes the first value of a token Observable', async () => {
    const service = configure({ accessToken: () => of('observable-token') });

    expect(await token(service)).toStrictEqual('observable-token');
  });

  it('reports that no authentication is configured', async () => {
    const service = configure({ baseUrl: 'https://acme.api.identitynow.com' });

    await expect(token(service)).rejects.toThrow(
      'SailPoint SDK: no authentication configured.'
    );
  });
});

describe('configure()', () => {
  it('merges new parameters into the existing ones', () => {
    const service = configure({ baseUrl: 'https://acme.api.identitynow.com' });

    service.configure({ accessToken: 'later-token' });

    expect(service.params().baseUrl).toStrictEqual('https://acme.api.identitynow.com');
    expect(service.params().accessToken).toStrictEqual('later-token');
  });

  it('replaces the base URL', () => {
    const service = configure({ baseUrl: 'https://acme.api.identitynow.com' });

    service.configure({ baseUrl: 'https://acme-eu.api.identitynow.com' });

    expect(service.basePath).toStrictEqual('https://acme-eu.api.identitynow.com');
  });
});

describe('window.sailpointConfig auto-configuration', () => {
  it('reads both base URLs and the token from the host', async () => {
    setWindowProvider(() => ({
      baseurl: 'https://acme.api.identitynow.com',
      nermBaseurl: 'https://acme.nonemployee.com',
      accessToken: 'window-token',
    }));
    const service = configure();

    expect(await token(service)).toStrictEqual('window-token');
    expect(service.basePath).toStrictEqual('https://acme.api.identitynow.com');
    expect(service.nermBasePath).toStrictEqual('https://acme.nonemployee.com');
  });

  it('awaits an async host provider', async () => {
    setWindowProvider(async () => ({
      baseurl: 'https://acme.api.identitynow.com',
      accessToken: 'async-window-token',
    }));
    const service = configure();

    expect(await token(service)).toStrictEqual('async-window-token');
  });

  it('picks up a base URL the host rotates between requests', async () => {
    let baseurl = 'https://acme.api.identitynow.com';
    setWindowProvider(() => ({ baseurl, accessToken: 'window-token' }));
    const service = configure();

    await token(service);
    expect(service.basePath).toStrictEqual('https://acme.api.identitynow.com');

    baseurl = 'https://acme-eu.api.identitynow.com';
    await token(service);

    expect(service.basePath).toStrictEqual('https://acme-eu.api.identitynow.com');
  });

  it('reports a host provider that returns no token', async () => {
    setWindowProvider(() => ({ baseurl: 'https://acme.api.identitynow.com' }) as any);
    const service = configure();

    await expect(token(service)).rejects.toThrow(
      'window.sailpointConfig() did not return an accessToken.'
    );
  });

  it('takes precedence over explicitly configured parameters', async () => {
    // The host owns the session in a plugin context, so it wins.
    setWindowProvider(() => ({
      baseurl: 'https://window.api.identitynow.com',
      accessToken: 'window-token',
    }));
    const service = configure({
      baseUrl: 'https://explicit.api.identitynow.com',
      accessToken: 'explicit-token',
    });

    expect(await token(service)).toStrictEqual('window-token');
  });

  it('is inert when the host page exposes no provider', async () => {
    const service = configure({
      baseUrl: 'https://acme.api.identitynow.com',
      accessToken: 'explicit-token',
    });

    expect(await token(service)).toStrictEqual('explicit-token');
  });
});

describe('client credentials', () => {
  let http: HttpTestingController;
  let service: SailPointConfigService;

  beforeEach(() => {
    service = configure({
      baseUrl: 'https://acme.api.identitynow.com',
      clientId: 'client-id',
      clientSecret: 'client-secret',
    });
    http = TestBed.inject(HttpTestingController);
  });

  it('exchanges the credentials at the default token URL', async () => {
    const pending = token(service);

    const request = http.expectOne('https://acme.api.identitynow.com/oauth/token');
    expect(request.request.method).toStrictEqual('POST');
    expect(request.request.body).toContain('grant_type=client_credentials');
    expect(request.request.body).toContain('client_id=client-id');
    expect(request.request.body).toContain('client_secret=client-secret');
    request.flush({ access_token: 'exchanged-token', token_type: 'Bearer', expires_in: 3600 });

    expect(await pending).toStrictEqual('exchanged-token');
    http.verify();
  });

  it('honours an overridden token URL', async () => {
    service.configure({ tokenUrl: 'https://auth.example.com/token' });
    const pending = token(service);

    const request = http.expectOne('https://auth.example.com/token');
    request.flush({ access_token: 'custom-url-token', token_type: 'Bearer', expires_in: 3600 });

    expect(await pending).toStrictEqual('custom-url-token');
    http.verify();
  });

  it('serves a cached token without a second exchange', async () => {
    const first = token(service);
    http.expectOne('https://acme.api.identitynow.com/oauth/token')
      .flush({ access_token: 'cached-token', token_type: 'Bearer', expires_in: 3600 });
    expect(await first).toStrictEqual('cached-token');

    expect(await token(service)).toStrictEqual('cached-token');

    http.verify();
  });

  it('exchanges again after invalidateToken()', async () => {
    const first = token(service);
    http.expectOne('https://acme.api.identitynow.com/oauth/token')
      .flush({ access_token: 'first-token', token_type: 'Bearer', expires_in: 3600 });
    await first;

    service.invalidateToken();

    const second = token(service);
    http.expectOne('https://acme.api.identitynow.com/oauth/token')
      .flush({ access_token: 'second-token', token_type: 'Bearer', expires_in: 3600 });

    expect(await second).toStrictEqual('second-token');
    http.verify();
  });

  it('reports a failed exchange', async () => {
    const pending = token(service);

    http.expectOne('https://acme.api.identitynow.com/oauth/token')
      .flush({ error: 'invalid_client' }, { status: 401, statusText: 'Unauthorized' });

    await expect(pending).rejects.toThrow(
      'SailPoint SDK: failed to obtain access token via client credentials.'
    );
    http.verify();
  });
});
