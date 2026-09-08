---
id: jit_activations-model-jit-activation-activate-response
title: JitActivationActivateResponse
pagination_label: JitActivationActivateResponse
sidebar_label: JitActivationActivateResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'JitActivationActivateResponse', 'jit_activations']
slug: /tools/sdk/angular/jit_activations/models/jit-activation-activate-response
tags: ['SDK', 'Software Development Kit', 'JitActivationActivateResponse', 'jit_activations']
---

# JitActivationActivateResponse

Import this model from the entry point of its package:

```typescript
import { JitActivationActivateResponse } from 'sailpoint-angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Workflow or business identifier for this activation. | [default to undefined]
**activationId** | `string` | Persistent activation record identifier for this JIT activation. | [default to undefined]
**connectionId** | `string` | Entitlement connection identifier for the activation. | [default to undefined]
**activationPeriodMins** | `number` | Activation duration in minutes for this workflow. | [default to undefined]
**status** | `ActivationWorkflowStatus` |  | [default to undefined]
**startTime** | `string` | Time when the activation workflow was started (ISO-8601). | [default to undefined]

