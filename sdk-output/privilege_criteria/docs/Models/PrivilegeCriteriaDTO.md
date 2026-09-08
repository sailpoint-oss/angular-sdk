---
id: privilege_criteria-model-privilege-criteria-dto
title: PrivilegeCriteriaDTO
pagination_label: PrivilegeCriteriaDTO
sidebar_label: PrivilegeCriteriaDTO
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PrivilegeCriteriaDTO', 'privilege_criteria']
slug: /tools/sdk/angular/privilege_criteria/models/privilege-criteria-dto
tags: ['SDK', 'Software Development Kit', 'PrivilegeCriteriaDTO', 'privilege_criteria']
---

# PrivilegeCriteriaDTO

Import this model from the entry point of its package:

```typescript
import { PrivilegeCriteriaDTO } from 'sailpoint-angular-sdk/privilege_criteria';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The Id of the criteria. | [default to undefined]
**sourceId** | **(optional)** `string` | The Id of the source that the criteria is applied to. | [default to undefined]
**type** | **(optional)** `string` | The type of criteria. | [default to undefined]
**operator** | **(optional)** `string` | The logical operator to apply between groups. | [default to undefined]
**groups** | **(optional)** `Array<PrivilegeCriteriaDTOGroupsInner>` |  | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level assigned by this criteria. | [default to undefined]

