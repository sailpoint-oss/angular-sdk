---
id: configuration_hub-model-scheduled-action-response-content
title: ScheduledActionResponseContent
pagination_label: ScheduledActionResponseContent
sidebar_label: ScheduledActionResponseContent
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ScheduledActionResponseContent', 'configuration_hub']
slug: /tools/sdk/angular/configuration_hub/models/scheduled-action-response-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponseContent', 'configuration_hub']
---

# ScheduledActionResponseContent

Import this model from the entry point of its package:

```typescript
import { ScheduledActionResponseContent } from '@sailpoint/angular-sdk/configuration_hub';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledActionResponseContentBackupOptions` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs only. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [default to undefined]

