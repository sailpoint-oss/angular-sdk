---
id: gov_certification-model-campaign-report
title: CampaignReport
pagination_label: CampaignReport
sidebar_label: CampaignReport
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CampaignReport', 'gov_certification']
slug: /tools/sdk/angular/gov_certification/models/campaign-report
tags: ['SDK', 'Software Development Kit', 'CampaignReport', 'gov_certification']
---

# CampaignReport

Import this model from the entry point of its package:

```typescript
import { CampaignReport } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the campaign report. | [default to undefined]
**name** | `string` | The human readable report name | [default to undefined]
**campaignId** | `string` | The unique ID of the campaign. | [default to undefined]
**type** | `CampaignReportType` |  | [default to undefined]
**format** | `CampaignReportFormat` |  | [default to undefined]
**created** | `string` | The date the report was created. | [default to undefined]
**modified** | **(optional)** `string` | The date the report was modified. | [default to undefined]
**status** | `CampaignReportStatus` |  | [default to undefined]

