---
id: access_profiles-model-owner-reference
title: OwnerReference
pagination_label: OwnerReference
sidebar_label: OwnerReference
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'OwnerReference', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/owner-reference
tags: ['SDK', 'Software Development Kit', 'OwnerReference', 'access_profiles']
---

# OwnerReference

Import this model from the entry point of its package:

```typescript
import { OwnerReference } from 'sailpoint-angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Owner type. This field must be either left null or set to \'IDENTITY\' on input, otherwise a 400 Bad Request error will result. | [default to undefined]
**id** | **(optional)** `string` | Owner\'s identity ID. | [default to undefined]
**name** | **(optional)** `string` | Owner\'s name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner\'s display name, otherwise a 400 Bad Request error will result. | [default to undefined]

