---
id: triggers-model-complete-invocation
title: CompleteInvocation
pagination_label: CompleteInvocation
sidebar_label: CompleteInvocation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CompleteInvocation', 'triggers']
slug: /tools/sdk/angular/triggers/models/complete-invocation
tags: ['SDK', 'Software Development Kit', 'CompleteInvocation', 'triggers']
---

# CompleteInvocation

Import this model from the entry point of its package:

```typescript
import { CompleteInvocation } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | `string` | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [default to undefined]
**error** | **(optional)** `string` | The error message to indicate a failed invocation or error if any. | [default to undefined]
**output** | `object` | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [default to undefined]

