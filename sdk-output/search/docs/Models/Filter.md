---
id: search-model-filter
title: Filter
pagination_label: Filter
sidebar_label: Filter
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Filter', 'search']
slug: /tools/sdk/angular/search/models/filter
tags: ['SDK', 'Software Development Kit', 'Filter', 'search']
---

# Filter

Import this model from the entry point of its package:

```typescript
import { Filter } from 'sailpoint-angular-sdk/search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `FilterType` |  | [default to undefined]
**range** | **(optional)** `Range` |  | [default to undefined]
**terms** | **(optional)** `Array<string>` | The terms to be filtered. | [default to undefined]
**exclude** | **(optional)** `boolean` | Indicates if the filter excludes results. | [default to false]

