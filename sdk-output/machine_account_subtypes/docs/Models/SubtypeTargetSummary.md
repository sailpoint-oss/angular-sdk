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
**targetType** | **(optional)** `string` | Tier of the target. | [default to undefined]
**targetId** | **(optional)** `string` | Connector type for a `CONNECTOR` target, or source ID for a `SOURCE` target. | [default to undefined]
**targetName** | **(optional)** `string` | Display name of the target. Falls back to `targetId` when no name is stored. | [default to undefined]
**subtypeCount** | **(optional)** `number` | Number of subtypes defined for the target. | [default to undefined]
**sourceCount** | **(optional)** `number` | Number of sources the target\'s subtypes apply to. | [default to undefined]
**lastModified** | **(optional)** `string` | Most recent modification time across the target\'s subtypes. | [default to undefined]

