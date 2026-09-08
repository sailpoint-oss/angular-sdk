---
id: access_requests-model-approval-forward-history
title: ApprovalForwardHistory
pagination_label: ApprovalForwardHistory
sidebar_label: ApprovalForwardHistory
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ApprovalForwardHistory', 'access_requests']
slug: /tools/sdk/angular/access_requests/models/approval-forward-history
tags: ['SDK', 'Software Development Kit', 'ApprovalForwardHistory', 'access_requests']
---

# ApprovalForwardHistory

Import this model from the entry point of its package:

```typescript
import { ApprovalForwardHistory } from 'sailpoint-angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldApproverName** | **(optional)** `string` | Display name of approver from whom the approval was forwarded. | [default to undefined]
**newApproverName** | **(optional)** `string` | Display name of approver to whom the approval was forwarded. | [default to undefined]
**comment** | **(optional)** `string` | Comment made while forwarding. | [default to undefined]
**modified** | **(optional)** `string` | Time at which approval was forwarded. | [default to undefined]
**forwarderName** | **(optional)** `string` | Display name of forwarder who forwarded the approval. | [default to undefined]
**reassignmentType** | **(optional)** `ReassignmentType` |  | [default to undefined]

