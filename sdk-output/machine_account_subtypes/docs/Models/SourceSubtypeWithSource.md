---
id: machine_account_subtypes-model-source-subtype-with-source
title: SourceSubtypeWithSource
pagination_label: SourceSubtypeWithSource
sidebar_label: SourceSubtypeWithSource
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceSubtypeWithSource', 'machine_account_subtypes']
slug: /tools/sdk/angular/machine_account_subtypes/models/source-subtype-with-source
tags: ['SDK', 'Software Development Kit', 'SourceSubtypeWithSource', 'machine_account_subtypes']
---

# SourceSubtypeWithSource

Import this model from the entry point of its package:

```typescript
import { SourceSubtypeWithSource } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the subtype. | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source. | [readonly] [default to undefined]
**technicalName** | **(optional)** `string` | Technical name of the subtype. | [default to undefined]
**displayName** | **(optional)** `string` | Display name of the subtype. | [default to undefined]
**description** | **(optional)** `string` | Description of the subtype. | [default to undefined]
**created** | **(optional)** `string` | Creation timestamp. | [default to undefined]
**modified** | **(optional)** `string` | Last modified timestamp. | [default to undefined]
**type** | **(optional)** `string` | Type of the subtype. Either MACHINE OR null. | [default to undefined]
**source** | **(optional)** `SourceSubtypeWithSourceSource` |  | [default to undefined]
**systemManaged** | **(optional)** `boolean` | Indicates if the subtype is managed by the system. | [default to false]

