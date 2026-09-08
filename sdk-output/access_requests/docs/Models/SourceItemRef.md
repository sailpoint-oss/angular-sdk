---
id: access_requests-model-source-item-ref
title: SourceItemRef
pagination_label: SourceItemRef
sidebar_label: SourceItemRef
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceItemRef', 'access_requests']
slug: /tools/sdk/angular/access_requests/models/source-item-ref
tags: ['SDK', 'Software Development Kit', 'SourceItemRef', 'access_requests']
---

# SourceItemRef

Import this model from the entry point of its package:

```typescript
import { SourceItemRef } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **(optional)** `string` | The id for the source on which account selections are made | [default to undefined]
**accounts** | **(optional)** `Array<AccountItemRef>` | A list of account selections on the source. Currently, only one selection per source is supported. | [default to undefined]

