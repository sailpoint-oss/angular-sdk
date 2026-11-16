---
id: machine_account_subtypes-model-provisioning-policy-dto
title: ProvisioningPolicyDto
pagination_label: ProvisioningPolicyDto
sidebar_label: ProvisioningPolicyDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ProvisioningPolicyDto', 'machine_account_subtypes']
slug: /tools/sdk/angular/machine_account_subtypes/models/provisioning-policy-dto
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicyDto', 'machine_account_subtypes']
---

# ProvisioningPolicyDto

Import this model from the entry point of its package:

```typescript
import { ProvisioningPolicyDto } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier of the stored provisioning policy. | [default to undefined]
**subtypeId** | **(optional)** `string` | Identifier of the subtype that owns this policy. | [default to undefined]
**name** | **(optional)** `string` | Name of the provisioning policy. | [default to undefined]
**description** | **(optional)** `string` | Description of the provisioning policy. | [default to undefined]
**usageType** | **(optional)** `string` | Usage type of the policy. This API stores only `CREATE_MACHINE_ACCOUNT`. | [default to '']
**fields** | **(optional)** `Array<FieldDetailsDto>` | Fields in the provisioning policy. Field order is not semantically meaningful. | [default to undefined]

