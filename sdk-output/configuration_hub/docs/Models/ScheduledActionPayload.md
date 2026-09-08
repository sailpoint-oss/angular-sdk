---
id: configuration_hub-model-scheduled-action-payload
title: ScheduledActionPayload
pagination_label: ScheduledActionPayload
sidebar_label: ScheduledActionPayload
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ScheduledActionPayload', 'configuration_hub']
slug: /tools/sdk/angular/configuration_hub/models/scheduled-action-payload
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayload', 'configuration_hub']
---

# ScheduledActionPayload

Import this model from the entry point of its package:

```typescript
import { ScheduledActionPayload } from '@sailpoint/angular-sdk/configuration_hub';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobType** | `string` | Type of the scheduled job. | [default to undefined]
**startTime** | **(optional)** `string` | The time when this scheduled action should start. Optional. | [default to undefined]
**cronString** | **(optional)** `string` | Cron expression defining the schedule for this action. Optional for repeated events. | [default to undefined]
**timeZoneId** | **(optional)** `string` | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [default to undefined]
**content** | `ScheduledActionPayloadContent` |  | [default to undefined]

