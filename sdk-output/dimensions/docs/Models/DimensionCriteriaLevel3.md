---
id: dimensions-model-dimension-criteria-level3
title: DimensionCriteriaLevel3
pagination_label: DimensionCriteriaLevel3
sidebar_label: DimensionCriteriaLevel3
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'DimensionCriteriaLevel3', 'dimensions']
slug: /tools/sdk/angular/dimensions/models/dimension-criteria-level3
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel3', 'dimensions']
---

# DimensionCriteriaLevel3

Import this model from the entry point of its package:

```typescript
import { DimensionCriteriaLevel3 } from '@sailpoint/angular-sdk/dimensions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `DimensionCriteriaOperation` |  | [default to undefined]
**key** | **(optional)** `DimensionCriteriaKey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [default to undefined]

