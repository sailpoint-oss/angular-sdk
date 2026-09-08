---
id: search-model-filter-aggregation
title: FilterAggregation
pagination_label: FilterAggregation
sidebar_label: FilterAggregation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'FilterAggregation', 'search']
slug: /tools/sdk/angular/search/models/filter-aggregation
tags: ['SDK', 'Software Development Kit', 'FilterAggregation', 'search']
---

# FilterAggregation

Import this model from the entry point of its package:

```typescript
import { FilterAggregation } from 'sailpoint-angular-sdk/search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the filter aggregate to be included in the result. | [default to undefined]
**type** | **(optional)** `SearchFilterType` |  | [default to undefined]
**field** | `string` | The search field to apply the filter to.  Prefix the field name with \'@\' to reference a nested object.  | [default to undefined]
**value** | `string` | The value to filter on. | [default to undefined]

