---
id: shared_signals_framework_ssf-model-create-stream-delivery-request
title: CreateStreamDeliveryRequest
pagination_label: CreateStreamDeliveryRequest
sidebar_label: CreateStreamDeliveryRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CreateStreamDeliveryRequest', 'shared_signals_framework_ssf']
slug: /tools/sdk/angular/shared_signals_framework_ssf/models/create-stream-delivery-request
tags: ['SDK', 'Software Development Kit', 'CreateStreamDeliveryRequest', 'shared_signals_framework_ssf']
---

# CreateStreamDeliveryRequest

Import this model from the entry point of its package:

```typescript
import { CreateStreamDeliveryRequest } from 'sailpoint-angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | `string` | Delivery method (only push is supported). | [default to undefined]
**endpoint_url** | `string` | Receiver endpoint URL for push delivery. | [default to undefined]
**authorization_header** | **(optional)** `string` | Authorization header value for delivery requests. | [default to undefined]

