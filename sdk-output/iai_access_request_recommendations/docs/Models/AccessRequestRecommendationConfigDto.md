---
id: iai_access_request_recommendations-model-access-request-recommendation-config-dto
title: AccessRequestRecommendationConfigDto
pagination_label: AccessRequestRecommendationConfigDto
sidebar_label: AccessRequestRecommendationConfigDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessRequestRecommendationConfigDto', 'iai_access_request_recommendations']
slug: /tools/sdk/angular/iai_access_request_recommendations/models/access-request-recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationConfigDto', 'iai_access_request_recommendations']
---

# AccessRequestRecommendationConfigDto

Import this model from the entry point of its package:

```typescript
import { AccessRequestRecommendationConfigDto } from '@sailpoint/angular-sdk/iai_access_request_recommendations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scoreThreshold** | `number` | The value that internal calculations need to exceed for recommendations to be made. | [default to undefined]
**startDateAttribute** | **(optional)** `string` | Use to map an attribute name for determining identities\' start date. | [default to undefined]
**restrictionAttribute** | **(optional)** `string` | Use to only give recommendations based on this attribute. | [default to undefined]
**moverAttribute** | **(optional)** `string` | Use to map an attribute name for determining whether identities are movers. | [default to undefined]
**joinerAttribute** | **(optional)** `string` | Use to map an attribute name for determining whether identities are joiners. | [default to undefined]
**useRestrictionAttribute** | **(optional)** `boolean` | Use only the attribute named in restrictionAttribute to make recommendations. | [default to false]

