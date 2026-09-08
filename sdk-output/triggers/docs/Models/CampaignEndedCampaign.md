---
id: triggers-model-campaign-ended-campaign
title: CampaignEndedCampaign
pagination_label: CampaignEndedCampaign
sidebar_label: CampaignEndedCampaign
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CampaignEndedCampaign', 'triggers']
slug: /tools/sdk/angular/triggers/models/campaign-ended-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignEndedCampaign', 'triggers']
---

# CampaignEndedCampaign

Import this model from the entry point of its package:

```typescript
import { CampaignEndedCampaign } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique ID for the campaign. | [default to undefined]
**name** | `string` | The human friendly name of the campaign. | [default to undefined]
**description** | `string` | Extended description of the campaign. | [default to undefined]
**created** | `string` | The date and time the campaign was created. | [default to undefined]
**modified** | **(optional)** `string` | The date and time the campaign was last modified. | [default to undefined]
**deadline** | `string` | The date and time the campaign is due. | [default to undefined]
**type** | `string` | The type of campaign. | [default to undefined]
**campaignOwner** | `CampaignActivatedCampaignCampaignOwner` |  | [default to undefined]
**status** | `string` | The current status of the campaign. | [default to undefined]

