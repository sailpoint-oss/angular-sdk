---
id: data_access_security-model-assign-resource-owner-request
title: AssignResourceOwnerRequest
pagination_label: AssignResourceOwnerRequest
sidebar_label: AssignResourceOwnerRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AssignResourceOwnerRequest', 'data_access_security']
slug: /tools/sdk/angular/data_access_security/models/assign-resource-owner-request
tags: ['SDK', 'Software Development Kit', 'AssignResourceOwnerRequest', 'data_access_security']
---

# AssignResourceOwnerRequest

Import this model from the entry point of its package:

```typescript
import { AssignResourceOwnerRequest } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **(optional)** `number` | The unique identifier of the application containing the resource. | [default to undefined]
**fullPath** | **(optional)** `string` | The full path to the resource within the application (e.g., file path or object path). | [default to undefined]
**identityId** | **(optional)** `string` | The unique identifier (UUID) of the identity to be assigned as the resource owner. | [default to undefined]

