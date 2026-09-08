---
id: jit_access-model-jit-access-operation-request
title: JitAccessOperationRequest
pagination_label: JitAccessOperationRequest
sidebar_label: JitAccessOperationRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'JitAccessOperationRequest', 'jit_access']
slug: /tools/sdk/angular/jit_access/models/jit-access-operation-request
tags: ['SDK', 'Software Development Kit', 'JitAccessOperationRequest', 'jit_access']
---

# JitAccessOperationRequest

Import this model from the entry point of its package:

```typescript
import { JitAccessOperationRequest } from 'sailpoint-angular-sdk/jit_access';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **(optional)** `string` | Operation type. Defaults to `replace` if omitted. | [default to OpEnum_Replace]
**path** | `string` | Path to replace. Only the following JSON Pointer-style paths are supported.  | [default to undefined]
**value** | `JitAccessOperationRequestValue` |  | [default to undefined]

