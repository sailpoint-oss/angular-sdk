---
id: role_propagation-model-rolepropagationstatusresponse
title: Rolepropagationstatusresponse
pagination_label: Rolepropagationstatusresponse
sidebar_label: Rolepropagationstatusresponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Rolepropagationstatusresponse', 'role_propagation']
slug: /tools/sdk/angular/role_propagation/models/rolepropagationstatusresponse
tags: ['SDK', 'Software Development Kit', 'Rolepropagationstatusresponse', 'role_propagation']
---

# Rolepropagationstatusresponse

Import this model from the entry point of its package:

```typescript
import { Rolepropagationstatusresponse } from '@sailpoint/angular-sdk/role_propagation';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the Role Propagation process triggered. | [default to undefined]
**status** | **(optional)** `string` | Status of the Role Propagation process. | [default to undefined]
**executionStage** | **(optional)** `string` | Current execution stage of the Role Propagation process. | [default to undefined]
**launched** | **(optional)** `string` | Time when the Role Propagation process was launched. | [default to undefined]
**launchedBy** | **(optional)** `RolepropagationstatusresponseLaunchedBy` |  | [default to undefined]
**terminatedBy** | **(optional)** `RolepropagationstatusresponseTerminatedBy` |  | [default to undefined]
**completed** | **(optional)** `string` | Time when the Role Propagation process was completed. | [default to undefined]
**failureReason** | **(optional)** `string` | Reason for failure if the Role Propagation process failed. | [default to undefined]
**skipRoleRefresh** | **(optional)** `boolean` | Indicates if the role refresh was skipped during the Role Propagation process. | [default to false]

