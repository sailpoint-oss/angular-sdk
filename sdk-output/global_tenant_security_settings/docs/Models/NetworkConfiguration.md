---
id: global_tenant_security_settings-model-network-configuration
title: NetworkConfiguration
pagination_label: NetworkConfiguration
sidebar_label: NetworkConfiguration
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'NetworkConfiguration', 'global_tenant_security_settings']
slug: /tools/sdk/angular/global_tenant_security_settings/models/network-configuration
tags: ['SDK', 'Software Development Kit', 'NetworkConfiguration', 'global_tenant_security_settings']
---

# NetworkConfiguration

Import this model from the entry point of its package:

```typescript
import { NetworkConfiguration } from 'sailpoint-angular-sdk/global_tenant_security_settings';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | **(optional)** `Array<string>` | The collection of ip ranges. | [default to undefined]
**geolocation** | **(optional)** `Array<string>` | The collection of country codes. | [default to undefined]
**whitelisted** | **(optional)** `boolean` | Denotes whether the provided lists are whitelisted or blacklisted for geo location. | [default to false]

