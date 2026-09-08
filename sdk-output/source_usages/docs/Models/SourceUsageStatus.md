---
id: source_usages-model-source-usage-status
title: SourceUsageStatus
pagination_label: SourceUsageStatus
sidebar_label: SourceUsageStatus
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceUsageStatus', 'source_usages']
slug: /tools/sdk/angular/source_usages/models/source-usage-status
tags: ['SDK', 'Software Development Kit', 'SourceUsageStatus', 'source_usages']
---

# SourceUsageStatus

Import this model from the entry point of its package:

```typescript
import { SourceUsageStatus } from '@sailpoint/angular-sdk/source_usages';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **(optional)** `string` | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [default to undefined]

