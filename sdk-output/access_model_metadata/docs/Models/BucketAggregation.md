---
id: access_model_metadata-model-bucket-aggregation
title: BucketAggregation
pagination_label: BucketAggregation
sidebar_label: BucketAggregation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BucketAggregation', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/models/bucket-aggregation
tags: ['SDK', 'Software Development Kit', 'BucketAggregation', 'access_model_metadata']
---

# BucketAggregation

Import this model from the entry point of its package:

```typescript
import { BucketAggregation } from '@sailpoint/angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the bucket aggregate to be included in the result. | [default to undefined]
**type** | **(optional)** `BucketType` |  | [default to undefined]
**field** | `string` | The field to bucket on. Prefix the field name with \'@\' to reference a nested object. | [default to undefined]
**size** | **(optional)** `number` | Maximum number of buckets to include. | [default to undefined]
**minDocCount** | **(optional)** `number` | Minimum number of documents a bucket should have. | [default to undefined]

