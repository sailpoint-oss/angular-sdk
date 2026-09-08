---
id: triggers-model-validate-filter-output-dto
title: ValidateFilterOutputDto
pagination_label: ValidateFilterOutputDto
sidebar_label: ValidateFilterOutputDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ValidateFilterOutputDto', 'triggers']
slug: /tools/sdk/angular/triggers/models/validate-filter-output-dto
tags: ['SDK', 'Software Development Kit', 'ValidateFilterOutputDto', 'triggers']
---

# ValidateFilterOutputDto

Import this model from the entry point of its package:

```typescript
import { ValidateFilterOutputDto } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isValid** | **(optional)** `boolean` | When this field is true, the filter expression is valid against the input. | [default to false]
**isValidJSONPath** | **(optional)** `boolean` | When this field is true, the filter expression is using a valid JSON path. | [default to false]
**isPathExist** | **(optional)** `boolean` | When this field is true, the filter expression is using an existing path. | [default to false]

