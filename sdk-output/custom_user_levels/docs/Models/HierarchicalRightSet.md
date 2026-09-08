---
id: custom_user_levels-model-hierarchical-right-set
title: HierarchicalRightSet
pagination_label: HierarchicalRightSet
sidebar_label: HierarchicalRightSet
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'HierarchicalRightSet', 'custom_user_levels']
slug: /tools/sdk/angular/custom_user_levels/models/hierarchical-right-set
tags: ['SDK', 'Software Development Kit', 'HierarchicalRightSet', 'custom_user_levels']
---

# HierarchicalRightSet

Import this model from the entry point of its package:

```typescript
import { HierarchicalRightSet } from '@sailpoint/angular-sdk/custom_user_levels';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The unique identifier of the RightSet. | [default to undefined]
**name** | **(optional)** `string` | The human-readable name of the RightSet. | [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the RightSet. | [default to undefined]
**category** | **(optional)** `string` | The category of the RightSet. | [default to undefined]
**nestedConfig** | **(optional)** `NestedConfig` |  | [default to undefined]
**children** | **(optional)** `Array<HierarchicalRightSet>` | List of child HierarchicalRightSets. | [default to undefined]

