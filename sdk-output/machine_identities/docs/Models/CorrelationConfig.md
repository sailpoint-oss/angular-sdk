---
id: machine_identities-model-correlation-config
title: CorrelationConfig
pagination_label: CorrelationConfig
sidebar_label: CorrelationConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CorrelationConfig', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/correlation-config
tags: ['SDK', 'Software Development Kit', 'CorrelationConfig', 'machine_identities']
---

# CorrelationConfig

Import this model from the entry point of its package:

```typescript
import { CorrelationConfig } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | System-generated unique ID of the correlation config. | [default to undefined]
**sourceId** | `string` | The source ID this config belongs to. | [default to undefined]
**resourceId** | `string` | The source resource identifier for this config scope. | [default to undefined]
**type** | `string` | The correlation config type. | [default to undefined]
**attributes** |  | JSON object of config attributes. May include syncPrimaryToMachineAccounts (boolean) on OWNER_PRIMARY only. | [default to undefined]
**rules** | `Array<CorrelationRule>` | The ordered set of correlation rules for this config. | [default to undefined]
**created** | **(optional)** `string` | Creation date of the config. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the config. | [readonly] [default to undefined]

