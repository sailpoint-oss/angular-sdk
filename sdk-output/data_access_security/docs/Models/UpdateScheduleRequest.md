---
id: data_access_security-model-update-schedule-request
title: UpdateScheduleRequest
pagination_label: UpdateScheduleRequest
sidebar_label: UpdateScheduleRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'UpdateScheduleRequest', 'data_access_security']
slug: /tools/sdk/angular/data_access_security/models/update-schedule-request
tags: ['SDK', 'Software Development Kit', 'UpdateScheduleRequest', 'data_access_security']
---

# UpdateScheduleRequest

Import this model from the entry point of its package:

```typescript
import { UpdateScheduleRequest } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskTypeName** | **(optional)** `string` | The type or category of the scheduled task. | [default to undefined]
**scheduleType** | **(optional)** `string` | The scheduling type, such as \"Daily\", \"Weekly\", or \"Manual\" etc. | [default to undefined]
**interval** | **(optional)** `number` | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [default to undefined]
**scheduleTaskName** | **(optional)** `string` | The display name of the scheduled task. | [default to undefined]
**startTime** | **(optional)** `number` | The start time for the scheduled task, represented as epoch seconds. | [default to undefined]
**endTime** | **(optional)** `number` | The end time for the scheduled task, represented as epoch seconds. | [default to undefined]
**daysOfWeek** | **(optional)** `Array<string>` | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [default to undefined]
**active** | **(optional)** `boolean` | Indicates whether the scheduled task is currently active. | [default to false]
**runAfterScheduleTaskId** | **(optional)** `number` | The ID of another scheduled task that triggers this scheduled task upon its completion. | [default to undefined]
**applicationId** | **(optional)** `number` | The unique identifier of the application associated with the scheduled task. | [default to undefined]

