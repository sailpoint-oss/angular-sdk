---
id: shared_signals_framework_ssf-model-create-stream-request
title: CreateStreamRequest
pagination_label: CreateStreamRequest
sidebar_label: CreateStreamRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CreateStreamRequest', 'shared_signals_framework_ssf']
slug: /tools/sdk/angular/shared_signals_framework_ssf/models/create-stream-request
tags: ['SDK', 'Software Development Kit', 'CreateStreamRequest', 'shared_signals_framework_ssf']
---

# CreateStreamRequest

Import this model from the entry point of its package:

```typescript
import { CreateStreamRequest } from 'sailpoint-angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery** | `CreateStreamDeliveryRequest` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

