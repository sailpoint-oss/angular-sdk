---
id: human_account_subtypes-model-human-account-subtype-config-human-account-create
title: HumanAccountSubtypeConfigHumanAccountCreate
pagination_label: HumanAccountSubtypeConfigHumanAccountCreate
sidebar_label: HumanAccountSubtypeConfigHumanAccountCreate
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'HumanAccountSubtypeConfigHumanAccountCreate', 'human_account_subtypes']
slug: /tools/sdk/angular/human_account_subtypes/models/human-account-subtype-config-human-account-create
tags: ['SDK', 'Software Development Kit', 'HumanAccountSubtypeConfigHumanAccountCreate', 'human_account_subtypes']
---

# HumanAccountSubtypeConfigHumanAccountCreate

Import this model from the entry point of its package:

```typescript
import { HumanAccountSubtypeConfigHumanAccountCreate } from '@sailpoint/angular-sdk/human_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCreateEnabled** | **(optional)** `boolean` | Specifies if creation of human accounts is allowed for this subtype. | [default to false]
**approvalRequired** | **(optional)** `boolean` | Specifies if approval is required for human account creation requests for this subtype. | [default to false]
**approvalConfig** | **(optional)** `HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig` |  | [default to undefined]
**formId** | **(optional)** `string` | ID of the form linked to the subtype. | [default to undefined]

