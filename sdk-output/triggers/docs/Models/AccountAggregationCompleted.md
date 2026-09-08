---
id: triggers-model-account-aggregation-completed
title: AccountAggregationCompleted
pagination_label: AccountAggregationCompleted
sidebar_label: AccountAggregationCompleted
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccountAggregationCompleted', 'triggers']
slug: /tools/sdk/angular/triggers/models/account-aggregation-completed
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompleted', 'triggers']
---

# AccountAggregationCompleted

Import this model from the entry point of its package:

```typescript
import { AccountAggregationCompleted } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | `AccountAggregationCompletedSource` |  | [default to undefined]
**status** | `string` | The overall status of the aggregation. | [default to undefined]
**started** | `string` | The date and time when the account aggregation started. | [default to undefined]
**completed** | `string` | The date and time when the account aggregation finished. | [default to undefined]
**errors** | `Array<string>` | A list of errors that occurred during the aggregation. | [default to undefined]
**warnings** | `Array<string>` | A list of warnings that occurred during the aggregation. | [default to undefined]
**stats** | `AccountAggregationCompletedStats` |  | [default to undefined]

