---
id: machine_identities-model-machine-identity
title: MachineIdentity
pagination_label: MachineIdentity
sidebar_label: MachineIdentity
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentity', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentity', 'machine_identities']
---

# MachineIdentity

Import this model from the entry point of its package:

```typescript
import { MachineIdentity } from 'sailpoint-angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**nativeIdentity** | `string` | The native identity associated to the machine identity directly aggregated from a source | [default to undefined]
**description** | **(optional)** `string` | Description of machine identity | [default to undefined]
**attributes** | **(optional)** `object` | A map of custom machine identity attributes | [default to undefined]
**subtype** | `string` | The subtype value associated to the machine identity | [default to undefined]
**owners** | **(optional)** `MachineIdentityDtoOwners` |  | [default to undefined]
**sourceId** | **(optional)** `string` | The source id associated to the machine identity | [default to undefined]
**uuid** | **(optional)** `string` | The UUID associated to the machine identity directly aggregated from a source | [default to undefined]

