---
id: apps-model-source-app-bulk-update-request
title: SourceAppBulkUpdateRequest
pagination_label: SourceAppBulkUpdateRequest
sidebar_label: SourceAppBulkUpdateRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceAppBulkUpdateRequest', 'apps']
slug: /tools/sdk/angular/apps/models/source-app-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'SourceAppBulkUpdateRequest', 'apps']
---

# SourceAppBulkUpdateRequest

Import this model from the entry point of its package:

```typescript
import { SourceAppBulkUpdateRequest } from '@sailpoint/angular-sdk/apps';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appIds** | `Array<string>` | List of source app ids to update | [default to undefined]
**jsonPatch** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the source app. | [default to undefined]

