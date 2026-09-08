---
id: custom_forms-model-form-condition
title: FormCondition
pagination_label: FormCondition
sidebar_label: FormCondition
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'FormCondition', 'custom_forms']
slug: /tools/sdk/angular/custom_forms/models/form-condition
tags: ['SDK', 'Software Development Kit', 'FormCondition', 'custom_forms']
---

# FormCondition

Import this model from the entry point of its package:

```typescript
import { FormCondition } from 'sailpoint-angular-sdk/custom_forms';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleOperator** | **(optional)** `string` | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [default to undefined]
**rules** | **(optional)** `Array<ConditionRule>` | List of rules. | [default to undefined]
**effects** | **(optional)** `Array<ConditionEffect>` | List of effects. | [default to undefined]

