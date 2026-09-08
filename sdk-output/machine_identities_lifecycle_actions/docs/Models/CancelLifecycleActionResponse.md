---
id: machine_identities_lifecycle_actions-model-cancel-lifecycle-action-response
title: CancelLifecycleActionResponse
pagination_label: CancelLifecycleActionResponse
sidebar_label: CancelLifecycleActionResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CancelLifecycleActionResponse', 'machine_identities_lifecycle_actions']
slug: /tools/sdk/angular/machine_identities_lifecycle_actions/models/cancel-lifecycle-action-response
tags: ['SDK', 'Software Development Kit', 'CancelLifecycleActionResponse', 'machine_identities_lifecycle_actions']
---

# CancelLifecycleActionResponse

Import this model from the entry point of its package:

```typescript
import { CancelLifecycleActionResponse } from 'sailpoint-angular-sdk/machine_identities_lifecycle_actions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | `string` | Lifecycle request identifier. | [default to undefined]
**status** | `string` | Updated lifecycle request status after cancel acceptance. | [default to undefined]
**action** | `Lifecycleaction` |  | [default to undefined]
**targetId** | `string` | Internal machine identity UUID for the lifecycle target. | [default to undefined]
**resourceId** | **(optional)** `string` | Connector resource id for the lifecycle target, when present. | [default to undefined]

