---
id: managed_clusters-model-client-log-configuration-duration-minutes
title: ClientLogConfigurationDurationMinutes
pagination_label: ClientLogConfigurationDurationMinutes
sidebar_label: ClientLogConfigurationDurationMinutes
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ClientLogConfigurationDurationMinutes', 'managed_clusters']
slug: /tools/sdk/angular/managed_clusters/models/client-log-configuration-duration-minutes
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationDurationMinutes', 'managed_clusters']
---

# ClientLogConfigurationDurationMinutes

Import this model from the entry point of its package:

```typescript
import { ClientLogConfigurationDurationMinutes } from '@sailpoint/angular-sdk/managed_clusters';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**rootLevel** | `StandardLevel` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]

