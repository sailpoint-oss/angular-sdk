---
id: sources-model-provisioning-policy-dto-v2
title: ProvisioningPolicyDtoV2
pagination_label: ProvisioningPolicyDtoV2
sidebar_label: ProvisioningPolicyDtoV2
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ProvisioningPolicyDtoV2', 'sources']
slug: /tools/sdk/angular/sources/models/provisioning-policy-dto-v2
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicyDtoV2', 'sources']
---

# ProvisioningPolicyDtoV2

Import this model from the entry point of its package:

```typescript
import { ProvisioningPolicyDtoV2 } from 'sailpoint-angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the provisioning policy. | [default to undefined]
**name** | `string` | the provisioning policy name | [default to undefined]
**subtypeId** | **(optional)** `string` | Subtype ID for which provisioning policy will be created when usageType is CREATE_MACHINE_ACCOUNT. | [default to undefined]
**description** | **(optional)** `string` | the description of the provisioning policy | [default to undefined]
**usageType** | **(optional)** `UsagetypeV2` |  | [default to undefined]
**fields** | **(optional)** `Array<FieldDetailsDtoV2>` |  | [default to undefined]

