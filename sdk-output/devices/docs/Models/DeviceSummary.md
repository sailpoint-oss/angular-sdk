---
id: devices-model-device-summary
title: DeviceSummary
pagination_label: DeviceSummary
sidebar_label: DeviceSummary
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'DeviceSummary', 'devices']
slug: /tools/sdk/angular/devices/models/device-summary
tags: ['SDK', 'Software Development Kit', 'DeviceSummary', 'devices']
---

# DeviceSummary

Import this model from the entry point of its package:

```typescript
import { DeviceSummary } from '@sailpoint/angular-sdk/devices';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalEndpoints** | **(optional)** `number` | The total number of devices in the tenant. | [default to undefined]
**byOs** | **(optional)** `DeviceOSCounts` |  | [default to undefined]
**avgAgentsPerEndpoint** | **(optional)** `number` | The average number of agents per device, rounded to one decimal place. | [default to undefined]
**endpointsWithoutRecentData** | **(optional)** `number` | The number of devices for which the source has sent no endpoint data or resource link in the last three days. | [default to undefined]
**endpointsWithActiveAgents** | **(optional)** `number` | The number of devices linked to at least one existing agent. | [default to undefined]

