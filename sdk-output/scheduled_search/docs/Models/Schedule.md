---
id: scheduled_search-model-schedule
title: Schedule
pagination_label: Schedule
sidebar_label: Schedule
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Schedule', 'scheduled_search']
slug: /tools/sdk/angular/scheduled_search/models/schedule
tags: ['SDK', 'Software Development Kit', 'Schedule', 'scheduled_search']
---

# Schedule

Import this model from the entry point of its package:

```typescript
import { Schedule } from 'sailpoint-angular-sdk/scheduled_search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `ScheduleType` |  | [default to undefined]
**months** | **(optional)** `ScheduleMonths` |  | [default to undefined]
**days** | **(optional)** `ScheduleDays` |  | [default to undefined]
**hours** | `ScheduleHours` |  | [default to undefined]
**expiration** | **(optional)** `string` | A date-time in ISO-8601 format | [default to undefined]
**timeZoneId** | **(optional)** `string` | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org\'s default timezone is used. | [default to undefined]

