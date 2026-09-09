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

Open **Authentication** in the sidebar and pick a mode. Enter the credentials
for it. Press **Connect and test**.

## Authentication modes

Each authentication mode has its own page. Every page holds a form, a code
sample, and a test button. The button applies the parameters, then calls one real
endpoint. The result tells you whether the mode works.

| Page | Mode | Parameters |
|------|------|------------|
| Overview | current state, and a reset button | |
| Personal access token | a token you already hold | `baseUrl`, `accessToken` |
| Client credentials | the SDK exchanges an ID and secret, then caches the token | `baseUrl`, `clientId`, `clientSecret`, `tokenUrl` |
| Token function | your code returns the token per request | `baseUrl`, `accessToken: () => …` |
| Plugin auto-config | the host page supplies everything | none |

The token function page covers all three return types: a string, a promise, and
an observable. It counts the calls, which shows that the SDK asks for a token on
every request. The plugin page installs `window.sailpointConfig()` for you, so
you can try that mode outside a plugin.

The SDK resolves a token in one order: the host function first, then
`accessToken`, then `clientId` with `clientSecret`. The host function therefore
overrides the other three while it is installed, and the plugin page says so.

These pages call the API with whatever is configured:

| Page | SDK usage |
|------|-----------|
| Identities | `IdentitiesService.listIdentitiesV1()` |
| Accounts | `AccountsService.listAccountsV1()`, and `Paginator.paginate()` for every page |
| Sources | `SourcesService.listSourcesV1()` |

Only plain values are written to `localStorage`. A token function and a host
function cannot be stored, so those two modes end at a reload.

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
