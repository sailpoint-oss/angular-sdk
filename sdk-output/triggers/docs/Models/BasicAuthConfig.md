---
id: triggers-model-basic-auth-config
title: BasicAuthConfig
pagination_label: BasicAuthConfig
sidebar_label: BasicAuthConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BasicAuthConfig', 'triggers']
slug: /tools/sdk/angular/triggers/models/basic-auth-config
tags: ['SDK', 'Software Development Kit', 'BasicAuthConfig', 'triggers']
---

# BasicAuthConfig

Import this model from the entry point of its package:

```typescript
import { BasicAuthConfig } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userName** | **(optional)** `string` | The username to authenticate. | [default to undefined]
**password** | **(optional)** `string` | The password to authenticate. On response, this field is set to null as to not return secrets. | [default to undefined]

