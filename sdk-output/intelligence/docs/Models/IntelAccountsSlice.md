---
id: intelligence-model-intel-accounts-slice
title: IntelAccountsSlice
pagination_label: IntelAccountsSlice
sidebar_label: IntelAccountsSlice
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'IntelAccountsSlice', 'intelligence']
slug: /tools/sdk/angular/intelligence/models/intel-accounts-slice
tags: ['SDK', 'Software Development Kit', 'IntelAccountsSlice', 'intelligence']
---

# IntelAccountsSlice

Import this model from the entry point of its package:

```typescript
import { IntelAccountsSlice } from 'sailpoint-angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelAccessAccountWire>` | First page of accounts for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of accounts for this identity; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page. | [default to undefined]

