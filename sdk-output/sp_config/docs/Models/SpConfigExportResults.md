---
id: sp_config-model-sp-config-export-results
title: SpConfigExportResults
pagination_label: SpConfigExportResults
sidebar_label: SpConfigExportResults
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SpConfigExportResults', 'sp_config']
slug: /tools/sdk/angular/sp_config/models/sp-config-export-results
tags: ['SDK', 'Software Development Kit', 'SpConfigExportResults', 'sp_config']
---

# SpConfigExportResults

Import this model from the entry point of its package:

```typescript
import { SpConfigExportResults } from '@sailpoint/angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **(optional)** `number` | Current version of the export results object. | [default to undefined]
**timestamp** | **(optional)** `string` | Time the export was completed. | [default to undefined]
**tenant** | **(optional)** `string` | Name of the tenant where this export originated. | [default to undefined]
**description** | **(optional)** `string` | Optional user defined description/name for export job. | [default to undefined]
**options** | **(optional)** `ExportOptions` |  | [default to undefined]
**objects** | **(optional)** `Array<ConfigObject>` |  | [default to undefined]

