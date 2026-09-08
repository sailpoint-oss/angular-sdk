---
id: machine_account_creation_request-model-machine-account-create-request-input
title: MachineAccountCreateRequestInput
pagination_label: MachineAccountCreateRequestInput
sidebar_label: MachineAccountCreateRequestInput
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineAccountCreateRequestInput', 'machine_account_creation_request']
slug: /tools/sdk/angular/machine_account_creation_request/models/machine-account-create-request-input
tags: ['SDK', 'Software Development Kit', 'MachineAccountCreateRequestInput', 'machine_account_creation_request']
---

# MachineAccountCreateRequestInput

Import this model from the entry point of its package:

```typescript
import { MachineAccountCreateRequestInput } from 'sailpoint-angular-sdk/machine_account_creation_request';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtypeId** | `string` | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | [default to undefined]
**formId** | **(optional)** `string` | Form ID selected by user for the machine account create request. | [default to undefined]
**ownerIdentityId** | `string` | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | [default to undefined]
**machineIdentityId** | **(optional)** `string` | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [default to undefined]
**environment** | **(optional)** `string` | Environment type to use for the machine account. | [default to undefined]
**description** | **(optional)** `string` | Description for the machine account. | [default to undefined]
**userInput** | **(optional)** `object` | Fields of the form linked to the subtype in approval settings. | [default to undefined]
**entitlementIds** | **(optional)** `Array<string>` | List of entitlement IDs to provision for created machine account. | [default to undefined]

