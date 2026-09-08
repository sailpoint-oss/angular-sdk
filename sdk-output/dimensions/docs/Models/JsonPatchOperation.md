---
id: dimensions-model-json-patch-operation
title: JsonPatchOperation
pagination_label: JsonPatchOperation
sidebar_label: JsonPatchOperation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'JsonPatchOperation', 'dimensions']
slug: /tools/sdk/angular/dimensions/models/json-patch-operation
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperation', 'dimensions']
---

# JsonPatchOperation

Import this model from the entry point of its package:

```typescript
import { JsonPatchOperation } from '@sailpoint/angular-sdk/dimensions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to be performed | [default to undefined]
**path** | `string` | A string JSON Pointer representing the target path to an element to be affected by the operation | [default to undefined]
**value** | **(optional)** `JsonPatchOperationValue` |  | [default to undefined]

