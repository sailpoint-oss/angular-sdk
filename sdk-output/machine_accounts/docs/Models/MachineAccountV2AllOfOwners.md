---
id: machine_accounts-model-machine-account-v2-all-of-owners
title: MachineAccountV2AllOfOwners
pagination_label: MachineAccountV2AllOfOwners
sidebar_label: MachineAccountV2AllOfOwners
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineAccountV2AllOfOwners', 'machine_accounts']
slug: /tools/sdk/angular/machine_accounts/models/machine-account-v2-all-of-owners
tags: ['SDK', 'Software Development Kit', 'MachineAccountV2AllOfOwners', 'machine_accounts']
---

# MachineAccountV2AllOfOwners

Import this model from the entry point of its package:

```typescript
import { MachineAccountV2AllOfOwners } from '@sailpoint/angular-sdk/machine_accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `BaseReferenceDto` | The identity selected as the primary owner. | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | The secondary owners. Entries are either up to ten identities (type `IDENTITY`) or one governance group (type `GOVERNANCE_GROUP`), not both. | [default to undefined]

