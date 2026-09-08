---
id: apps-model-source-app-create-dto
title: SourceAppCreateDto
pagination_label: SourceAppCreateDto
sidebar_label: SourceAppCreateDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceAppCreateDto', 'apps']
slug: /tools/sdk/angular/apps/models/source-app-create-dto
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDto', 'apps']
---

# SourceAppCreateDto

Import this model from the entry point of its package:

```typescript
import { SourceAppCreateDto } from 'sailpoint-angular-sdk/apps';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The source app name | [default to undefined]
**description** | `string` | The description of the source app | [default to undefined]
**matchAllAccounts** | **(optional)** `boolean` | True if the source app match all accounts | [default to false]
**accountSource** | `SourceAppCreateDtoAccountSource` |  | [default to undefined]

