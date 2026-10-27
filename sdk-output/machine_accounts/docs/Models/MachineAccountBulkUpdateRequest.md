---
id: machine_accounts-model-machine-account-bulk-update-request
title: MachineAccountBulkUpdateRequest
pagination_label: MachineAccountBulkUpdateRequest
sidebar_label: MachineAccountBulkUpdateRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineAccountBulkUpdateRequest', 'machine_accounts']
slug: /tools/sdk/angular/machine_accounts/models/machine-account-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'MachineAccountBulkUpdateRequest', 'machine_accounts']
---

# MachineAccountBulkUpdateRequest

Import this model from the entry point of its package:

```typescript
import { MachineAccountBulkUpdateRequest } from '@sailpoint/angular-sdk/machine_accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | `Array<string>` | IDs of the machine accounts to update. Provide between 1 and 100 IDs. | [default to undefined]
**jsonPatch** | `Array<JsonPatchOperation>` | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations to apply to every machine account in `ids`. Each operation must target one of these top-level fields: `description`, `subtype`, `environment`, `machineIdentity`, `ownerIdentity`, `manuallyEdited`. | [default to undefined]

