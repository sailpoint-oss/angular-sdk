---
id: configuration_hub-model-approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ApprovalComment', 'configuration_hub']
slug: /tools/sdk/angular/configuration_hub/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'configuration_hub']
---

# ApprovalComment

Import this model from the entry point of its package:

```typescript
import { ApprovalComment } from 'sailpoint-angular-sdk/configuration_hub';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | `string` | Comment provided either by the approval requester or the approver. | [default to undefined]
**timestamp** | `string` | The time when this comment was provided. | [default to undefined]
**user** | `string` | Name of the user that provided this comment. | [default to undefined]
**id** | `string` | Id of the user that provided this comment. | [default to undefined]
**changedToStatus** | `string` | Status transition of the draft. | [default to undefined]

