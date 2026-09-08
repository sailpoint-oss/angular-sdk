---
id: sp_config-model-self-import-export-dto
title: SelfImportExportDto
pagination_label: SelfImportExportDto
sidebar_label: SelfImportExportDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SelfImportExportDto', 'sp_config']
slug: /tools/sdk/angular/sp_config/models/self-import-export-dto
tags: ['SDK', 'Software Development Kit', 'SelfImportExportDto', 'sp_config']
---

# SelfImportExportDto

Import this model from the entry point of its package:

```typescript
import { SelfImportExportDto } from 'sailpoint-angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Imported/exported object\'s DTO type. Import is currently only possible with the CONNECTOR_RULE, IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, RULE, SOURCE, TRANSFORM, and TRIGGER_SUBSCRIPTION object types. | [default to undefined]
**id** | **(optional)** `string` | Imported/exported object\'s ID. | [default to undefined]
**name** | **(optional)** `string` | Imported/exported object\'s display name. | [default to undefined]

