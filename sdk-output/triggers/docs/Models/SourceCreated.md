---
id: triggers-model-source-created
title: SourceCreated
pagination_label: SourceCreated
sidebar_label: SourceCreated
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceCreated', 'triggers']
slug: /tools/sdk/angular/triggers/models/source-created
tags: ['SDK', 'Software Development Kit', 'SourceCreated', 'triggers']
---

# SourceCreated

Import this model from the entry point of its package:

```typescript
import { SourceCreated } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the source. | [default to undefined]
**name** | `string` | Human friendly name of the source. | [default to undefined]
**type** | `string` | The connection type. | [default to undefined]
**created** | `string` | The date and time the source was created. | [default to undefined]
**connector** | `string` | The connector type used to connect to the source. | [default to undefined]
**actor** | `SourceCreatedActor` |  | [default to undefined]

