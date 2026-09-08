---
id: identity_history-model-account-status-changed-account
title: AccountStatusChangedAccount
pagination_label: AccountStatusChangedAccount
sidebar_label: AccountStatusChangedAccount
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccountStatusChangedAccount', 'identity_history']
slug: /tools/sdk/angular/identity_history/models/account-status-changed-account
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedAccount', 'identity_history']
---

# AccountStatusChangedAccount

Import this model from the entry point of its package:

```typescript
import { AccountStatusChangedAccount } from 'sailpoint-angular-sdk/identity_history';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | the ID of the account in the database | [default to undefined]
**nativeIdentity** | **(optional)** `string` | the native identifier of the account | [default to undefined]
**displayName** | **(optional)** `string` | the display name of the account | [default to undefined]
**sourceId** | **(optional)** `string` | the ID of the source for this account | [default to undefined]
**sourceName** | **(optional)** `string` | the name of the source for this account | [default to undefined]
**entitlementCount** | **(optional)** `number` | the number of entitlements on this account | [default to undefined]
**accessType** | **(optional)** `string` | this value is always \"account\" | [default to undefined]

