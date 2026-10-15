---
id: jit_activations-model-jit-activation-friction-patch-request
title: JITActivationFrictionPatchRequest
pagination_label: JITActivationFrictionPatchRequest
sidebar_label: JITActivationFrictionPatchRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'JITActivationFrictionPatchRequest', 'jit_activations']
slug: /tools/sdk/angular/jit_activations/models/jit-activation-friction-patch-request
tags: ['SDK', 'Software Development Kit', 'JITActivationFrictionPatchRequest', 'jit_activations']
---

# JITActivationFrictionPatchRequest

Import this model from the entry point of its package:

```typescript
import { JITActivationFrictionPatchRequest } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `JITActivationFrictionType` | Kind of friction step being submitted. | [default to undefined]
**submittedData** | **(optional)** `FrictionSubmittedData` | Data submitted for this friction step. Omit when bypassing a step that allows bypass. | [default to undefined]
**bypass** | **(optional)** `boolean` | Whether to bypass this friction step. | [default to false]

