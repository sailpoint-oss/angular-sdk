---
id: sp_config-model-object-import-result2
title: ObjectImportResult2
pagination_label: ObjectImportResult2
sidebar_label: ObjectImportResult2
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ObjectImportResult2', 'sp_config']
slug: /tools/sdk/angular/sp_config/models/object-import-result2
tags: ['SDK', 'Software Development Kit', 'ObjectImportResult2', 'sp_config']
---

# ObjectImportResult2

Import this model from the entry point of its package:

```typescript
import { ObjectImportResult2 } from 'sailpoint-angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | `Array<SpConfigMessage2>` | Informational messages returned from the target service on import. | [default to undefined]
**warnings** | `Array<SpConfigMessage2>` | Warning messages returned from the target service on import. | [default to undefined]
**errors** | `Array<SpConfigMessage2>` | Error messages returned from the target service on import. | [default to undefined]
**importedObjects** | `Array<ImportObject>` | References to objects that were created or updated by the import. | [default to undefined]

