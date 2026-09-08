---
id: shared_signals_framework_ssf-model-stream-status-response
title: StreamStatusResponse
pagination_label: StreamStatusResponse
sidebar_label: StreamStatusResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'StreamStatusResponse', 'shared_signals_framework_ssf']
slug: /tools/sdk/angular/shared_signals_framework_ssf/models/stream-status-response
tags: ['SDK', 'Software Development Kit', 'StreamStatusResponse', 'shared_signals_framework_ssf']
---

# StreamStatusResponse

Import this model from the entry point of its package:

```typescript
import { StreamStatusResponse } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **(optional)** `string` | Stream identifier. | [default to undefined]
**status** | **(optional)** `string` | Operational status of the stream (enabled, paused, or disabled). | [default to undefined]
**reason** | **(optional)** `string` | Optional reason for the current status (e.g. set when status is updated). | [default to undefined]

