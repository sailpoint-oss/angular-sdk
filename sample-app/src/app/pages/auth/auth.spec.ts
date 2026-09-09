import { afterEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideSailPoint } from '@sailpoint/angular-sdk';
import { PatComponent } from './pat.component';
import { ClientCredentialsComponent } from './client-credentials.component';
import { TokenFunctionComponent } from './token-function.component';
import { PluginConfigComponent } from './plugin-config.component';
import { STORAGE_KEY } from './persist';

const BASE_URL = 'https://acme.api.identitynow.com';

function mount<T>(component: new (...args: any[]) => T) {
  TestBed.configureTestingModule({
    providers: [provideRouter([]), provideSailPoint(), provideHttpClientTesting()],
  });
  const fixture = TestBed.createComponent(component);
  fixture.detectChanges();
  return {
    page: fixture.componentInstance as any,
    fixture,
    backend: TestBed.inject(HttpTestingController),
  };
}

/** The one identities request the probe makes, whatever the query string is. */
function expectProbeCall(backend: HttpTestingController) {
  return backend.expectOne((r) => r.url === `${BASE_URL}/identities/v1`);
}

/**
 * Let the microtask queue drain. The SDK wraps window.sailpointConfig() in
 * Promise.resolve(), so the host path is asynchronous even when the host
 * function itself is synchronous.
 */
function tick(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

afterEach(() => {
  delete (globalThis as any).window.sailpointConfig;
  localStorage.removeItem(STORAGE_KEY);
  TestBed.resetTestingModule();
});

describe('personal access token', () => {
  it('sends the token as a bearer header', () => {
    const { page, backend } = mount(PatComponent);
    page.baseUrl = BASE_URL;
    page.accessToken = 'pat-token';

    page.connect();

    const request = expectProbeCall(backend);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer pat-token');
    request.flush([{ id: 'a' }]);

    expect(page.probe.state()).toStrictEqual('ok');
    expect(page.probe.count()).toStrictEqual(1);
    backend.verify();
  });

  it('keeps the parameters for the next page load', () => {
    const { page, backend } = mount(PatComponent);
    page.baseUrl = BASE_URL;
    page.accessToken = 'pat-token';

    page.connect();
    expectProbeCall(backend).flush([]);

    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toMatchObject({
      baseUrl: BASE_URL,
      accessToken: 'pat-token',
    });
    backend.verify();
  });

  it('reports a rejected token', () => {
    const { page, backend } = mount(PatComponent);
    page.baseUrl = BASE_URL;
    page.accessToken = 'wrong';

    page.connect();

    // The interceptor retries a 401 once with a fresh token.
    expectProbeCall(backend).flush({}, { status: 401, statusText: 'Unauthorized' });
    expectProbeCall(backend).flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(page.probe.state()).toStrictEqual('failed');
    expect(page.probe.message()).toContain('401');
    backend.verify();
  });
});

describe('client credentials', () => {
  it('exchanges the secret, then uses the returned token', () => {
    const { page, backend } = mount(ClientCredentialsComponent);
    page.baseUrl = BASE_URL;
    page.clientId = 'client-id';
    page.clientSecret = 'client-secret';

    page.connect();

    const exchange = backend.expectOne(`${BASE_URL}/oauth/token`);
    expect(exchange.request.method).toStrictEqual('POST');
    expect(exchange.request.body).toContain('grant_type=client_credentials');
    exchange.flush({ access_token: 'exchanged', token_type: 'Bearer', expires_in: 3600 });

    const request = expectProbeCall(backend);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer exchanged');
    request.flush([{ id: 'a' }]);

    expect(page.probe.state()).toStrictEqual('ok');
    backend.verify();
  });

  it('reuses the cached token on a second call', () => {
    const { page, backend } = mount(ClientCredentialsComponent);
    page.baseUrl = BASE_URL;
    page.clientId = 'client-id';
    page.clientSecret = 'client-secret';

    page.connect();
    backend.expectOne(`${BASE_URL}/oauth/token`)
      .flush({ access_token: 'exchanged', token_type: 'Bearer', expires_in: 3600 });
    expectProbeCall(backend).flush([]);

    page.testAgain();

    // No second exchange: verify() fails if one was made.
    expectProbeCall(backend).flush([]);
    backend.verify();
  });

  it('honours an overridden token URL', () => {
    const { page, backend } = mount(ClientCredentialsComponent);
    page.baseUrl = BASE_URL;
    page.clientId = 'client-id';
    page.clientSecret = 'client-secret';
    page.tokenUrl = 'https://auth.example.com/token';

    page.connect();

    backend.expectOne('https://auth.example.com/token')
      .flush({ access_token: 'custom', token_type: 'Bearer', expires_in: 3600 });
    expectProbeCall(backend).flush([]);
    backend.verify();
  });
});

describe('token function', () => {
  it('calls the function once per request', () => {
    const { page, backend } = mount(TokenFunctionComponent);
    page.baseUrl = BASE_URL;
    page.accessToken = 'fn-token';

    page.connect();
    let request = expectProbeCall(backend);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer fn-token');
    request.flush([]);
    expect(page.calls()).toStrictEqual(1);

    page.testAgain();
    request = expectProbeCall(backend);
    request.flush([]);

    expect(page.calls()).toStrictEqual(2);
    backend.verify();
  });

  it('accepts a function that returns a promise', async () => {
    const { page, backend } = mount(TokenFunctionComponent);
    page.baseUrl = BASE_URL;
    page.accessToken = 'promise-token';
    page.flavour = 'promise';

    page.connect();
    await Promise.resolve();

    const request = expectProbeCall(backend);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer promise-token');
    request.flush([]);
    backend.verify();
  });

  it('accepts a function that returns an observable', () => {
    const { page, backend } = mount(TokenFunctionComponent);
    page.baseUrl = BASE_URL;
    page.accessToken = 'observable-token';
    page.flavour = 'observable';

    page.connect();

    const request = expectProbeCall(backend);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer observable-token');
    request.flush([]);
    backend.verify();
  });

  it('sends a token that changed between requests', () => {
    const { page, backend } = mount(TokenFunctionComponent);
    page.baseUrl = BASE_URL;
    page.accessToken = 'first';

    page.connect();
    expectProbeCall(backend).flush([]);

    page.accessToken = 'second';
    page.testAgain();

    const request = expectProbeCall(backend);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer second');
    request.flush([]);
    backend.verify();
  });
});

describe('plugin auto-configuration', () => {
  it('takes the base URL and the token from the host function', async () => {
    const { page, backend } = mount(PluginConfigComponent);
    page.baseurl = BASE_URL;
    page.accessToken = 'host-token';

    page.install();
    await tick();

    const request = expectProbeCall(backend);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer host-token');
    request.flush([{ id: 'a' }]);

    expect(page.installed()).toStrictEqual(true);
    expect(page.calls()).toBeGreaterThan(0);
    expect(page.probe.state()).toStrictEqual('ok');
    backend.verify();
  });

  it('also picks up the NERM base URL', async () => {
    const { page, backend } = mount(PluginConfigComponent);
    page.baseurl = BASE_URL;
    page.accessToken = 'host-token';
    page.nermBaseurl = 'https://acme.nonemployee.com';

    page.install();
    await tick();
    expectProbeCall(backend).flush([]);

    expect(page.configSvc.nermBasePath).toStrictEqual('https://acme.nonemployee.com');
    backend.verify();
  });

  it('removes the host function again', async () => {
    const { page, backend } = mount(PluginConfigComponent);
    page.baseurl = BASE_URL;
    page.accessToken = 'host-token';

    page.install();
    await tick();
    expectProbeCall(backend).flush([]);
    page.remove();

    expect(page.installed()).toStrictEqual(false);
    expect(window.sailpointConfig).toBeUndefined();
    backend.verify();
  });
});
