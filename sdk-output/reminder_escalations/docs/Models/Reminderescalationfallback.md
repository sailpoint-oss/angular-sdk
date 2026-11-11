---
id: reminder_escalations-model-reminderescalationfallback
title: Reminderescalationfallback
pagination_label: Reminderescalationfallback
sidebar_label: Reminderescalationfallback
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Reminderescalationfallback', 'reminder_escalations']
slug: /tools/sdk/angular/reminder_escalations/models/reminderescalationfallback
tags: ['SDK', 'Software Development Kit', 'Reminderescalationfallback', 'reminder_escalations']
---

# Reminderescalationfallback

Import this model from the entry point of its package:

```typescript
import { Reminderescalationfallback } from '@sailpoint/angular-sdk/reminder_escalations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targets** | `Array<Reminderescalationtarget>` | Last-resort recipients for this fallback. Each entry resolves to a manager, identity, governance group, entitlement owner, or source owner. At least one target is required. | [default to undefined]
**template** | `string` | Notification template key. | [default to undefined]

