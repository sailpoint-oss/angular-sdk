---
id: non_employee_lifecycle_management-model-non-employee-source-request-body
title: NonEmployeeSourceRequestBody
pagination_label: NonEmployeeSourceRequestBody
sidebar_label: NonEmployeeSourceRequestBody
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'NonEmployeeSourceRequestBody', 'non_employee_lifecycle_management']
slug: /tools/sdk/angular/non_employee_lifecycle_management/models/non-employee-source-request-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceRequestBody', 'non_employee_lifecycle_management']
---

# NonEmployeeSourceRequestBody

Import this model from the entry point of its package:

```typescript
import { NonEmployeeSourceRequestBody } from 'sailpoint-angular-sdk/non_employee_lifecycle_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of non-employee source. | [default to undefined]
**description** | `string` | Description of non-employee source. | [default to undefined]
**owner** | `NonEmployeeIdnUserRequest` |  | [default to undefined]
**managementWorkgroup** | **(optional)** `string` | The ID for the management workgroup that contains source sub-admins | [default to undefined]
**approvers** | **(optional)** `Array<NonEmployeeIdnUserRequest>` | List of approvers. | [default to undefined]
**accountManagers** | **(optional)** `Array<NonEmployeeIdnUserRequest>` | List of account managers. | [default to undefined]

