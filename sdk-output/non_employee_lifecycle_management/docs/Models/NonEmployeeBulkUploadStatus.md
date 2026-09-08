---
id: non_employee_lifecycle_management-model-non-employee-bulk-upload-status
title: NonEmployeeBulkUploadStatus
pagination_label: NonEmployeeBulkUploadStatus
sidebar_label: NonEmployeeBulkUploadStatus
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'NonEmployeeBulkUploadStatus', 'non_employee_lifecycle_management']
slug: /tools/sdk/angular/non_employee_lifecycle_management/models/non-employee-bulk-upload-status
tags: ['SDK', 'Software Development Kit', 'NonEmployeeBulkUploadStatus', 'non_employee_lifecycle_management']
---

# NonEmployeeBulkUploadStatus

Import this model from the entry point of its package:

```typescript
import { NonEmployeeBulkUploadStatus } from 'sailpoint-angular-sdk/non_employee_lifecycle_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **(optional)** `string` | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors. null means job has been submitted to the source.  | [default to undefined]

