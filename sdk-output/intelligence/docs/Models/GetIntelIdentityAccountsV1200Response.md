---
id: intelligence-model-get-intel-identity-accounts-v1200-response
title: GetIntelIdentityAccountsV1200Response
pagination_label: GetIntelIdentityAccountsV1200Response
sidebar_label: GetIntelIdentityAccountsV1200Response
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'GetIntelIdentityAccountsV1200Response', 'intelligence']
slug: /tools/sdk/angular/intelligence/models/get-intel-identity-accounts-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetIntelIdentityAccountsV1200Response', 'intelligence']
---

# GetIntelIdentityAccountsV1200Response

Import this model from the entry point of its package:

```typescript
import { GetIntelIdentityAccountsV1200Response } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelAccessAccountWire>` | First page of accounts for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of accounts for this identity; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page. | [default to undefined]

