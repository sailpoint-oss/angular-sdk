---
id: triggers-model-access-request-dynamic-approver
title: AccessRequestDynamicApprover
pagination_label: AccessRequestDynamicApprover
sidebar_label: AccessRequestDynamicApprover
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessRequestDynamicApprover', 'triggers']
slug: /tools/sdk/angular/triggers/models/access-request-dynamic-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover', 'triggers']
---

# AccessRequestDynamicApprover

Import this model from the entry point of its package:

```typescript
import { AccessRequestDynamicApprover } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1) to get the status of the request.  | [default to undefined]
**requestedFor** | `Array<AccessItemRequestedForDto>` | Identities access was requested for. | [default to undefined]
**requestedItems** | `Array<AccessRequestDynamicApproverRequestedItemsInner>` | The access items that are being requested. | [default to undefined]
**requestedBy** | `AccessItemRequesterDto` |  | [default to undefined]

