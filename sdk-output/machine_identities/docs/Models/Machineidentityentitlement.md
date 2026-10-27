---
id: machine_identities-model-machineidentityentitlement
title: Machineidentityentitlement
pagination_label: Machineidentityentitlement
sidebar_label: Machineidentityentitlement
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Machineidentityentitlement', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machineidentityentitlement
tags: ['SDK', 'Software Development Kit', 'Machineidentityentitlement', 'machine_identities']
---

# Machineidentityentitlement

Import this model from the entry point of its package:

```typescript
import { Machineidentityentitlement } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**accountId** | **(optional)** `string` | ID of the machine account that holds the entitlement. | [default to undefined]
**accountName** | **(optional)** `string` | Name of the machine account that holds the entitlement. | [default to undefined]
**attribute** | **(optional)** `string` | Name of the account attribute that contains the entitlement. | [default to undefined]
**value** | **(optional)** `string` | Value of the entitlement. | [default to undefined]
**description** | **(optional)** `string` | Description of the entitlement. | [default to undefined]
**cloudGoverned** | **(optional)** `boolean` | Indicates whether the entitlement is governed in the cloud. | [default to false]
**source** | **(optional)** `MachineIdentityEntitlementSource` |  | [default to undefined]

