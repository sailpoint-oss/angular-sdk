---
id: intelligence-model-intel-rare-access-slice
title: IntelRareAccessSlice
pagination_label: IntelRareAccessSlice
sidebar_label: IntelRareAccessSlice
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'IntelRareAccessSlice', 'intelligence']
slug: /tools/sdk/angular/intelligence/models/intel-rare-access-slice
tags: ['SDK', 'Software Development Kit', 'IntelRareAccessSlice', 'intelligence']
---

# IntelRareAccessSlice

Import this model from the entry point of its package:

```typescript
import { IntelRareAccessSlice } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelOutlierAccessItem>` | First page of rare access items for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of rare-access items for the resolved outlier; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next rareAccess page; present when totalCount exceeds the items returned on this page. | [default to undefined]

