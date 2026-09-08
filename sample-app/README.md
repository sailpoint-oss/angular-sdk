# SailPoint Angular SDK sample app

A small Angular app that calls Identity Security Cloud through
`@sailpoint/angular-sdk`. It shows how to:

- Configure the SDK.
- Inject a generated service.
- Page through a list endpoint.
- Change credentials at runtime.

## Setup

The app depends on the built SDK, not on the SDK sources:

```json
"@sailpoint/angular-sdk": "file:../sdk-output/dist"
```

This is deliberate. Imports resolve through the `exports` map of the real
package. The app can therefore use only the entry points that npm also serves to
a consumer.

Build the SDK first, because the install has nothing to link to otherwise:

```bash
cd ../sdk-output && npm install && npm run build
cd ../sample-app && npm install
```

Rebuild the SDK after you change it. The link points at the build output, so the
app picks the change up on its next build.

## Running

```bash
npm start          # dev server on http://localhost:4200
npm run build      # production build into dist/
npm test           # unit tests
```

Open **Configuration** in the sidebar. Enter a tenant base URL. Add either a
personal access token, or a client ID and a client secret. The app keeps the
configuration in `localStorage` and restores it on the next load.

## What each page shows

| Page | SDK usage |
|------|-----------|
| Configuration | `SailPointConfigService.configure()` at runtime |
| Identities | `IdentitiesService.listIdentitiesV1()` |
| Accounts | `AccountsService.listAccountsV1()`, and `Paginator.paginate()` for every page |
| Sources | `SourcesService.listSourcesV1()` |

## Import paths

The package publishes one entry point per API partition. It also publishes a
root entry point for the shared parts:

```typescript
// services and models of one partition
import { Account, AccountsService } from '@sailpoint/angular-sdk/accounts';

// configuration, provider function, paginator
import { Paginator, provideSailPoint, SailPointConfigService } from '@sailpoint/angular-sdk';
```

Deeper paths such as `@sailpoint/angular-sdk/accounts/api/accounts.service` are
not published, and they do not resolve.

An import from the root entry point does not pull the whole SDK into the bundle.
Each partition stays in its own chunk. The bundler drops every partition that
the app never imports.

## A note on the test setup

[`vitest.config.mts`](vitest.config.mts) lists the Angular packages under
`resolve.dedupe`. The SDK is linked from a sibling directory with its own
`node_modules`. Without `dedupe`, the test run loads two copies of
`@angular/core`, and every `inject()` call inside the SDK then fails with
`NG0203`.
