---
id: access_model_metadata-model-metric-aggregation
title: MetricAggregation
pagination_label: MetricAggregation
sidebar_label: MetricAggregation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MetricAggregation', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/models/metric-aggregation
tags: ['SDK', 'Software Development Kit', 'MetricAggregation', 'access_model_metadata']
---

# MetricAggregation

Import this model from the entry point of its package:

```typescript
import { MetricAggregation } from '@sailpoint/angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [default to undefined]
**type** | **(optional)** `MetricType` |  | [default to undefined]
**field** | `string` | The field the calculation is performed on.  Prefix the field name with \'@\' to reference a nested object.  | [default to undefined]

