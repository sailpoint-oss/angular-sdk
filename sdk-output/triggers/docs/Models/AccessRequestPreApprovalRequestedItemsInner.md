---
id: triggers-model-access-request-pre-approval-requested-items-inner
title: AccessRequestPreApprovalRequestedItemsInner
pagination_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessRequestPreApprovalRequestedItemsInner', 'triggers']
slug: /tools/sdk/angular/triggers/models/access-request-pre-approval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApprovalRequestedItemsInner', 'triggers']
---

# AccessRequestPreApprovalRequestedItemsInner

Import this model from the entry point of its package:

```typescript
import { AccessRequestPreApprovalRequestedItemsInner } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the access item being requested. | [default to undefined]
**name** | `string` | The human friendly name of the access item. | [default to undefined]
**description** | **(optional)** `string` | Detailed description of the access item. | [default to undefined]
**type** | `string` | The type of access item. | [default to undefined]
**operation** | `string` | The action to perform on the access item. | [default to undefined]
**comment** | **(optional)** `string` | A comment from the identity requesting the access. | [default to undefined]
**form** | **(optional)** `AccessRequestDynamicApproverRequestedItemsInnerForm` |  | [default to undefined]

