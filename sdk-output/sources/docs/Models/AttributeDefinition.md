---
id: sources-model-attribute-definition
title: AttributeDefinition
pagination_label: AttributeDefinition
sidebar_label: AttributeDefinition
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AttributeDefinition', 'sources']
slug: /tools/sdk/angular/sources/models/attribute-definition
tags: ['SDK', 'Software Development Kit', 'AttributeDefinition', 'sources']
---

# AttributeDefinition

Import this model from the entry point of its package:

```typescript
import { AttributeDefinition } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the attribute. | [default to undefined]
**nativeName** | **(optional)** `string` | Attribute name in the native system. | [default to undefined]
**type** | **(optional)** `AttributeDefinitionType` |  | [default to undefined]
**schema** | **(optional)** `AttributeDefinitionSchema` |  | [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the attribute. | [default to undefined]
**isMulti** | **(optional)** `boolean` | Flag indicating whether or not the attribute is multi-valued. | [default to false]
**isEntitlement** | **(optional)** `boolean` | Flag indicating whether or not the attribute is an entitlement. | [default to false]
**isGroup** | **(optional)** `boolean` | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..  | [default to false]

