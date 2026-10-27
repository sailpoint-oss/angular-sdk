---
id: machine_identities-model-machine-identity-bulk-update-request
title: MachineIdentityBulkUpdateRequest
pagination_label: MachineIdentityBulkUpdateRequest
sidebar_label: MachineIdentityBulkUpdateRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineIdentityBulkUpdateRequest', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machine-identity-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'MachineIdentityBulkUpdateRequest', 'machine_identities']
---

# MachineIdentityBulkUpdateRequest

Import this model from the entry point of its package:

```typescript
import { MachineIdentityBulkUpdateRequest } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | `Array<string>` | IDs of the machine identities to update. Provide between 1 and 100 IDs. | [default to undefined]
**jsonPatch** | `Array<JsonPatchOperation>` | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations applied to every machine identity in `ids`. Only these paths can be patched: `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary`. | [default to undefined]

