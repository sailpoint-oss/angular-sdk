---
id: approvals-model-approval-config-escalation-config
title: ApprovalConfigEscalationConfig
pagination_label: ApprovalConfigEscalationConfig
sidebar_label: ApprovalConfigEscalationConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ApprovalConfigEscalationConfig', 'approvals']
slug: /tools/sdk/angular/approvals/models/approval-config-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfig', 'approvals']
---

# ApprovalConfigEscalationConfig

Import this model from the entry point of its package:

```typescript
import { ApprovalConfigEscalationConfig } from '@sailpoint/angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if escalations are enabled. | [default to false]
**daysUntilFirstEscalation** | **(optional)** `number` | Number of days until the first escalation. | [default to undefined]
**escalationCronSchedule** | **(optional)** `string` | Cron schedule for escalations. | [default to undefined]
**escalationChain** | **(optional)** `Array<ApprovalConfigEscalationConfigEscalationChainInner>` | Escalation chain configuration. | [default to undefined]

