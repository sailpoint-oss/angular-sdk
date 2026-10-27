---
id: machine_identities-model-machine-identity-all-counts
title: MachineIdentityAllCounts
pagination_label: MachineIdentityAllCounts
sidebar_label: MachineIdentityAllCounts
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityAllCounts', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-all-counts
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAllCounts', 'machine_identities']
---

# MachineIdentityAllCounts

Import this model from the entry point of its package:

```typescript
import { MachineIdentityAllCounts } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationIdentityCount** | **(optional)** `number` | Number of application machine identities where the identity is a primary or secondary owner. | [default to undefined]
**aiAgentCount** | **(optional)** `number` | Number of AI agent machine identities where the identity is a primary or secondary owner. | [default to undefined]
**machineAccountsCount** | **(optional)** `number` | Number of machine accounts owned by the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Sum of the application, AI agent, and machine account counts. | [default to undefined]

