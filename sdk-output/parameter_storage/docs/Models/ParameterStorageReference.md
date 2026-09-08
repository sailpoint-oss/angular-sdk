---
id: parameter_storage-model-parameter-storage-reference
title: ParameterStorageReference
pagination_label: ParameterStorageReference
sidebar_label: ParameterStorageReference
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ParameterStorageReference', 'parameter_storage']
slug: /tools/sdk/angular/parameter_storage/models/parameter-storage-reference
tags: ['SDK', 'Software Development Kit', 'ParameterStorageReference', 'parameter_storage']
---

# ParameterStorageReference

Import this model from the entry point of its package:

```typescript
import { ParameterStorageReference } from '@sailpoint/angular-sdk/parameter_storage';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The ID of the reference | [default to undefined]
**consumerId** | `string` | The ID of the consumer holding the reference | [default to undefined]
**parameterId** | `string` | The ID of the parameter that the reference is pointing to. | [default to undefined]
**name** | `string` | The human-readable name of the reference | [default to undefined]
**usageHint** | **(optional)** `string` | The hint string used to validate the reference | [default to undefined]

