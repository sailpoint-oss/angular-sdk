---
id: triggers-model-source-updated
title: SourceUpdated
pagination_label: SourceUpdated
sidebar_label: SourceUpdated
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceUpdated', 'triggers']
slug: /tools/sdk/angular/triggers/models/source-updated
tags: ['SDK', 'Software Development Kit', 'SourceUpdated', 'triggers']
---

# SourceUpdated

Import this model from the entry point of its package:

```typescript
import { SourceUpdated } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the source. | [default to undefined]
**name** | `string` | The user friendly name of the source. | [default to undefined]
**type** | `string` | The connection type of the source. | [default to undefined]
**modified** | `string` | The date and time the source was modified. | [default to undefined]
**connector** | `string` | The connector type used to connect to the source. | [default to undefined]
**actor** | `SourceUpdatedActor` |  | [default to undefined]

