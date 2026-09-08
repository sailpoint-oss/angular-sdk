---
id: governance_groups-model-workgroup-member-delete-item
title: WorkgroupMemberDeleteItem
pagination_label: WorkgroupMemberDeleteItem
sidebar_label: WorkgroupMemberDeleteItem
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'WorkgroupMemberDeleteItem', 'governance_groups']
slug: /tools/sdk/angular/governance_groups/models/workgroup-member-delete-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupMemberDeleteItem', 'governance_groups']
---

# WorkgroupMemberDeleteItem

Import this model from the entry point of its package:

```typescript
import { WorkgroupMemberDeleteItem } from 'sailpoint-angular-sdk/governance_groups';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identifier of identity in bulk member add /remove request. | [default to undefined]
**status** | `number` | The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  > 204   - Identity is removed from Governance Group members list.  > 404   - Identity is not member of Governance Group.  | [default to undefined]
**description** | **(optional)** `string` | Human readable status description and containing additional context information about success or failures etc.  | [default to undefined]

