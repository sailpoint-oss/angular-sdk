---
id: gov_certification-model-campaign-reference
title: CampaignReference
pagination_label: CampaignReference
sidebar_label: CampaignReference
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CampaignReference', 'gov_certification']
slug: /tools/sdk/angular/gov_certification/models/campaign-reference
tags: ['SDK', 'Software Development Kit', 'CampaignReference', 'gov_certification']
---

# CampaignReference

Import this model from the entry point of its package:

```typescript
import { CampaignReference } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the campaign. | [default to undefined]
**name** | `string` | The name of the campaign. | [default to undefined]
**description** | **(optional)** `string` | The description of the campaign set by the admin who created it. | [default to undefined]
**type** | **(optional)** `CampaignType` |  | [default to undefined]
**mandatoryCommentRequirement** | **(optional)** `MandatoryCommentType` |  | [default to undefined]
**recommendationsEnabled** | **(optional)** `boolean` | Indicates if the campaign related recommendations enabled. | [default to false]
**reviewer** | **(optional)** `CampaignReferenceReviewer` |  | [default to undefined]
**generationType** | **(optional)** `CampaignGenerationType` |  | [default to undefined]

