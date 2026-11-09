---
id: roles-model-entitlement-v2-privilege-level
title: EntitlementV2PrivilegeLevel
pagination_label: EntitlementV2PrivilegeLevel
sidebar_label: EntitlementV2PrivilegeLevel
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'EntitlementV2PrivilegeLevel', 'roles']
slug: /tools/sdk/angular/roles/models/entitlement-v2-privilege-level
tags: ['SDK', 'Software Development Kit', 'EntitlementV2PrivilegeLevel', 'roles']
---

# EntitlementV2PrivilegeLevel

Import this model from the entry point of its package:

```typescript
import { EntitlementV2PrivilegeLevel } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct** | **(optional)** `string` | Direct privilege level assigned to the entitlement | [default to undefined]
**setBy** | **(optional)** `string` | User or process that set the privilege level | [default to undefined]
**setByType** | **(optional)** `string` | Method by which the privilege level was set | [default to undefined]
**inherited** | **(optional)** `string` | Inherited privilege level on the entitlement, if any | [default to undefined]
**effective** | **(optional)** `string` | Effective privilege level assigned to the entitlement | [default to undefined]

