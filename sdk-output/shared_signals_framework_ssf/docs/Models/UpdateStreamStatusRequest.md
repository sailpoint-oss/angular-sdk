---
id: shared_signals_framework_ssf-model-update-stream-status-request
title: UpdateStreamStatusRequest
pagination_label: UpdateStreamStatusRequest
sidebar_label: UpdateStreamStatusRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'UpdateStreamStatusRequest', 'shared_signals_framework_ssf']
slug: /tools/sdk/angular/shared_signals_framework_ssf/models/update-stream-status-request
tags: ['SDK', 'Software Development Kit', 'UpdateStreamStatusRequest', 'shared_signals_framework_ssf']
---

# UpdateStreamStatusRequest

Import this model from the entry point of its package:

```typescript
import { UpdateStreamStatusRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | `string` | ID of the stream whose status to update. | [default to undefined]
**status** | `string` | Desired stream status. | [default to undefined]
**reason** | **(optional)** `string` | Optional reason for the status change. | [default to undefined]

