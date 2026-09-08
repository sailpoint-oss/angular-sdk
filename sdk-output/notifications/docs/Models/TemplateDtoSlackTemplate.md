---
id: notifications-model-template-dto-slack-template
title: TemplateDtoSlackTemplate
pagination_label: TemplateDtoSlackTemplate
sidebar_label: TemplateDtoSlackTemplate
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'TemplateDtoSlackTemplate', 'notifications']
slug: /tools/sdk/angular/notifications/models/template-dto-slack-template
tags: ['SDK', 'Software Development Kit', 'TemplateDtoSlackTemplate', 'notifications']
---

# TemplateDtoSlackTemplate

Import this model from the entry point of its package:

```typescript
import { TemplateDtoSlackTemplate } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The template key | [default to undefined]
**text** | **(optional)** `string` | The main text content of the Slack message | [default to undefined]
**blocks** | **(optional)** `string` | JSON string of Slack Block Kit blocks for rich formatting | [default to undefined]
**attachments** | **(optional)** `string` | JSON string of Slack attachments | [default to undefined]
**notificationType** | **(optional)** `string` | The type of notification | [default to undefined]
**approvalId** | **(optional)** `string` | The approval request ID | [default to undefined]
**requestId** | **(optional)** `string` | The request ID | [default to undefined]
**requestedById** | **(optional)** `string` | The ID of the user who made the request | [default to undefined]
**isSubscription** | **(optional)** `boolean` | Whether this is a subscription notification | [default to false]
**autoApprovalData** | **(optional)** `TemplateSlackAutoApprovalData` |  | [default to undefined]
**customFields** | **(optional)** `TemplateSlackCustomFields` |  | [default to undefined]

