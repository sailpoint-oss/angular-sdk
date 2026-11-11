---
id: reminder_escalations-model-reminderescalationreminder
title: Reminderescalationreminder
pagination_label: Reminderescalationreminder
sidebar_label: Reminderescalationreminder
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Reminderescalationreminder', 'reminder_escalations']
slug: /tools/sdk/angular/reminder_escalations/models/reminderescalationreminder
tags: ['SDK', 'Software Development Kit', 'Reminderescalationreminder', 'reminder_escalations']
---

# Reminderescalationreminder

Import this model from the entry point of its package:

```typescript
import { Reminderescalationreminder } from '@sailpoint/angular-sdk/reminder_escalations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | `string` | Five-field cron expression, evaluated in UTC. | [default to undefined]
**beforeDeadLine** | **(optional)** `string` | ISO-8601 duration. The reminder is active when `(deadline - now) <= beforeDeadLine`. A negative duration means the reminder starts after the deadline, for example `-P14D`. Mutually exclusive with `activeAfter`.  | [default to '']
**activeAfter** | **(optional)** `string` | ISO-8601 duration. The reminder is active when `(now - workflowStart) >= activeAfter`. Mutually exclusive with `beforeDeadLine`.  | [default to '']
**template** | `string` | Notification template key. | [default to undefined]
**maxFirings** | **(optional)** `number` | Maximum number of times this reminder fires before it deactivates. Null means the reminder keeps firing while its predicate is active. | [default to undefined]

