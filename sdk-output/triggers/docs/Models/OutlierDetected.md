---
id: triggers-model-outlier-detected
title: OutlierDetected
pagination_label: OutlierDetected
sidebar_label: OutlierDetected
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'OutlierDetected', 'triggers']
slug: /tools/sdk/angular/triggers/models/outlier-detected
tags: ['SDK', 'Software Development Kit', 'OutlierDetected', 'triggers']
---

# OutlierDetected

Import this model from the entry point of its package:

```typescript
import { OutlierDetected } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | `OutlierDetectedIdentity` |  | [default to undefined]
**outlierType** | `string` | Identity\'s outlier type. | [default to undefined]
**score** | `number` | Dissimilarity score that determines whether the identity is an outlier, ranging from `0.0` to `1.0`. The higher the score, the more likely the identity is an outlier. | [default to undefined]

