---
id: approvals-model-bulk-reassign-request-dto
title: BulkReassignRequestDTO
pagination_label: BulkReassignRequestDTO
sidebar_label: BulkReassignRequestDTO
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BulkReassignRequestDTO', 'approvals']
slug: /tools/sdk/angular/approvals/models/bulk-reassign-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkReassignRequestDTO', 'approvals']
---

# BulkReassignRequestDTO

Import this model from the entry point of its package:

```typescript
import { BulkReassignRequestDTO } from 'sailpoint-angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalIds** | **(optional)** `Array<string>` | Array of Approval IDs to be bulk reassigned | [default to undefined]
**comment** | **(optional)** `string` | Optional comment to include with the bulk reassignment request | [default to undefined]
**reassignFrom** | **(optional)** `string` | Identity ID from which the approval requests are being reassigned | [default to undefined]
**reassignTo** | **(optional)** `string` | ReassignTo signifies the Identity ID that the approval request is being reassigned to | [default to undefined]

