---
id: configuration_hub-model-backup-options
title: BackupOptions
pagination_label: BackupOptions
sidebar_label: BackupOptions
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BackupOptions', 'configuration_hub']
slug: /tools/sdk/angular/configuration_hub/models/backup-options
tags: ['SDK', 'Software Development Kit', 'BackupOptions', 'configuration_hub']
---

# BackupOptions

Import this model from the entry point of its package:

```typescript
import { BackupOptions } from 'sailpoint-angular-sdk/configuration_hub';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in a Configuration Hub backup command. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field. | [default to undefined]

