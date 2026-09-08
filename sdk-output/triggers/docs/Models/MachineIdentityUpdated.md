---
id: triggers-model-machine-identity-updated
title: MachineIdentityUpdated
pagination_label: MachineIdentityUpdated
sidebar_label: MachineIdentityUpdated
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityUpdated', 'triggers']
slug: /tools/sdk/angular/triggers/models/machine-identity-updated
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUpdated', 'triggers']
---

# MachineIdentityUpdated

Import this model from the entry point of its package:

```typescript
import { MachineIdentityUpdated } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventType** | `string` | Type of the event. | [default to undefined]
**machineIdentity** | `MachineIdentityUpdatedMachineIdentity` |  | [default to undefined]
**machineIdentityChangeTypes** | `Array<string>` | Types of changes that occurred to the machine identity. | [default to undefined]
**userEntitlementChanges** | `MachineIdentityUpdatedUserEntitlementChanges` |  | [default to undefined]
**ownerChanges** | `MachineIdentityUpdatedOwnerChanges` |  | [default to undefined]
**singleValueAttributeChanges** | `Array<MachineIdentityUpdatedSingleValueAttributeChangesInner>` | Details about the single-value attribute changes that occurred. | [default to undefined]

