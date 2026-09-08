---
id: role_propagation-model-rolepropagationongoingresponse-role-propagation-details
title: RolepropagationongoingresponseRolePropagationDetails
pagination_label: RolepropagationongoingresponseRolePropagationDetails
sidebar_label: RolepropagationongoingresponseRolePropagationDetails
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RolepropagationongoingresponseRolePropagationDetails', 'role_propagation']
slug: /tools/sdk/angular/role_propagation/models/rolepropagationongoingresponse-role-propagation-details
tags: ['SDK', 'Software Development Kit', 'RolepropagationongoingresponseRolePropagationDetails', 'role_propagation']
---

# RolepropagationongoingresponseRolePropagationDetails

Import this model from the entry point of its package:

```typescript
import { RolepropagationongoingresponseRolePropagationDetails } from '@sailpoint/angular-sdk/role_propagation';
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

