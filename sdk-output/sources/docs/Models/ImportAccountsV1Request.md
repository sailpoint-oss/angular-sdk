---
id: sources-model-import-accounts-v1-request
title: ImportAccountsV1Request
pagination_label: ImportAccountsV1Request
sidebar_label: ImportAccountsV1Request
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ImportAccountsV1Request', 'sources']
slug: /tools/sdk/angular/sources/models/import-accounts-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsV1Request', 'sources']
---

# ImportAccountsV1Request

Import this model from the entry point of its package:

```typescript
import { ImportAccountsV1Request } from 'sailpoint-angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **(optional)** `Blob` | The CSV file containing the source accounts to aggregate. | [default to undefined]
**disableOptimization** | **(optional)** `string` | Use this flag to reprocess every account whether or not the data has changed. | [default to undefined]

