---
id: non_employee_lifecycle_management-model-non-employee-source-with-cloud-external-id
title: NonEmployeeSourceWithCloudExternalId
pagination_label: NonEmployeeSourceWithCloudExternalId
sidebar_label: NonEmployeeSourceWithCloudExternalId
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'NonEmployeeSourceWithCloudExternalId', 'non_employee_lifecycle_management']
slug: /tools/sdk/angular/non_employee_lifecycle_management/models/non-employee-source-with-cloud-external-id
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceWithCloudExternalId', 'non_employee_lifecycle_management']
---

# NonEmployeeSourceWithCloudExternalId

Import this model from the entry point of its package:

```typescript
import { NonEmployeeSourceWithCloudExternalId } from '@sailpoint/angular-sdk/non_employee_lifecycle_management';
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
**cloudExternalId** | **(optional)** `string` | Legacy ID used for sources from the V1 API. This attribute will be removed from a future version of the API and will not be considered a breaking change. No clients should rely on this ID always being present. | [default to undefined]

