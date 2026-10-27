---
id: machine_identities-model-machine-identity-risk-severity-counts
title: MachineIdentityRiskSeverityCounts
pagination_label: MachineIdentityRiskSeverityCounts
sidebar_label: MachineIdentityRiskSeverityCounts
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityRiskSeverityCounts', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-risk-severity-counts
tags: ['SDK', 'Software Development Kit', 'MachineIdentityRiskSeverityCounts', 'machine_identities']
---

# MachineIdentityRiskSeverityCounts

Import this model from the entry point of its package:

```typescript
import { MachineIdentityRiskSeverityCounts } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **(optional)** `number` | Number of machine identities with a CRITICAL risk severity. | [default to undefined]
**high** | **(optional)** `number` | Number of machine identities with a HIGH risk severity. | [default to undefined]
**medium** | **(optional)** `number` | Number of machine identities with a MEDIUM risk severity. | [default to undefined]
**low** | **(optional)** `number` | Number of machine identities with a LOW risk severity. | [default to undefined]
**unknown** | **(optional)** `number` | Number of machine identities that have no risk severity. This value is `null` unless unclassified risk severity counting is enabled for the tenant. Version 1 of the API always returns `null`. | [default to undefined]

