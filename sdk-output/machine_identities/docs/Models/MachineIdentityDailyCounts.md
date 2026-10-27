---
id: machine_identities-model-machine-identity-daily-counts
title: MachineIdentityDailyCounts
pagination_label: MachineIdentityDailyCounts
sidebar_label: MachineIdentityDailyCounts
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityDailyCounts', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-daily-counts
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDailyCounts', 'machine_identities']
---

# MachineIdentityDailyCounts

Import this model from the entry point of its package:

```typescript
import { MachineIdentityDailyCounts } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **(optional)** `string` | First day (UTC) of the window, inclusive. | [default to undefined]
**to** | **(optional)** `string` | Last day (UTC) of the window, inclusive. This is always the day before the current UTC date. | [default to undefined]
**days** | **(optional)** `Array<MachineIdentityDailyCountsDay>` | One entry for each calendar day in the window, in ascending order. | [default to undefined]

