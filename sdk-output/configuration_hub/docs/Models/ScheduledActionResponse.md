---
id: configuration_hub-model-scheduled-action-response
title: ScheduledActionResponse
pagination_label: ScheduledActionResponse
sidebar_label: ScheduledActionResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ScheduledActionResponse', 'configuration_hub']
slug: /tools/sdk/angular/configuration_hub/models/scheduled-action-response
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponse', 'configuration_hub']
---

# ScheduledActionResponse

Import this model from the entry point of its package:

```typescript
import { ScheduledActionResponse } from 'sailpoint-angular-sdk/configuration_hub';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for this scheduled action. | [default to undefined]
**created** | **(optional)** `string` | The time when this scheduled action was created. | [default to undefined]
**jobType** | **(optional)** `string` | Type of the scheduled job. | [default to undefined]
**content** | **(optional)** `ScheduledActionResponseContent` |  | [default to undefined]
**startTime** | **(optional)** `string` | The time when this scheduled action should start. | [default to undefined]
**cronString** | **(optional)** `string` | Cron expression defining the schedule for this action. | [default to undefined]
**timeZoneId** | **(optional)** `string` | Time zone ID for interpreting the cron expression. | [default to undefined]

