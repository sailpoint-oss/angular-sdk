---
id: privilege_criteria-model-create-privilege-criteria-request
title: CreatePrivilegeCriteriaRequest
pagination_label: CreatePrivilegeCriteriaRequest
sidebar_label: CreatePrivilegeCriteriaRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CreatePrivilegeCriteriaRequest', 'privilege_criteria']
slug: /tools/sdk/angular/privilege_criteria/models/create-privilege-criteria-request
tags: ['SDK', 'Software Development Kit', 'CreatePrivilegeCriteriaRequest', 'privilege_criteria']
---

# CreatePrivilegeCriteriaRequest

Import this model from the entry point of its package:

```typescript
import { CreatePrivilegeCriteriaRequest } from '@sailpoint/angular-sdk/privilege_criteria';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **(optional)** `string` | The Id of the source that the criteria is applied to. | [default to undefined]
**type** | **(optional)** `string` | The type of criteria being created. Expects \"CUSTOM\". | [default to undefined]
**operator** | **(optional)** `string` | The logical operator to apply between groups. | [default to undefined]
**groups** | **(optional)** `Array<CreatePrivilegeCriteriaRequestGroupsInner>` |  | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level assigned by this criteria. | [default to undefined]

