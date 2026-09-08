---
id: machine_identities-model-machine-identity-owners-v2
title: MachineIdentityOwnersV2
pagination_label: MachineIdentityOwnersV2
sidebar_label: MachineIdentityOwnersV2
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityOwnersV2', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-owners-v2
tags: ['SDK', 'Software Development Kit', 'MachineIdentityOwnersV2', 'machine_identities']
---

# MachineIdentityOwnersV2

Import this model from the entry point of its package:

```typescript
import { MachineIdentityOwnersV2 } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `MachineIdentityOwnersV2Primary` |  | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [default to undefined]

