---
id: suggested_entitlement_description-model-search-criteria
title: SearchCriteria
pagination_label: SearchCriteria
sidebar_label: SearchCriteria
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SearchCriteria', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/search-criteria
tags: ['SDK', 'Software Development Kit', 'SearchCriteria', 'suggested_entitlement_description']
---

# SearchCriteria

Import this model from the entry point of its package:

```typescript
import { SearchCriteria } from 'sailpoint-angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | `Array<string>` | A list of indices to search within. Must contain exactly one item, typically \"entitlements\". | [default to undefined]
**filters** | **(optional)**  | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [default to undefined]
**query** | **(optional)** `SearchCriteriaQuery` |  | [default to undefined]
**queryType** | **(optional)** `string` | Specifies the type of query. Must be \"TEXT\" if `textQuery` is used. | [default to undefined]
**textQuery** | **(optional)** `SearchCriteriaTextQuery` |  | [default to undefined]
**includeNested** | **(optional)** `boolean` | Whether to include nested objects in the search results. | [default to false]
**sort** | **(optional)** `Array<string>` | Specifies the sorting order for the results. | [default to undefined]
**searchAfter** | **(optional)** `Array<string>` | Used for pagination to fetch results after a specific point. | [default to undefined]

