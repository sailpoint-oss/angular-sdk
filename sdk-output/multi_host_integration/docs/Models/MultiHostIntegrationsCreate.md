---
id: multi_host_integration-model-multi-host-integrations-create
title: MultiHostIntegrationsCreate
pagination_label: MultiHostIntegrationsCreate
sidebar_label: MultiHostIntegrationsCreate
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MultiHostIntegrationsCreate', 'multi_host_integration']
slug: /tools/sdk/angular/multi_host_integration/models/multi-host-integrations-create
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCreate', 'multi_host_integration']
---

# MultiHostIntegrationsCreate

Import this model from the entry point of its package:

```typescript
import { MultiHostIntegrationsCreate } from 'sailpoint-angular-sdk/multi_host_integration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Multi-Host Integration\'s human-readable name. | [default to undefined]
**description** | `string` | Multi-Host Integration\'s human-readable description. | [default to undefined]
**owner** | `MultiHostIntegrationsOwner` |  | [default to undefined]
**cluster** | **(optional)** `MultiHostIntegrationsCluster` |  | [default to undefined]
**connector** | `string` | Connector script name. | [default to undefined]
**connectorAttributes** | **(optional)**  | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [default to undefined]
**managementWorkgroup** | **(optional)** `MultiHostIntegrationsManagementWorkgroup` |  | [default to undefined]
**created** | **(optional)** `string` | Date-time when the source was created | [default to undefined]
**modified** | **(optional)** `string` | Date-time when the source was last modified. | [default to undefined]

