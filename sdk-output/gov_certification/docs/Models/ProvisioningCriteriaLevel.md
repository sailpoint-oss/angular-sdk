---
id: gov_certification-model-provisioning-criteria-level
title: ProvisioningCriteriaLevel
pagination_label: ProvisioningCriteriaLevel
sidebar_label: ProvisioningCriteriaLevel
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ProvisioningCriteriaLevel', 'gov_certification']
slug: /tools/sdk/angular/gov_certification/models/provisioning-criteria-level
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel', 'gov_certification']
---

# ProvisioningCriteriaLevel

Import this model from the entry point of its package:

```typescript
import { ProvisioningCriteriaLevel } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `ProvisioningCriteriaOperation` |  | [default to undefined]
**attribute** | **(optional)** `string` | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**value** | **(optional)** `string` | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [default to undefined]
**children** | **(optional)** `Array<ProvisioningCriteriaLevel>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [default to undefined]

