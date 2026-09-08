---
id: managed_clusters-model-client-log-configuration-expiration
title: ClientLogConfigurationExpiration
pagination_label: ClientLogConfigurationExpiration
sidebar_label: ClientLogConfigurationExpiration
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ClientLogConfigurationExpiration', 'managed_clusters']
slug: /tools/sdk/angular/managed_clusters/models/client-log-configuration-expiration
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationExpiration', 'managed_clusters']
---

# ClientLogConfigurationExpiration

Import this model from the entry point of its package:

```typescript
import { ClientLogConfigurationExpiration } from 'sailpoint-angular-sdk/managed_clusters';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**expiration** | **(optional)** `string` | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [default to undefined]
**rootLevel** | `StandardLevel` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]

