---
id: sp_config-model-export-options
title: ExportOptions
pagination_label: ExportOptions
sidebar_label: ExportOptions
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ExportOptions', 'sp_config']
slug: /tools/sdk/angular/sp_config/models/export-options
tags: ['SDK', 'Software Development Kit', 'ExportOptions', 'sp_config']
---

# ExportOptions

Import this model from the entry point of its package:

```typescript
import { ExportOptions } from '@sailpoint/angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeTypes** | **(optional)** `Array<string>` | Object type names to be excluded from an sp-config export command. | [default to undefined]
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field | [default to undefined]

