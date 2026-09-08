---
id: sp_config-model-sp-config-import-results
title: SpConfigImportResults
pagination_label: SpConfigImportResults
sidebar_label: SpConfigImportResults
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SpConfigImportResults', 'sp_config']
slug: /tools/sdk/angular/sp_config/models/sp-config-import-results
tags: ['SDK', 'Software Development Kit', 'SpConfigImportResults', 'sp_config']
---

# SpConfigImportResults

Import this model from the entry point of its package:

```typescript
import { SpConfigImportResults } from '@sailpoint/angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** |  | The results of an object configuration import job. | [default to undefined]
**exportJobId** | **(optional)** `string` | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [default to undefined]

