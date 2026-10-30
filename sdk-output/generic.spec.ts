import { afterEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { SAILPOINT_CONFIG_PARAMS } from './sailpoint-config.service';
import { sailpointInterceptor } from './sailpoint.interceptor';
import { GenericService } from './index';

const BASE_URL = 'https://acme.api.identitynow.com';

interface Harness {
  api: GenericService;
  backend: HttpTestingController;
}

// The service is constructed rather than injected, for the reason given in
// index.spec.ts. An undefined basePath keeps the relative path that the
// interceptor resolves against BASE_URL.
function setup(): Harness {
  TestBed.configureTestingModule({
    providers: [
      { provide: SAILPOINT_CONFIG_PARAMS, useValue: { baseUrl: BASE_URL, accessToken: 'token' } },
      provideHttpClient(withInterceptors([sailpointInterceptor])),
      provideHttpClientTesting(),
    ],
  });
  return {
    api: new GenericService(TestBed.inject(HttpClient), undefined, undefined),
    backend: TestBed.inject(HttpTestingController),
  };
}

afterEach(() => {
  TestBed.resetTestingModule();
});

describe('generic', () => {
  it('keeps the slashes of a multi-segment path and adds no version', async () => {
    const { api, backend } = setup();

    const result = firstValueFrom(
      api.genericGet({ path: '/entitlements/v1/identities/2c91808a/entitlements', limit: 10, filters: 'name eq "x"' })
    );

    const request = backend.expectOne((req) => req.url === `${BASE_URL}/entitlements/v1/identities/2c91808a/entitlements`);
    expect(request.request.method).toStrictEqual('GET');
    expect(request.request.params.get('limit')).toStrictEqual('10');
    expect(request.request.params.get('filters')).toStrictEqual('name eq "x"');
    expect(request.request.headers.get('Authorization')).toStrictEqual('Bearer token');
    request.flush([{ id: '1' }]);
    expect(await result).toStrictEqual([{ id: '1' }]);
    backend.verify();
  });

  it('encodes each segment and keeps a query string from the path', () => {
    const { api, backend } = setup();

    api.genericGet({ path: 'accounts/v1/a b?detailLevel=SLIM', limit: 5 }).subscribe();

    const request = backend.expectOne((req) => req.url === `${BASE_URL}/accounts/v1/a%20b?detailLevel=SLIM`);
    expect(request.request.urlWithParams).toStrictEqual(`${BASE_URL}/accounts/v1/a%20b?detailLevel=SLIM&limit=5`);
    request.flush({});
    backend.verify();
  });

  it('sends a JSON Patch list with the json-patch content type', () => {
    const { api, backend } = setup();
    const patch = [{ op: 'replace', path: '/description', value: 'New' }];

    api.genericPatch({ path: 'transforms/v1/1234', requestBody: patch }).subscribe();

    const request = backend.expectOne(`${BASE_URL}/transforms/v1/1234`);
    expect(request.request.method).toStrictEqual('PATCH');
    expect(request.request.headers.get('Content-Type')).toStrictEqual('application/json-patch+json');
    expect(request.request.body).toStrictEqual(patch);
    request.flush({});
    backend.verify();
  });

  it('sends a POST body as JSON to a v2 path', () => {
    const { api, backend } = setup();

    api.genericPost({ path: 'sources/v2/2c91808a/provisioning-policies', requestBody: { name: 'Test', type: 'lower' } }).subscribe();

    const request = backend.expectOne(`${BASE_URL}/sources/v2/2c91808a/provisioning-policies`);
    expect(request.request.method).toStrictEqual('POST');
    expect(request.request.body).toStrictEqual({ name: 'Test', type: 'lower' });
    request.flush({});
    backend.verify();
  });
});
