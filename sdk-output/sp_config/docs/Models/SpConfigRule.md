---
id: sp_config-model-sp-config-rule
title: SpConfigRule
pagination_label: SpConfigRule
sidebar_label: SpConfigRule
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SpConfigRule', 'sp_config']
slug: /tools/sdk/angular/sp_config/models/sp-config-rule
tags: ['SDK', 'Software Development Kit', 'SpConfigRule', 'sp_config']
---

# SpConfigRule

Import this model from the entry point of its package:

```typescript
import { SpConfigRule } from 'sailpoint-angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **(optional)** `string` | JSONPath expression denoting the path within the object where a value substitution should be applied. | [default to undefined]
**value** | **(optional)** `SpConfigRuleValue` |  | [default to undefined]
**modes** | **(optional)** `Array<string>` | Draft modes the rule will apply to. | [default to undefined]

