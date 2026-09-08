---
id: shared_signals_framework_ssf-model-get-stream-v1200-response
title: GetStreamV1200Response
pagination_label: GetStreamV1200Response
sidebar_label: GetStreamV1200Response
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'GetStreamV1200Response', 'shared_signals_framework_ssf']
slug: /tools/sdk/angular/shared_signals_framework_ssf/models/get-stream-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetStreamV1200Response', 'shared_signals_framework_ssf']
---

# GetStreamV1200Response

Import this model from the entry point of its package:

```typescript
import { GetStreamV1200Response } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **(optional)** `string` | Unique stream identifier. | [default to undefined]
**iss** | **(optional)** `string` | Issuer (transmitter) URL. | [default to undefined]
**aud** | **(optional)** `string` | Audience for the stream. | [default to undefined]
**delivery** | **(optional)** `DeliveryResponse` |  | [default to undefined]
**events_supported** | **(optional)** `Array<string>` | Event types supported by the transmitter. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Event types requested by the receiver. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [default to undefined]
**events_delivered** | **(optional)** `Array<string>` | Event types currently being delivered (intersection of supported and requested). | [default to undefined]
**description** | **(optional)** `string` | Optional stream description. | [default to undefined]
**inactivity_timeout** | **(optional)** `number` | Inactivity timeout in seconds (optional). | [default to undefined]
**min_verification_interval** | **(optional)** `number` | Minimum verification interval in seconds (optional). | [default to undefined]

