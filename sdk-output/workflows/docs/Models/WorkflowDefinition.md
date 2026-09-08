---
id: workflows-model-workflow-definition
title: WorkflowDefinition
pagination_label: WorkflowDefinition
sidebar_label: WorkflowDefinition
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'WorkflowDefinition', 'workflows']
slug: /tools/sdk/angular/workflows/models/workflow-definition
tags: ['SDK', 'Software Development Kit', 'WorkflowDefinition', 'workflows']
---

# WorkflowDefinition

Import this model from the entry point of its package:

```typescript
import { WorkflowDefinition } from 'sailpoint-angular-sdk/workflows';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **(optional)** `string` | The name of the starting step. | [default to undefined]
**steps** | **(optional)**  | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [default to undefined]

