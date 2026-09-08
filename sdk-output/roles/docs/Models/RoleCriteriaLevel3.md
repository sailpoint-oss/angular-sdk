---
id: roles-model-role-criteria-level3
title: RoleCriteriaLevel3
pagination_label: RoleCriteriaLevel3
sidebar_label: RoleCriteriaLevel3
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleCriteriaLevel3', 'roles']
slug: /tools/sdk/angular/roles/models/role-criteria-level3
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel3', 'roles']
---

# RoleCriteriaLevel3

Import this model from the entry point of its package:

```typescript
import { RoleCriteriaLevel3 } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `RoleCriteriaOperation` |  | [default to undefined]
**key** | **(optional)** `RoleCriteriaKey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [default to undefined]

