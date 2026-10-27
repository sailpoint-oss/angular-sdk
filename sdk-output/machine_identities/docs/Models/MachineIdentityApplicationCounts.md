---
id: machine_identities-model-machine-identity-application-counts
title: MachineIdentityApplicationCounts
pagination_label: MachineIdentityApplicationCounts
sidebar_label: MachineIdentityApplicationCounts
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityApplicationCounts', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-application-counts
tags: ['SDK', 'Software Development Kit', 'MachineIdentityApplicationCounts', 'machine_identities']
---

# MachineIdentityApplicationCounts

Import this model from the entry point of its package:

```typescript
import { MachineIdentityApplicationCounts } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationCount** | **(optional)** `number` | Total number of applications. | [default to undefined]
**unsanctionedApplicationCount** | **(optional)** `number` | Number of applications that are not sanctioned. | [default to undefined]
**discovered** | **(optional)** `MachineIdentityDiscoveredCounts` |  | [default to undefined]
**riskSeverity** | **(optional)** `MachineIdentityRiskSeverityCounts` |  | [default to undefined]
**ownership** | **(optional)** `MachineIdentityApplicationCountsOwnership` |  | [default to undefined]

