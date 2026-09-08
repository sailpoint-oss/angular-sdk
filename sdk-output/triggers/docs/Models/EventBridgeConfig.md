---
id: triggers-model-event-bridge-config
title: EventBridgeConfig
pagination_label: EventBridgeConfig
sidebar_label: EventBridgeConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'EventBridgeConfig', 'triggers']
slug: /tools/sdk/angular/triggers/models/event-bridge-config
tags: ['SDK', 'Software Development Kit', 'EventBridgeConfig', 'triggers']
---

# EventBridgeConfig

Import this model from the entry point of its package:

```typescript
import { EventBridgeConfig } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awsAccount** | `string` | AWS Account Number (12-digit number) that has the EventBridge Partner Event Source Resource. | [default to undefined]
**awsRegion** | `string` | AWS Region that has the EventBridge Partner Event Source Resource. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a full list of available values. | [default to undefined]

