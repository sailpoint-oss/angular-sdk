---
id: access_model_metadata-model-text-query
title: TextQuery
pagination_label: TextQuery
sidebar_label: TextQuery
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'TextQuery', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/models/text-query
tags: ['SDK', 'Software Development Kit', 'TextQuery', 'access_model_metadata']
---

# TextQuery

Import this model from the entry point of its package:

```typescript
import { TextQuery } from 'sailpoint-angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | `Array<string>` | Words or characters that specify a particular thing to be searched for. | [default to undefined]
**fields** | `Array<string>` | The fields to be searched. | [default to undefined]
**matchAny** | **(optional)** `boolean` | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [default to false]
**contains** | **(optional)** `boolean` | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [default to false]

