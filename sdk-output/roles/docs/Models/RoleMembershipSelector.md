---
id: roles-model-role-membership-selector
title: RoleMembershipSelector
pagination_label: RoleMembershipSelector
sidebar_label: RoleMembershipSelector
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleMembershipSelector', 'roles']
slug: /tools/sdk/angular/roles/models/role-membership-selector
tags: ['SDK', 'Software Development Kit', 'RoleMembershipSelector', 'roles']
---

# RoleMembershipSelector

Import this model from the entry point of its package:

```typescript
import { RoleMembershipSelector } from 'sailpoint-angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `RoleMembershipSelectorType` |  | [default to undefined]
**criteria** | **(optional)** `RoleCriteriaLevel1` |  | [default to undefined]
**identities** | **(optional)** `Array<RoleMembershipIdentity>` | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [default to undefined]

