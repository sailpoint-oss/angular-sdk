---
id: triggers-model-account-correlated
title: AccountCorrelated
pagination_label: AccountCorrelated
sidebar_label: AccountCorrelated
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccountCorrelated', 'triggers']
slug: /tools/sdk/angular/triggers/models/account-correlated
tags: ['SDK', 'Software Development Kit', 'AccountCorrelated', 'triggers']
---

# AccountCorrelated

Import this model from the entry point of its package:

```typescript
import { AccountCorrelated } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | `AccountCorrelatedIdentity` |  | [default to undefined]
**source** | `AccountCorrelatedSource` |  | [default to undefined]
**account** | `AccountCorrelatedAccount` |  | [default to undefined]
**attributes** |  | The attributes associated with the account.  Attributes are unique per source. | [default to undefined]
**entitlementCount** | **(optional)** `number` | The number of entitlements associated with this account. | [default to undefined]

