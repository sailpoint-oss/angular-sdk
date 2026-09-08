---
id: intelligence-model-responseactionaccepted
title: Responseactionaccepted
pagination_label: Responseactionaccepted
sidebar_label: Responseactionaccepted
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Responseactionaccepted', 'intelligence']
slug: /tools/sdk/angular/intelligence/models/responseactionaccepted
tags: ['SDK', 'Software Development Kit', 'Responseactionaccepted', 'intelligence']
---

# Responseactionaccepted

Import this model from the entry point of its package:

```typescript
import { Responseactionaccepted } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | `string` | Tracking handle and correlation id for the response action. | [default to undefined]
**status** | `string` | Aggregate status of the response action. SUBMITTED at creation (registered; no correlated workflow execution observed yet). | [default to undefined]
**statusUrl** | `string` | Relative URL to poll for the current status of the response action. | [default to undefined]

