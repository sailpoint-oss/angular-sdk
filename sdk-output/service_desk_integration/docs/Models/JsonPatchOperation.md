---
id: service_desk_integration-model-json-patch-operation
title: JsonPatchOperation
pagination_label: JsonPatchOperation
sidebar_label: JsonPatchOperation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'JsonPatchOperation', 'service_desk_integration']
slug: /tools/sdk/angular/service_desk_integration/models/json-patch-operation
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperation', 'service_desk_integration']
---

# JsonPatchOperation

Import this model from the entry point of its package:

```typescript
import { JsonPatchOperation } from 'sailpoint-angular-sdk/service_desk_integration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to be performed | [default to undefined]
**path** | `string` | A string JSON Pointer representing the target path to an element to be affected by the operation | [default to undefined]
**value** | **(optional)** `JsonPatchOperationValue` |  | [default to undefined]

