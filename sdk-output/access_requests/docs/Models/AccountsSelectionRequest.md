---
id: access_requests-model-accounts-selection-request
title: AccountsSelectionRequest
pagination_label: AccountsSelectionRequest
sidebar_label: AccountsSelectionRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccountsSelectionRequest', 'access_requests']
slug: /tools/sdk/angular/access_requests/models/accounts-selection-request
tags: ['SDK', 'Software Development Kit', 'AccountsSelectionRequest', 'access_requests']
---

# AccountsSelectionRequest

Import this model from the entry point of its package:

```typescript
import { AccountsSelectionRequest } from 'sailpoint-angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **(optional)** `Array<string>` | A list of Identity IDs for whom the Access is requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`   (including all machine identity requests). | [default to undefined]
**requestType** | **(optional)** `AccessRequestType` |  | [default to undefined]
**requestedItems** | **(optional)** `Array<AccessRequestItem>` | Access items requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`.  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [default to undefined]
**requestedForWithRequestedItems** | **(optional)** `Array<RequestedForDtoRef>` | Nested payload pairing each identity with its requested items. * Required for machine identity accounts-selection. Set `identityType: MACHINE` on each entry. * Machine requests support `ENTITLEMENT` items only and do not allow mixed human and machine identities. * When present, `requestedFor` and `requestedItems` must be omitted (do not send an empty array). | [default to undefined]

