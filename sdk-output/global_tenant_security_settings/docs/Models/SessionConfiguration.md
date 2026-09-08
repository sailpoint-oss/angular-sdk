---
id: global_tenant_security_settings-model-session-configuration
title: SessionConfiguration
pagination_label: SessionConfiguration
sidebar_label: SessionConfiguration
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SessionConfiguration', 'global_tenant_security_settings']
slug: /tools/sdk/angular/global_tenant_security_settings/models/session-configuration
tags: ['SDK', 'Software Development Kit', 'SessionConfiguration', 'global_tenant_security_settings']
---

# SessionConfiguration

Import this model from the entry point of its package:

```typescript
import { SessionConfiguration } from '@sailpoint/angular-sdk/global_tenant_security_settings';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxIdleTime** | **(optional)** `number` | The maximum time in minutes a session can be idle. | [default to undefined]
**rememberMe** | **(optional)** `boolean` | Denotes if \'remember me\' is enabled. | [default to false]
**maxSessionTime** | **(optional)** `number` | The maximum allowable session time in minutes. | [default to undefined]

