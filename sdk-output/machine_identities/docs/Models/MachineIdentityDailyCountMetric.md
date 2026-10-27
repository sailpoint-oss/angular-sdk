---
id: machine_identities-model-machine-identity-daily-count-metric
title: MachineIdentityDailyCountMetric
pagination_label: MachineIdentityDailyCountMetric
sidebar_label: MachineIdentityDailyCountMetric
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityDailyCountMetric', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-daily-count-metric
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDailyCountMetric', 'machine_identities']
---

# MachineIdentityDailyCountMetric

Import this model from the entry point of its package:

```typescript
import { MachineIdentityDailyCountMetric } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | **(optional)** `string` | Entity type the counts apply to. | [default to undefined]
**subType** | **(optional)** `string` | Subtype the counts apply to. `UNKNOWN` is used for entities that have no subtype. | [default to undefined]
**totalCount** | **(optional)** `number` | Number of entities of this type and subtype that existed on the day. | [default to undefined]
**createdCount** | **(optional)** `number` | Number of entities of this type and subtype created on the day. | [default to undefined]
**createdCount30d** | **(optional)** `number` | Number of entities of this type and subtype created in the 30 days ending on the day. | [default to undefined]

