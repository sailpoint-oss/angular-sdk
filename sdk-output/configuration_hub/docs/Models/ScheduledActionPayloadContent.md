---
id: configuration_hub-model-scheduled-action-payload-content
title: ScheduledActionPayloadContent
pagination_label: ScheduledActionPayloadContent
sidebar_label: ScheduledActionPayloadContent
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ScheduledActionPayloadContent', 'configuration_hub']
slug: /tools/sdk/angular/configuration_hub/models/scheduled-action-payload-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayloadContent', 'configuration_hub']
---

# ScheduledActionPayloadContent

Import this model from the entry point of its package:

```typescript
import { ScheduledActionPayloadContent } from 'sailpoint-angular-sdk/configuration_hub';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledActionPayloadContentBackupOptions` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [default to undefined]

