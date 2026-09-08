---
id: accounts-model-account-unlock-request
title: AccountUnlockRequest
pagination_label: AccountUnlockRequest
sidebar_label: AccountUnlockRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccountUnlockRequest', 'accounts']
slug: /tools/sdk/angular/accounts/models/account-unlock-request
tags: ['SDK', 'Software Development Kit', 'AccountUnlockRequest', 'accounts']
---

# AccountUnlockRequest

Import this model from the entry point of its package:

```typescript
import { AccountUnlockRequest } from 'sailpoint-angular-sdk/accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalVerificationId** | **(optional)** `string` | If set, an external process validates that the user wants to proceed with this request. | [default to undefined]
**unlockIDNAccount** | **(optional)** `boolean` | If set, the IDN account is unlocked after the workflow completes. | [default to undefined]
**forceProvisioning** | **(optional)** `boolean` | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [default to undefined]

