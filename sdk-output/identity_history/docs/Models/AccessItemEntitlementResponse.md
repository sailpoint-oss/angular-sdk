---
id: identity_history-model-access-item-entitlement-response
title: AccessItemEntitlementResponse
pagination_label: AccessItemEntitlementResponse
sidebar_label: AccessItemEntitlementResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessItemEntitlementResponse', 'identity_history']
slug: /tools/sdk/angular/identity_history/models/access-item-entitlement-response
tags: ['SDK', 'Software Development Kit', 'AccessItemEntitlementResponse', 'identity_history']
---

# AccessItemEntitlementResponse

Import this model from the entry point of its package:

```typescript
import { AccessItemEntitlementResponse } from '@sailpoint/angular-sdk/identity_history';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | the access item id | [default to undefined]
**accessType** | **(optional)** `string` | the access item type. entitlement in this case | [default to undefined]
**displayName** | **(optional)** `string` | the display name of the identity | [default to undefined]
**sourceName** | **(optional)** `string` | the name of the source | [default to undefined]
**attribute** | `string` | the entitlement attribute | [default to undefined]
**value** | `string` | the associated value | [default to undefined]
**type** | `string` | the type of entitlement | [default to undefined]
**description** | **(optional)** `string` | the description for the entitlment | [default to undefined]
**sourceId** | **(optional)** `string` | the id of the source | [default to undefined]
**standalone** | `boolean` | indicates whether the entitlement is standalone | [default to undefined]
**privileged** | `boolean` | indicates whether the entitlement is privileged | [default to undefined]
**cloudGoverned** | `boolean` | indicates whether the entitlement is cloud governed | [default to undefined]

