---
id: triggers-model-access-request-post-approval
title: AccessRequestPostApproval
pagination_label: AccessRequestPostApproval
sidebar_label: AccessRequestPostApproval
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessRequestPostApproval', 'triggers']
slug: /tools/sdk/angular/triggers/models/access-request-post-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApproval', 'triggers']
---

# AccessRequestPostApproval

Import this model from the entry point of its package:

```typescript
import { AccessRequestPostApproval } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request. | [default to undefined]
**requestedFor** | `Array<AccessItemRequestedForDto>` | Identities access was requested for. | [default to undefined]
**requestedItemsStatus** | `Array<AccessRequestPostApprovalRequestedItemsStatusInner>` | Details on the outcome of each access item. | [default to undefined]
**requestedBy** | `AccessItemRequesterDto` |  | [default to undefined]

