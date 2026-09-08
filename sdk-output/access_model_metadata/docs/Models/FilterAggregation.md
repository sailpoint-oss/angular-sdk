---
id: access_model_metadata-model-filter-aggregation
title: FilterAggregation
pagination_label: FilterAggregation
sidebar_label: FilterAggregation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'FilterAggregation', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/models/filter-aggregation
tags: ['SDK', 'Software Development Kit', 'FilterAggregation', 'access_model_metadata']
---

# FilterAggregation

Import this model from the entry point of its package:

```typescript
import { FilterAggregation } from 'sailpoint-angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the filter aggregate to be included in the result. | [default to undefined]
**type** | **(optional)** `SearchFilterType` |  | [default to undefined]
**field** | `string` | The search field to apply the filter to.  Prefix the field name with \'@\' to reference a nested object.  | [default to undefined]
**value** | `string` | The value to filter on. | [default to undefined]

