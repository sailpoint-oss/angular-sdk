---
id: machine_accounts-model-machine-accounts-summary
title: MachineAccountsSummary
pagination_label: MachineAccountsSummary
sidebar_label: MachineAccountsSummary
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineAccountsSummary', 'machine_accounts']
slug: /tools/sdk/angular/machine_accounts/models/machine-accounts-summary
tags: ['SDK', 'Software Development Kit', 'MachineAccountsSummary', 'machine_accounts']
---

# MachineAccountsSummary

Import this model from the entry point of its package:

```typescript
import { MachineAccountsSummary } from '@sailpoint/angular-sdk/machine_accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**human** | **(optional)** `Array<MachineAccountClassificationCount>` | Counts of candidates that are correlated to a human identity, with one entry each for the `CRITERIA`, `SOURCE` and `DISCOVERY` classification methods. | [default to undefined]
**uncorrelated** | **(optional)** `Array<MachineAccountClassificationCount>` | Counts of candidates that are not correlated to any identity. This list has one entry, for the `DISCOVERY` classification method. | [default to undefined]

