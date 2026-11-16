---
id: machine_account_creation_request-model-machine-account-create-entitlement
title: MachineAccountCreateEntitlement
pagination_label: MachineAccountCreateEntitlement
sidebar_label: MachineAccountCreateEntitlement
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineAccountCreateEntitlement', 'machine_account_creation_request']
slug: /tools/sdk/angular/machine_account_creation_request/models/machine-account-create-entitlement
tags: ['SDK', 'Software Development Kit', 'MachineAccountCreateEntitlement', 'machine_account_creation_request']
---

# MachineAccountCreateEntitlement

Import this model from the entry point of its package:

```typescript
import { MachineAccountCreateEntitlement } from '@sailpoint/angular-sdk/machine_account_creation_request';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Entitlement id to provision. Not required to be a UUID. | [default to undefined]
**comment** | **(optional)** `string` | Justification stored with the entitlement request. | [default to '']
**startDate** | **(optional)** `string` | When access starts. Must be in the future and before `removeDate` when both are set. | [default to undefined]
**removeDate** | **(optional)** `string` | When access ends. Must be in the future and after `startDate` when both are set. | [default to undefined]

