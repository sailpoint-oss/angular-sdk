---
id: suggested_entitlement_description-model-bulk-approve-entitlement-recommendation-result
title: BulkApproveEntitlementRecommendationResult
pagination_label: BulkApproveEntitlementRecommendationResult
sidebar_label: BulkApproveEntitlementRecommendationResult
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BulkApproveEntitlementRecommendationResult', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/bulk-approve-entitlement-recommendation-result
tags: ['SDK', 'Software Development Kit', 'BulkApproveEntitlementRecommendationResult', 'suggested_entitlement_description']
---

# BulkApproveEntitlementRecommendationResult

Import this model from the entry point of its package:

```typescript
import { BulkApproveEntitlementRecommendationResult } from 'sailpoint-angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The unique identifier of the processed recommendation record. | [default to undefined]
**status** | **(optional)** `string` | The outcome of the approval for this item. | [default to undefined]
**failedReason** | **(optional)** `string` | The reason for failure if status is FAILURE; null on success. | [default to undefined]

