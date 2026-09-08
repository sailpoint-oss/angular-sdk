import { afterEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { firstValueFrom, type Observable } from 'rxjs';
import {
  AccountsService,
  IdentitiesService,
  Paginator,
  SAILPOINT_CONFIG_PARAMS,
  SourcesService,
  TransformsService,
  UsersNERMService,
  DelegationsNERMV2025Service,
  sailpointInterceptor,
} from './index';

// These tests call a real tenant. They are skipped unless the tenant
// credentials are in the environment, which is how the build workflow supplies
// them. Run them locally with:
//   SAIL_BASE_URL=... SAIL_CLIENT_ID=... SAIL_CLIENT_SECRET=... npm test
const BASE_URL = process.env.SAIL_BASE_URL;
const CLIENT_ID = process.env.SAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.SAIL_CLIENT_SECRET;
const NERM_BASE_URL = process.env.SAIL_NERM_BASE_URL;

const hasTenant = Boolean(BASE_URL && CLIENT_ID && CLIENT_SECRET);
const describeTenant = hasTenant ? describe : describe.skip;
const describeNerm = hasTenant && NERM_BASE_URL ? describe : describe.skip;

const TIMEOUT = 30_000;

/** A real HttpClient, with the SDK interceptor, pointed at the tenant. */
function tenantHttpClient(): HttpClient {
  TestBed.configureTestingModule({
    providers: [
      {
        provide: SAILPOINT_CONFIG_PARAMS,
        useValue: {
          baseUrl: BASE_URL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          nermBaseUrl: NERM_BASE_URL,
        },
      },
      // withFetch() so the requests go out through the fetch of the runtime.
      provideHttpClient(withFetch(), withInterceptors([sailpointInterceptor])),
    ],
  });
  return TestBed.inject(HttpClient);
}

// The services are constructed rather than injected. Resolving their
// constructor parameters through DI needs emitDecoratorMetadata, which the
// esbuild transform of the test runner does not produce. Passing an undefined
// basePath leaves the relative path in place, which is what the interceptor
// expects.
function service<T>(
  ctor: new (http: HttpClient, basePath: any, configuration: any) => T,
  http: HttpClient
): T {
  return new ctor(http, undefined, undefined);
}

function first<T>(source: Observable<T>): Promise<T> {
  return firstValueFrom(source);
}

afterEach(() => {
  TestBed.resetTestingModule();
});

describeTenant('accounts', () => {
  it('lists accounts', async () => {
    const api = service(AccountsService, tenantHttpClient());

    const accounts = await first(api.listAccountsV1({ limit: 10 }));

    expect(Array.isArray(accounts)).toStrictEqual(true);
    expect(accounts.length).toBeLessThanOrEqual(10);
  }, TIMEOUT);

  it('paginates accounts', async () => {
    const api = service(AccountsService, tenantHttpClient());

    const accounts = await first(
      Paginator.paginate((p) => api.listAccountsV1(p), { limit: 30 }, 10)
    );

    expect(accounts.length).toBeLessThanOrEqual(30);
  }, TIMEOUT);
});

describeTenant('sources', () => {
  it('lists sources', async () => {
    const api = service(SourcesService, tenantHttpClient());

    const sources = await first(api.listSourcesV1({ limit: 10 }));

    expect(Array.isArray(sources)).toStrictEqual(true);
  }, TIMEOUT);
});

describeTenant('transforms', () => {
  it('lists transforms', async () => {
    const api = service(TransformsService, tenantHttpClient());

    const transforms = await first(api.listTransformsV1({ limit: 10 }));

    expect(Array.isArray(transforms)).toStrictEqual(true);
  }, TIMEOUT);
});

describeTenant('identities', () => {
  it('paginates identities page by page', async () => {
    const api = service(IdentitiesService, tenantHttpClient());

    const pages: number[] = [];
    await new Promise<void>((resolve, reject) => {
      Paginator.paginatePages((p) => api.listIdentitiesV1(p), { limit: 20 }, 10).subscribe({
        next: (page) => pages.push(page.length),
        error: reject,
        complete: resolve,
      });
    });

    expect(pages.length).toBeGreaterThan(0);
  }, TIMEOUT);
});

describeNerm('nerm', () => {
  it('lists users', async () => {
    const api = service(UsersNERMService, tenantHttpClient());

    const users = await first(api.getUsers({}));

    expect(users).toBeDefined();
  }, TIMEOUT);

  it('lists v2025 delegations', async () => {
    const api = service(DelegationsNERMV2025Service, tenantHttpClient());

    const delegations = await first(api.delegationsGet({}));

    expect(delegations).toBeDefined();
  }, TIMEOUT);
});
