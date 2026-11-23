---
id: certification_campaigns-model-campaign-report-download
title: CampaignReportDownload
pagination_label: CampaignReportDownload
sidebar_label: CampaignReportDownload
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CampaignReportDownload', 'certification_campaigns']
slug: /tools/sdk/angular/certification_campaigns/models/campaign-report-download
tags: ['SDK', 'Software Development Kit', 'CampaignReportDownload', 'certification_campaigns']
---

# CampaignReportDownload

Import this model from the entry point of its package:

```typescript
import { CampaignReportDownload } from '@sailpoint/angular-sdk/certification_campaigns';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the campaign report. | [default to undefined]
**downloadUrl** | `string` | A URL to download the campaign report. A presigned download URL is valid for 90 minutes from the time it is returned. Call this endpoint again to get a new URL.  | [default to undefined]

