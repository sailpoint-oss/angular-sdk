---
id: iai_recommendations-model-recommendation-config-dto
title: RecommendationConfigDto
pagination_label: RecommendationConfigDto
sidebar_label: RecommendationConfigDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RecommendationConfigDto', 'iai_recommendations']
slug: /tools/sdk/angular/iai_recommendations/models/recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationConfigDto', 'iai_recommendations']
---

# RecommendationConfigDto

Import this model from the entry point of its package:

```typescript
import { RecommendationConfigDto } from '@sailpoint/angular-sdk/iai_recommendations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommenderFeatures** | **(optional)** `Array<string>` | List of identity attributes to use for calculating certification recommendations | [default to undefined]
**peerGroupPercentageThreshold** | **(optional)** `number` | The percent value that the recommendation calculation must surpass to produce a YES recommendation | [default to undefined]
**runAutoSelectOnce** | **(optional)** `boolean` | If true, rulesRecommenderConfig will be refreshed with new programatically selected attribute and threshold values on the next pipeline run | [default to false]
**onlyTuneThreshold** | **(optional)** `boolean` | If true, rulesRecommenderConfig will be refreshed with new programatically selected threshold values on the next pipeline run | [default to false]

