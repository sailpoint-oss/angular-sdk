---
id: jit_activations-model-jit-activation-friction-response
title: JITActivationFrictionResponse
pagination_label: JITActivationFrictionResponse
sidebar_label: JITActivationFrictionResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'JITActivationFrictionResponse', 'jit_activations']
slug: /tools/sdk/angular/jit_activations/models/jit-activation-friction-response
tags: ['SDK', 'Software Development Kit', 'JITActivationFrictionResponse', 'jit_activations']
---

# JITActivationFrictionResponse

Import this model from the entry point of its package:

```typescript
import { JITActivationFrictionResponse } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `JITActivationFrictionType` | Kind of friction step. | [default to undefined]
**status** | `JITActivationFrictionStatus` | Lifecycle of this friction step. | [default to undefined]
**submittedData** | `FrictionSubmittedData` | Data submitted for this friction step. | [default to undefined]
**bypassAllowed** | `boolean` | Whether this step may be bypassed. | [default to undefined]
**minWords** | **(optional)** `number` | Minimum word count for a justification step. | [default to undefined]

