---
id: iai_role_mining-model-role-mining-potential-role-provision-request
title: RoleMiningPotentialRoleProvisionRequest
pagination_label: RoleMiningPotentialRoleProvisionRequest
sidebar_label: RoleMiningPotentialRoleProvisionRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleMiningPotentialRoleProvisionRequest', 'iai_role_mining']
slug: /tools/sdk/angular/iai_role_mining/models/role-mining-potential-role-provision-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleProvisionRequest', 'iai_role_mining']
---

# RoleMiningPotentialRoleProvisionRequest

Import this model from the entry point of its package:

```typescript
import { RoleMiningPotentialRoleProvisionRequest } from '@sailpoint/angular-sdk/iai_role_mining';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roleName** | **(optional)** `string` | Name of the new role being created | [default to undefined]
**roleDescription** | **(optional)** `string` | Short description of the new role being created | [default to undefined]
**ownerId** | **(optional)** `string` | ID of the identity that will own this role | [default to undefined]
**includeIdentities** | **(optional)** `boolean` | When true, create access requests for the identities associated with the potential role | [default to false]
**directlyAssignedEntitlements** | **(optional)** `boolean` | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [default to false]

