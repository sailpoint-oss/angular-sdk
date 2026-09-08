---
id: multi_host_integration-model-multi-host-integrations-manager-correlation-mapping
title: MultiHostIntegrationsManagerCorrelationMapping
pagination_label: MultiHostIntegrationsManagerCorrelationMapping
sidebar_label: MultiHostIntegrationsManagerCorrelationMapping
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MultiHostIntegrationsManagerCorrelationMapping', 'multi_host_integration']
slug: /tools/sdk/angular/multi_host_integration/models/multi-host-integrations-manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsManagerCorrelationMapping', 'multi_host_integration']
---

# MultiHostIntegrationsManagerCorrelationMapping

Import this model from the entry point of its package:

```typescript
import { MultiHostIntegrationsManagerCorrelationMapping } from 'sailpoint-angular-sdk/multi_host_integration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountAttributeName** | **(optional)** `string` | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager\'s identity. | [default to undefined]
**identityAttributeName** | **(optional)** `string` | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [default to undefined]

