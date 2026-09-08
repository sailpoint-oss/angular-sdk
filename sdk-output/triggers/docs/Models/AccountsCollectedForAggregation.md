---
id: triggers-model-accounts-collected-for-aggregation
title: AccountsCollectedForAggregation
pagination_label: AccountsCollectedForAggregation
sidebar_label: AccountsCollectedForAggregation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccountsCollectedForAggregation', 'triggers']
slug: /tools/sdk/angular/triggers/models/accounts-collected-for-aggregation
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregation', 'triggers']
---

# AccountsCollectedForAggregation

Import this model from the entry point of its package:

```typescript
import { AccountsCollectedForAggregation } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | `AccountsCollectedForAggregationSource` |  | [default to undefined]
**status** | `string` | The overall status of the collection. | [default to undefined]
**started** | `string` | The date and time when the account collection started. | [default to undefined]
**completed** | `string` | The date and time when the account collection finished. | [default to undefined]
**errors** | `Array<string>` | A list of errors that occurred during the collection. | [default to undefined]
**warnings** | `Array<string>` | A list of warnings that occurred during the collection. | [default to undefined]
**stats** | `AccountsCollectedForAggregationStats` |  | [default to undefined]

