---
id: ui_plugins-model-asset-file-entry
title: AssetFileEntry
pagination_label: AssetFileEntry
sidebar_label: AssetFileEntry
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AssetFileEntry', 'ui_plugins']
slug: /tools/sdk/angular/ui_plugins/models/asset-file-entry
tags: ['SDK', 'Software Development Kit', 'AssetFileEntry', 'ui_plugins']
---

# AssetFileEntry

Import this model from the entry point of its package:

```typescript
import { AssetFileEntry } from '@sailpoint/angular-sdk/ui_plugins';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | `string` | Relative path within the asset bundle directory | [default to undefined]
**sizeBytes** | `number` | Uncompressed file size in bytes | [default to undefined]
**sha256** | `string` | SHA-256 hex digest of file contents | [default to undefined]

