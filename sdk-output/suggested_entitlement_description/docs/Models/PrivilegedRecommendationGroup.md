---
id: suggested_entitlement_description-model-privileged-recommendation-group
title: PrivilegedRecommendationGroup
pagination_label: PrivilegedRecommendationGroup
sidebar_label: PrivilegedRecommendationGroup
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PrivilegedRecommendationGroup', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/privileged-recommendation-group
tags: ['SDK', 'Software Development Kit', 'PrivilegedRecommendationGroup', 'suggested_entitlement_description']
---

# PrivilegedRecommendationGroup

Import this model from the entry point of its package:

```typescript
import { PrivilegedRecommendationGroup } from 'sailpoint-angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlementName** | **(optional)** `string` | The name of the entitlement shared across all instances in this group. | [default to undefined]
**connectorType** | **(optional)** `string` | The connector type associated with all instances in this group. | [default to undefined]
**recommendationScore** | **(optional)** `string` | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [default to undefined]
**orgCount** | **(optional)** `number` | The number of organizations in which this entitlement appears as privileged. | [default to undefined]
**instanceCount** | **(optional)** `number` | The total number of individual entitlement instances in this group. | [default to undefined]
**instances** | **(optional)** `Array<PrivilegedRecommendationInstance>` | The individual entitlement instances belonging to this group. | [default to undefined]

