---
id: entitlements-model-permission-dto
title: PermissionDTO
pagination_label: PermissionDTO
sidebar_label: PermissionDTO
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PermissionDTO', 'entitlements']
slug: /tools/sdk/angular/entitlements/models/permission-dto
tags: ['SDK', 'Software Development Kit', 'PermissionDTO', 'entitlements']
---

# PermissionDTO

Import this model from the entry point of its package:

```typescript
import { PermissionDTO } from 'sailpoint-angular-sdk/entitlements';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rights** | **(optional)** `Array<string>` | All the rights (e.g. actions) that this permission allows on the target | [readonly] [default to undefined]
**target** | **(optional)** `string` | The target the permission would grants rights on. | [readonly] [default to undefined]

