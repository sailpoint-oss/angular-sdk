---
id: global_tenant_security_settings-model-jit-configuration
title: JITConfiguration
pagination_label: JITConfiguration
sidebar_label: JITConfiguration
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'JITConfiguration', 'global_tenant_security_settings']
slug: /tools/sdk/angular/global_tenant_security_settings/models/jit-configuration
tags: ['SDK', 'Software Development Kit', 'JITConfiguration', 'global_tenant_security_settings']
---

# JITConfiguration

Import this model from the entry point of its package:

```typescript
import { JITConfiguration } from '@sailpoint/angular-sdk/global_tenant_security_settings';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | The indicator for just-in-time provisioning enabled | [default to false]
**sourceId** | **(optional)** `string` | the sourceId that mapped to just-in-time provisioning configuration | [default to undefined]
**sourceAttributeMappings** | **(optional)**  | A mapping of identity profile attribute names to SAML assertion attribute names | [default to undefined]

