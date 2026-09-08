---
id: non_employee_lifecycle_management-model-non-employee-source
title: NonEmployeeSource
pagination_label: NonEmployeeSource
sidebar_label: NonEmployeeSource
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'NonEmployeeSource', 'non_employee_lifecycle_management']
slug: /tools/sdk/angular/non_employee_lifecycle_management/models/non-employee-source
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSource', 'non_employee_lifecycle_management']
---

# NonEmployeeSource

Import this model from the entry point of its package:

```typescript
import { NonEmployeeSource } from '@sailpoint/angular-sdk/non_employee_lifecycle_management';
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

