---
id: governance_groups-model-workgroup-delete-item
title: WorkgroupDeleteItem
pagination_label: WorkgroupDeleteItem
sidebar_label: WorkgroupDeleteItem
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'WorkgroupDeleteItem', 'governance_groups']
slug: /tools/sdk/angular/governance_groups/models/workgroup-delete-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupDeleteItem', 'governance_groups']
---

# WorkgroupDeleteItem

Import this model from the entry point of its package:

```typescript
import { WorkgroupDeleteItem } from 'sailpoint-angular-sdk/governance_groups';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Id of the Governance Group. | [default to undefined]
**status** | `number` |  The HTTP response status code returned for an individual Governance Group that is requested for deletion during a bulk delete operation.  > 204   -  Governance Group deleted successfully.  > 409   - Governance Group is in use,hence can not be deleted.  > 404   - Governance Group not found.  | [default to undefined]
**description** | **(optional)** `string` | Human readable status description and containing additional context information about success or failures etc.  | [default to undefined]

