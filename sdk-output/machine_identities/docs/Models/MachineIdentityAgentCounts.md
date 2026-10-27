---
id: machine_identities-model-machine-identity-agent-counts
title: MachineIdentityAgentCounts
pagination_label: MachineIdentityAgentCounts
sidebar_label: MachineIdentityAgentCounts
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityAgentCounts', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-agent-counts
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAgentCounts', 'machine_identities']
---

# MachineIdentityAgentCounts

Import this model from the entry point of its package:

```typescript
import { MachineIdentityAgentCounts } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentCount** | **(optional)** `number` | Total number of AI agents. | [default to undefined]
**unsanctionedAgentCount** | **(optional)** `number` | Number of AI agents that are not sanctioned. | [default to undefined]
**discovered** | **(optional)** `MachineIdentityDiscoveredCounts` |  | [default to undefined]
**riskSeverity** | **(optional)** `MachineIdentityRiskSeverityCounts` |  | [default to undefined]
**ownership** | **(optional)** `MachineIdentityAgentCountsOwnership` |  | [default to undefined]

