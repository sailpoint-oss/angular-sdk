---
id: certification_campaign_filters-model-campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CampaignFilterDetailsCriteriaListInner', 'certification_campaign_filters']
slug: /tools/sdk/angular/certification_campaign_filters/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner', 'certification_campaign_filters']
---

# CampaignFilterDetailsCriteriaListInner

Import this model from the entry point of its package:

```typescript
import { CampaignFilterDetailsCriteriaListInner } from 'sailpoint-angular-sdk/certification_campaign_filters';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `CriteriaType` |  | [default to undefined]
**operation** | **(optional)** `Operation` |  | [default to undefined]
**property** | `string` | Specified key from the type of criteria. | [default to undefined]
**value** | `string` | Value for the specified key from the type of criteria. | [default to undefined]
**negateResult** | **(optional)** `boolean` | If true, the filter will negate the result of the criteria. | [default to false]
**shortCircuit** | **(optional)** `boolean` | If true, the filter will short circuit the evaluation of the criteria. | [default to false]
**recordChildMatches** | **(optional)** `boolean` | If true, the filter will record child matches for the criteria. | [default to false]
**id** | **(optional)** `string` | The unique ID of the criteria. | [default to undefined]
**suppressMatchedItems** | **(optional)** `boolean` | If this value is true, then matched items will not only be excluded from the campaign, they will also not have archived certification items created.  Such items will not appear in the exclusion report.  | [default to false]
**children** | **(optional)** `Array<object>` | List of child criteria. | [default to undefined]

