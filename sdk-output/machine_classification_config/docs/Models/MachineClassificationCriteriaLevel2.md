---
id: machine_classification_config-model-machine-classification-criteria-level2
title: MachineClassificationCriteriaLevel2
pagination_label: MachineClassificationCriteriaLevel2
sidebar_label: MachineClassificationCriteriaLevel2
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineClassificationCriteriaLevel2', 'machine_classification_config']
slug: /tools/sdk/angular/machine_classification_config/models/machine-classification-criteria-level2
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel2', 'machine_classification_config']
---

# MachineClassificationCriteriaLevel2

Import this model from the entry point of its package:

```typescript
import { MachineClassificationCriteriaLevel2 } from '@sailpoint/angular-sdk/machine_classification_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `MachineClassificationCriteriaOperation` |  | [default to undefined]
**caseSensitive** | **(optional)** `boolean` | Indicates whether case matters when evaluating the criteria | [default to false]
**dataType** | **(optional)** `string` | The data type of the attribute being evaluated | [default to undefined]
**attribute** | **(optional)** `string` | The attribute to evaluate in the classification criteria | [default to undefined]
**value** | **(optional)** `string` | The value to compare against the attribute in the classification criteria | [default to undefined]
**children** | **(optional)** `Array<MachineClassificationCriteriaLevel3>` | An array of child classification criteria objects | [default to undefined]

