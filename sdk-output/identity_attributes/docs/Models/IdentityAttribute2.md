---
id: identity_attributes-model-identity-attribute2
title: IdentityAttribute2
pagination_label: IdentityAttribute2
sidebar_label: IdentityAttribute2
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'IdentityAttribute2', 'identity_attributes']
slug: /tools/sdk/angular/identity_attributes/models/identity-attribute2
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute2', 'identity_attributes']
---

# IdentityAttribute2

Import this model from the entry point of its package:

```typescript
import { IdentityAttribute2 } from 'sailpoint-angular-sdk/identity_attributes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Identity attribute\'s technical name. | [default to undefined]
**displayName** | **(optional)** `string` | Identity attribute\'s business-friendly name. | [default to undefined]
**standard** | **(optional)** `boolean` | Indicates whether the attribute is \'standard\' or \'default\'. | [default to false]
**type** | **(optional)** `string` | Identity attribute\'s type. | [default to undefined]
**multi** | **(optional)** `boolean` | Indicates whether the identity attribute is multi-valued. | [default to false]
**searchable** | **(optional)** `boolean` | Indicates whether the identity attribute is searchable. | [default to false]
**system** | **(optional)** `boolean` | Indicates whether the identity attribute is \'system\', meaning that it doesn\'t have a source and isn\'t configurable. | [default to false]
**sources** | **(optional)** `Array<Source2>` | Identity attribute\'s list of sources - this specifies how the rule\'s value is derived. | [default to undefined]

