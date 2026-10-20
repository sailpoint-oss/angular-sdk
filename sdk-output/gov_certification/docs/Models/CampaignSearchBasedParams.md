---
id: gov_certification-model-campaign-search-based-params
title: CampaignSearchBasedParams
pagination_label: CampaignSearchBasedParams
sidebar_label: CampaignSearchBasedParams
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CampaignSearchBasedParams', 'gov_certification']
slug: /tools/sdk/angular/gov_certification/models/campaign-search-based-params
tags: ['SDK', 'Software Development Kit', 'CampaignSearchBasedParams', 'gov_certification']
---

# CampaignSearchBasedParams

Import this model from the entry point of its package:

```typescript
import { CampaignSearchBasedParams } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**searchType** | **(optional)** `string` | If the campaign type is `Identity`, then the searchType must be set. | [default to undefined]
**query** | **(optional)** `string` | The scope for the campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [default to undefined]
**identityIds** | **(optional)** `Array<string>` | A direct list of identities to include in this campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [default to undefined]
**accessConstraints** | **(optional)** `Array<AccessConstraint>` | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [default to undefined]

