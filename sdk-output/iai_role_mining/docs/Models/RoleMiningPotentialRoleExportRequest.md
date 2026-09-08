---
id: iai_role_mining-model-role-mining-potential-role-export-request
title: RoleMiningPotentialRoleExportRequest
pagination_label: RoleMiningPotentialRoleExportRequest
sidebar_label: RoleMiningPotentialRoleExportRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleMiningPotentialRoleExportRequest', 'iai_role_mining']
slug: /tools/sdk/angular/iai_role_mining/models/role-mining-potential-role-export-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportRequest', 'iai_role_mining']
---

# RoleMiningPotentialRoleExportRequest

Import this model from the entry point of its package:

```typescript
import { RoleMiningPotentialRoleExportRequest } from 'sailpoint-angular-sdk/iai_role_mining';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minEntitlementPopularity** | **(optional)** `number` | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [default to undefined]
**includeCommonAccess** | **(optional)** `boolean` | If false, do not include entitlements that are highly popular among the entire orginization | [default to undefined]

