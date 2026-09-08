---
id: access_requests-model-approval-reminder-and-escalation-config
title: ApprovalReminderAndEscalationConfig
pagination_label: ApprovalReminderAndEscalationConfig
sidebar_label: ApprovalReminderAndEscalationConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ApprovalReminderAndEscalationConfig', 'access_requests']
slug: /tools/sdk/angular/access_requests/models/approval-reminder-and-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalReminderAndEscalationConfig', 'access_requests']
---

# ApprovalReminderAndEscalationConfig

Import this model from the entry point of its package:

```typescript
import { ApprovalReminderAndEscalationConfig } from 'sailpoint-angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daysUntilEscalation** | **(optional)** `number` | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [default to undefined]
**daysBetweenReminders** | **(optional)** `number` | Number of days to wait between reminder notifications. | [default to undefined]
**maxReminders** | **(optional)** `number` | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [default to undefined]
**fallbackApproverRef** | **(optional)** `IdentityReferenceWithNameAndEmail` |  | [default to undefined]

