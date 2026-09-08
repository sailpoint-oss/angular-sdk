---
id: access_model_metadata-model-attribute-dto
title: AttributeDTO
pagination_label: AttributeDTO
sidebar_label: AttributeDTO
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AttributeDTO', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/models/attribute-dto
tags: ['SDK', 'Software Development Kit', 'AttributeDTO', 'access_model_metadata']
---

# AttributeDTO

Import this model from the entry point of its package:

```typescript
import { AttributeDTO } from '@sailpoint/angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | Technical name of the Attribute. This is unique and cannot be changed after creation. | [default to undefined]
**name** | **(optional)** `string` | The display name of the key. | [default to undefined]
**multiselect** | **(optional)** `boolean` | Indicates whether the attribute can have multiple values. | [default to false]
**status** | **(optional)** `string` | The status of the Attribute. | [default to undefined]
**type** | **(optional)** `string` | The type of the Attribute. This can be either \"custom\" or \"governance\". | [default to undefined]
**objectTypes** | **(optional)** `Array<string>` | An array of object types this attributes values can be applied to. Possible values are \"all\" or \"entitlement\". Value \"all\" means this attribute can be used with all object types that are supported. | [default to undefined]
**description** | **(optional)** `string` | The description of the Attribute. | [default to undefined]
**values** | **(optional)** `Array<AttributeValueDTO>` |  | [default to undefined]

