---
id: iai_outliers-model-latest-outlier-summary
title: LatestOutlierSummary
pagination_label: LatestOutlierSummary
sidebar_label: LatestOutlierSummary
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'LatestOutlierSummary', 'iai_outliers']
slug: /tools/sdk/angular/iai_outliers/models/latest-outlier-summary
tags: ['SDK', 'Software Development Kit', 'LatestOutlierSummary', 'iai_outliers']
---

# LatestOutlierSummary

Import this model from the entry point of its package:

```typescript
import { LatestOutlierSummary } from '@sailpoint/angular-sdk/iai_outliers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | The type of outlier summary | [default to undefined]
**snapshotDate** | **(optional)** `string` | The date the bulk outlier detection ran/snapshot was created | [default to undefined]
**totalOutliers** | **(optional)** `number` | Total number of outliers for the customer making the request | [default to undefined]
**totalIdentities** | **(optional)** `number` | Total number of identities for the customer making the request | [default to undefined]
**totalIgnored** | **(optional)** `number` | Total number of ignored outliers | [default to undefined]

