---
id: suggested_entitlement_description-model-search-criteria-filters-value
title: SearchCriteriaFiltersValue
pagination_label: SearchCriteriaFiltersValue
sidebar_label: SearchCriteriaFiltersValue
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SearchCriteriaFiltersValue', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/search-criteria-filters-value
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValue', 'suggested_entitlement_description']
---

# SearchCriteriaFiltersValue

Import this model from the entry point of its package:

```typescript
import { SearchCriteriaFiltersValue } from 'sailpoint-angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | The type of filter, e.g., \"TERMS\" or \"RANGE\". | [default to undefined]
**terms** | **(optional)** `Array<string>` | Terms to filter by (for \"TERMS\" type). | [default to undefined]
**range** | **(optional)** `SearchCriteriaFiltersValueRange` |  | [default to undefined]

