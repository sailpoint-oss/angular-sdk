---
id: shared_signals_framework_ssf-model-update-stream-configuration-request
title: UpdateStreamConfigurationRequest
pagination_label: UpdateStreamConfigurationRequest
sidebar_label: UpdateStreamConfigurationRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'UpdateStreamConfigurationRequest', 'shared_signals_framework_ssf']
slug: /tools/sdk/angular/shared_signals_framework_ssf/models/update-stream-configuration-request
tags: ['SDK', 'Software Development Kit', 'UpdateStreamConfigurationRequest', 'shared_signals_framework_ssf']
---

# UpdateStreamConfigurationRequest

Import this model from the entry point of its package:

```typescript
import { UpdateStreamConfigurationRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | `string` | ID of the stream to update. | [default to undefined]
**delivery** | **(optional)** `DeliveryRequest` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Event types the receiver wants. Use CAEP event-type URIs. | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

