---
id: triggers-model-http-config
title: HttpConfig
pagination_label: HttpConfig
sidebar_label: HttpConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'HttpConfig', 'triggers']
slug: /tools/sdk/angular/triggers/models/http-config
tags: ['SDK', 'Software Development Kit', 'HttpConfig', 'triggers']
---

# HttpConfig

Import this model from the entry point of its package:

```typescript
import { HttpConfig } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | `string` | URL of the external/custom integration. | [default to undefined]
**httpDispatchMode** | `HttpDispatchMode` |  | [default to undefined]
**httpAuthenticationType** | **(optional)** `HttpAuthenticationType` |  | [default to undefined]
**basicAuthConfig** | **(optional)** `BasicAuthConfig` |  | [default to undefined]
**bearerTokenAuthConfig** | **(optional)** `BearerTokenAuthConfig` |  | [default to undefined]

