import { afterEach, describe, expect, it, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  SAILPOINT_CONFIG_PARAMS,
  SailPointConfigService,
  type SailPointParams,
} from './sailpoint-config.service';
import { sailpointInterceptor } from './sailpoint.interceptor';

const BASE_URL = 'https://acme.api.identitynow.com';
const NERM_BASE_URL = 'https://acme.nonemployee.com';

interface Harness {
  http: HttpClient;
  backend: HttpTestingController;
  config: SailPointConfigService;
}

function setup(params: SailPointParams): Harness {
  TestBed.configureTestingModule({
    providers: [
      { provide: SAILPOINT_CONFIG_PARAMS, useValue: params },
      provideHttpClient(withInterceptors([sailpointInterceptor])),
      provideHttpClientTesting(),
    ],
  });
  return {
    http: TestBed.inject(HttpClient),
    backend: TestBed.inject(HttpTestingController),
    config: TestBed.inject(SailPointConfigService),
  };
}

afterEach(() => {
  TestBed.resetTestingModule();
});

describe('URL routing', () => {
  it('sends an Identity Security Cloud path to the ISC base URL', () => {
    const { http, backend } = setup({ baseUrl: BASE_URL, accessToken: 'token' });

    http.get('/accounts/v1').subscribe();

    const request = backend.expectOne(`${BASE_URL}/accounts/v1`);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer token');
    request.flush([]);
    backend.verify();
  });

  it('sends a NERM path to the NERM base URL, without the /nerm prefix', () => {
    const { http, backend } = setup({
      baseUrl: BASE_URL,
      nermBaseUrl: NERM_BASE_URL,
      accessToken: 'token',
    });

    http.get('/nerm/api/ne_attributes').subscribe();

    const request = backend.expectOne(`${NERM_BASE_URL}/api/ne_attributes`);
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer token');
    request.flush([]);
    backend.verify();
  });

  it('keeps the version segment of a NERM v2025 path', () => {
    const { http, backend } = setup({
      baseUrl: BASE_URL,
      nermBaseUrl: NERM_BASE_URL,
      accessToken: 'token',
    });

    http.get('/nerm/api/v2025/delegations').subscribe();

    backend.expectOne(`${NERM_BASE_URL}/api/v2025/delegations`).flush([]);
    backend.verify();
  });

  it('does not mistake an ISC path that merely starts with the same letters', () => {
    // /non-employee-requests must not be read as a NERM path.
    const { http, backend } = setup({
      baseUrl: BASE_URL,
      nermBaseUrl: NERM_BASE_URL,
      accessToken: 'token',
    });

    http.get('/non-employee-requests/v1').subscribe();

    backend.expectOne(`${BASE_URL}/non-employee-requests/v1`).flush([]);
    backend.verify();
  });

  it('passes an absolute URL through untouched and unauthenticated', () => {
    const { http, backend } = setup({ baseUrl: BASE_URL, accessToken: 'token' });

    http.get('https://example.com/health').subscribe();

    const request = backend.expectOne('https://example.com/health');
    expect(request.request.headers.has('Authorization')).toStrictEqual(false);
    request.flush({});
    backend.verify();
  });

  it('follows a base URL changed at runtime', () => {
    const { http, backend, config } = setup({ baseUrl: BASE_URL, accessToken: 'token' });

    config.configure({ baseUrl: 'https://acme-eu.api.identitynow.com' });
    http.get('/accounts/v1').subscribe();

    backend.expectOne('https://acme-eu.api.identitynow.com/accounts/v1').flush([]);
    backend.verify();
  });

  it('reports a NERM request made without a NERM base URL', () => {
    const { http, backend } = setup({ baseUrl: BASE_URL, accessToken: 'token' });

    const onError = vi.fn();
    http.get('/nerm/api/ne_attributes').subscribe({ error: onError });

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toContain('no nermBaseUrl is configured');
    backend.verify();
  });
});

describe('401 handling', () => {
  it('fetches a fresh token and retries the request once', () => {
    let calls = 0;
    const { http, backend } = setup({
      baseUrl: BASE_URL,
      accessToken: () => `token-${++calls}`,
    });

    const onNext = vi.fn();
    http.get('/accounts/v1').subscribe({ next: onNext });

    const first = backend.expectOne(`${BASE_URL}/accounts/v1`);
    expect(first.request.headers.get('Authorization')).toStrictEqual('Bearer token-1');
    first.flush({}, { status: 401, statusText: 'Unauthorized' });

    const retry = backend.expectOne(`${BASE_URL}/accounts/v1`);
    expect(retry.request.headers.get('Authorization')).toStrictEqual('Bearer token-2');
    retry.flush([{ id: 'a' }]);

    expect(onNext).toHaveBeenCalledWith([{ id: 'a' }]);
    backend.verify();
  });

  it('gives up when the retry is also rejected', () => {
    const { http, backend } = setup({ baseUrl: BASE_URL, accessToken: 'token' });

    const onError = vi.fn();
    http.get('/accounts/v1').subscribe({ error: onError });

    backend.expectOne(`${BASE_URL}/accounts/v1`)
      .flush({}, { status: 401, statusText: 'Unauthorized' });
    backend.expectOne(`${BASE_URL}/accounts/v1`)
      .flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].status).toStrictEqual(401);
    backend.verify();
  });

  it('does not retry a 403', () => {
    const { http, backend } = setup({ baseUrl: BASE_URL, accessToken: 'token' });

    const onError = vi.fn();
    http.get('/accounts/v1').subscribe({ error: onError });

    backend.expectOne(`${BASE_URL}/accounts/v1`)
      .flush({}, { status: 403, statusText: 'Forbidden' });

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].status).toStrictEqual(403);
    backend.verify();
  });
});

describe('retry with back-off', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('retries a 429 after the configured delay', async () => {
    vi.useFakeTimers();
    const { http, backend } = setup({
      baseUrl: BASE_URL,
      accessToken: 'token',
      retries: 2,
      retryDelay: 10,
    });

    const onNext = vi.fn();
    http.get('/accounts/v1').subscribe({ next: onNext });

    backend.expectOne(`${BASE_URL}/accounts/v1`)
      .flush({}, { status: 429, statusText: 'Too Many Requests' });

    await vi.advanceTimersByTimeAsync(10);

    backend.expectOne(`${BASE_URL}/accounts/v1`).flush([{ id: 'a' }]);

    expect(onNext).toHaveBeenCalledWith([{ id: 'a' }]);
    backend.verify();
  });

  it('retries a 503 and stops after the retry budget runs out', async () => {
    vi.useFakeTimers();
    const { http, backend } = setup({
      baseUrl: BASE_URL,
      accessToken: 'token',
      retries: 2,
      retryDelay: 10,
    });

    const onError = vi.fn();
    http.get('/accounts/v1').subscribe({ error: onError });

    // The first attempt plus two retries, with the delay doubling each time.
    backend.expectOne(`${BASE_URL}/accounts/v1`)
      .flush({}, { status: 503, statusText: 'Service Unavailable' });
    await vi.advanceTimersByTimeAsync(10);

    backend.expectOne(`${BASE_URL}/accounts/v1`)
      .flush({}, { status: 503, statusText: 'Service Unavailable' });
    await vi.advanceTimersByTimeAsync(20);

    backend.expectOne(`${BASE_URL}/accounts/v1`)
      .flush({}, { status: 503, statusText: 'Service Unavailable' });

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].status).toStrictEqual(503);
    backend.verify();
  });
});
