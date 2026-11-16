---
id: machine_account_subtypes-model-subtype-target-summary
title: SubtypeTargetSummary
pagination_label: SubtypeTargetSummary
sidebar_label: SubtypeTargetSummary
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SubtypeTargetSummary', 'machine_account_subtypes']
slug: /tools/sdk/angular/machine_account_subtypes/models/subtype-target-summary
tags: ['SDK', 'Software Development Kit', 'SubtypeTargetSummary', 'machine_account_subtypes']
---

# SubtypeTargetSummary

Import this model from the entry point of its package:

```typescript
import { SubtypeTargetSummary } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetType** | **(optional)** `SubtypeTargetType` |  | [default to undefined]
**targetId** | **(optional)** `string` | Scope key. Connector type for `CONNECTOR`. Source id for `SOURCE`. | [default to undefined]
**targetName** | **(optional)** `string` | Display label. Never null; falls back to `targetId`. | [default to undefined]
**subtypeCount** | **(optional)** `number` | Number of subtypes in this target group. | [default to undefined]
**sourceCount** | **(optional)** `number` | Number of sources of this connector type for a `CONNECTOR` row. `1` on a `SOURCE` row. Sortable. Not filterable. | [default to undefined]
**lastModified** | **(optional)** `string` | Latest `modified` timestamp in the `targetId` group for `CONNECTOR`, or that subtype row\'s `modified` for `SOURCE`. Not filterable or sortable. | [readonly] [default to undefined]

