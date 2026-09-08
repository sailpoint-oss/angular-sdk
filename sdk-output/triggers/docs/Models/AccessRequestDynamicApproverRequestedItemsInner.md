---
id: triggers-model-access-request-dynamic-approver-requested-items-inner
title: AccessRequestDynamicApproverRequestedItemsInner
pagination_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInner', 'triggers']
slug: /tools/sdk/angular/triggers/models/access-request-dynamic-approver-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInner', 'triggers']
---

# AccessRequestDynamicApproverRequestedItemsInner

Import this model from the entry point of its package:

```typescript
import { AccessRequestDynamicApproverRequestedItemsInner } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the access item. | [default to undefined]
**name** | `string` | Human friendly name of the access item. | [default to undefined]
**description** | **(optional)** `string` | Extended description of the access item. | [default to undefined]
**type** | `string` | The type of access item being requested. | [default to undefined]
**operation** | `string` | Grant or revoke the access item | [default to undefined]
**comment** | **(optional)** `string` | A comment from the requestor on why the access is needed. | [default to undefined]
**form** | **(optional)** `AccessRequestDynamicApproverRequestedItemsInnerForm` |  | [default to undefined]

