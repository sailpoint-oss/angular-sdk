---
id: multi_host_integration-model-multi-host-integrations-connector-attributes
title: MultiHostIntegrationsConnectorAttributes
pagination_label: MultiHostIntegrationsConnectorAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributes
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MultiHostIntegrationsConnectorAttributes', 'multi_host_integration']
slug: /tools/sdk/angular/multi_host_integration/models/multi-host-integrations-connector-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributes', 'multi_host_integration']
---

# MultiHostIntegrationsConnectorAttributes

Import this model from the entry point of its package:

```typescript
import { MultiHostIntegrationsConnectorAttributes } from 'sailpoint-angular-sdk/multi_host_integration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxAllowedSources** | **(optional)** `number` | Maximum sources allowed count of a Multi-Host Integration | [default to undefined]
**lastSourceUploadCount** | **(optional)** `number` | Last upload sources count of a Multi-Host Integration | [default to undefined]
**connectorFileUploadHistory** | **(optional)** `MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory` |  | [default to undefined]
**multihost_status** | **(optional)** `string` | Multi-Host integration status. | [default to undefined]
**showAccountSchema** | **(optional)** `boolean` | Show account schema | [default to true]
**showEntitlementSchema** | **(optional)** `boolean` | Show entitlement schema | [default to true]
**multiHostAttributes** | **(optional)** `MultiHostIntegrationsConnectorAttributesMultiHostAttributes` |  | [default to undefined]

