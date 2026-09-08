---
id: sim_integrations-model-provisioning-config
title: ProvisioningConfig
pagination_label: ProvisioningConfig
sidebar_label: ProvisioningConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ProvisioningConfig', 'sim_integrations']
slug: /tools/sdk/angular/sim_integrations/models/provisioning-config
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig', 'sim_integrations']
---

# ProvisioningConfig

Import this model from the entry point of its package:

```typescript
import { ProvisioningConfig } from '@sailpoint/angular-sdk/sim_integrations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**universalManager** | **(optional)** `boolean` | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [readonly] [default to false]
**managedResourceRefs** | **(optional)** `Array<ServiceDeskSource>` | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [default to undefined]
**planInitializerScript** | **(optional)** `ProvisioningConfigPlanInitializerScript` |  | [default to undefined]
**noProvisioningRequests** | **(optional)** `boolean` | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [default to false]
**provisioningRequestExpiration** | **(optional)** `number` | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [default to undefined]

