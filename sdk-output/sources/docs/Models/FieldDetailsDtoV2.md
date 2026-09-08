---
id: sources-model-field-details-dto-v2
title: FieldDetailsDtoV2
pagination_label: FieldDetailsDtoV2
sidebar_label: FieldDetailsDtoV2
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'FieldDetailsDtoV2', 'sources']
slug: /tools/sdk/angular/sources/models/field-details-dto-v2
tags: ['SDK', 'Software Development Kit', 'FieldDetailsDtoV2', 'sources']
---

# FieldDetailsDtoV2

Import this model from the entry point of its package:

```typescript
import { FieldDetailsDtoV2 } from 'sailpoint-angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the attribute. | [default to undefined]
**transform** | **(optional)** `object` | The transform to apply to the field | [default to undefined]
**attributes** | **(optional)** `object` | Attributes required for the transform | [default to undefined]
**isRequired** | **(optional)** `boolean` | Flag indicating whether or not the attribute is required. | [readonly] [default to false]
**type** | **(optional)** `string` | The type of the attribute.  string: For text-based data.  int: For whole numbers.  long: For larger whole numbers.  date: For date and time values.  boolean: For true/false values.  secret: For sensitive data like passwords, which will be masked and encrypted.  | [default to undefined]
**isMultiValued** | **(optional)** `boolean` | Flag indicating whether or not the attribute is multi-valued. | [default to false]

