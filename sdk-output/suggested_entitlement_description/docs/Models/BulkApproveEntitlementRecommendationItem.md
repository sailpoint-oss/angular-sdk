---
id: suggested_entitlement_description-model-bulk-approve-entitlement-recommendation-item
title: BulkApproveEntitlementRecommendationItem
pagination_label: BulkApproveEntitlementRecommendationItem
sidebar_label: BulkApproveEntitlementRecommendationItem
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BulkApproveEntitlementRecommendationItem', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/bulk-approve-entitlement-recommendation-item
tags: ['SDK', 'Software Development Kit', 'BulkApproveEntitlementRecommendationItem', 'suggested_entitlement_description']
---

# BulkApproveEntitlementRecommendationItem

Import this model from the entry point of its package:

```typescript
import { BulkApproveEntitlementRecommendationItem } from 'sailpoint-angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the recommendation record to approve. | [default to undefined]
**recordType** | **(optional)** `string` | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [default to undefined]
**description** | **(optional)** `string` | The approved description text. Required for SED-type items; ignored for privilege items. | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The approved privilege level. Required for privilege-type items; ignored for SED items. | [default to undefined]

