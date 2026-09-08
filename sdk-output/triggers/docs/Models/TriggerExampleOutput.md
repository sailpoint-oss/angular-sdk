---
id: triggers-model-trigger-example-output
title: TriggerExampleOutput
pagination_label: TriggerExampleOutput
sidebar_label: TriggerExampleOutput
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'TriggerExampleOutput', 'triggers']
slug: /tools/sdk/angular/triggers/models/trigger-example-output
tags: ['SDK', 'Software Development Kit', 'TriggerExampleOutput', 'triggers']
---

# TriggerExampleOutput

Import this model from the entry point of its package:

```typescript
import { TriggerExampleOutput } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the identity to add to the approver list for the access request. | [default to undefined]
**name** | `string` | The name of the identity to add to the approver list for the access request. | [default to undefined]
**type** | `string` | The type of object being referenced. | [default to undefined]
**approved** | `boolean` | Whether or not to approve the access request. | [default to undefined]
**comment** | `string` | A comment about the decision to approve or deny the request. | [default to undefined]
**approver** | `string` | The name of the entity that approved or denied the request. | [default to undefined]

