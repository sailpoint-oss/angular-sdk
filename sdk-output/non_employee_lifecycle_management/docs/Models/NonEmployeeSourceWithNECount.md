---
id: non_employee_lifecycle_management-model-non-employee-source-with-ne-count
title: NonEmployeeSourceWithNECount
pagination_label: NonEmployeeSourceWithNECount
sidebar_label: NonEmployeeSourceWithNECount
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'NonEmployeeSourceWithNECount', 'non_employee_lifecycle_management']
slug: /tools/sdk/angular/non_employee_lifecycle_management/models/non-employee-source-with-ne-count
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceWithNECount', 'non_employee_lifecycle_management']
---

# NonEmployeeSourceWithNECount

Import this model from the entry point of its package:

```typescript
import { NonEmployeeSourceWithNECount } from '@sailpoint/angular-sdk/non_employee_lifecycle_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Non-Employee source id. | [default to undefined]
**sourceId** | **(optional)** `string` | Source Id associated with this non-employee source. | [default to undefined]
**name** | **(optional)** `string` | Source name associated with this non-employee source. | [default to undefined]
**description** | **(optional)** `string` | Source description associated with this non-employee source. | [default to undefined]
**approvers** | **(optional)** `Array<NonEmployeeIdentityReferenceWithId>` | List of approvers | [default to undefined]
**accountManagers** | **(optional)** `Array<NonEmployeeIdentityReferenceWithId>` | List of account managers | [default to undefined]
**modified** | **(optional)** `string` | When the request was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the request was created. | [default to undefined]
**nonEmployeeCount** | **(optional)** `number` | Number of non-employee records associated with this source. This value is \'NULL\' by default. To get the non-employee count, you must set the `non-employee-count` flag in your request to \'true\'. | [default to undefined]

