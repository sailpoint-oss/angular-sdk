---
id: approvals-model-approval-config-reminder-config
title: ApprovalConfigReminderConfig
pagination_label: ApprovalConfigReminderConfig
sidebar_label: ApprovalConfigReminderConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ApprovalConfigReminderConfig', 'approvals']
slug: /tools/sdk/angular/approvals/models/approval-config-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigReminderConfig', 'approvals']
---

# ApprovalConfigReminderConfig

Import this model from the entry point of its package:

```typescript
import { ApprovalConfigReminderConfig } from 'sailpoint-angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if reminders are enabled. | [default to false]
**daysUntilFirstReminder** | **(optional)** `number` | Number of days until the first reminder. | [default to undefined]
**reminderCronSchedule** | **(optional)** `string` | Cron schedule for reminders. | [default to undefined]
**maxReminders** | **(optional)** `number` | Maximum number of reminders. Max is 20. | [default to undefined]

