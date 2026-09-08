---
id: custom_forms-model-form-element
title: FormElement
pagination_label: FormElement
sidebar_label: FormElement
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'FormElement', 'custom_forms']
slug: /tools/sdk/angular/custom_forms/models/form-element
tags: ['SDK', 'Software Development Kit', 'FormElement', 'custom_forms']
---

# FormElement

Import this model from the entry point of its package:

```typescript
import { FormElement } from 'sailpoint-angular-sdk/custom_forms';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Form element identifier. | [default to undefined]
**elementType** | **(optional)** `string` | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [default to undefined]
**config** | **(optional)**  | Config object. | [default to undefined]
**key** | **(optional)** `string` | Technical key. | [default to undefined]
**validations** | **(optional)** `Array<FormElementValidationsSet>` |  | [default to undefined]

