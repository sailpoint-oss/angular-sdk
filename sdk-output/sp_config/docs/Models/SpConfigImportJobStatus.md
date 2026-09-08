---
id: sp_config-model-sp-config-import-job-status
title: SpConfigImportJobStatus
pagination_label: SpConfigImportJobStatus
sidebar_label: SpConfigImportJobStatus
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SpConfigImportJobStatus', 'sp_config']
slug: /tools/sdk/angular/sp_config/models/sp-config-import-job-status
tags: ['SDK', 'Software Development Kit', 'SpConfigImportJobStatus', 'sp_config']
---

# SpConfigImportJobStatus

Import this model from the entry point of its package:

```typescript
import { SpConfigImportJobStatus } from 'sailpoint-angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | `string` | Unique id assigned to this job. | [default to undefined]
**status** | `string` | Status of the job. | [default to undefined]
**type** | `string` | Type of the job, either export or import. | [default to undefined]
**expiration** | **(optional)** `string` | The time until which the artifacts will be available for download. | [default to undefined]
**created** | `string` | The time the job was started. | [default to undefined]
**modified** | `string` | The time of the last update to the job. | [default to undefined]
**message** | **(optional)** `string` | This message contains additional information about the overall status of the job. | [default to undefined]
**completed** | **(optional)** `string` | The time the job was completed. | [default to undefined]

