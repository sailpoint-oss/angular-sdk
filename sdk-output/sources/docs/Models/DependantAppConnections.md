---
id: sources-model-dependant-app-connections
title: DependantAppConnections
pagination_label: DependantAppConnections
sidebar_label: DependantAppConnections
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'DependantAppConnections', 'sources']
slug: /tools/sdk/angular/sources/models/dependant-app-connections
tags: ['SDK', 'Software Development Kit', 'DependantAppConnections', 'sources']
---

# DependantAppConnections

Import this model from the entry point of its package:

```typescript
import { DependantAppConnections } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloudAppId** | **(optional)** `string` | Id of the connected Application | [default to undefined]
**description** | **(optional)** `string` | Description of the connected Application | [default to undefined]
**enabled** | **(optional)** `boolean` | Is the Application enabled | [default to true]
**provisionRequestEnabled** | **(optional)** `boolean` | Is Provisioning enabled for connected Application | [default to true]
**accountSource** | **(optional)** `DependantAppConnectionsAccountSource` |  | [default to undefined]
**launcherCount** | **(optional)** `number` | The amount of launchers for connected Application (long type) | [default to undefined]
**matchAllAccount** | **(optional)** `boolean` | Is Provisioning enabled for connected Application | [default to false]
**owner** | **(optional)** `Array<BaseReferenceDto>` | The owner of the connected Application | [default to undefined]
**appCenterEnabled** | **(optional)** `boolean` | Is App Center enabled for connected Application | [default to false]

