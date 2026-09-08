---
id: sources-model-approval-config-timeout-config
title: ApprovalConfigTimeoutConfig
pagination_label: ApprovalConfigTimeoutConfig
sidebar_label: ApprovalConfigTimeoutConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ApprovalConfigTimeoutConfig', 'sources']
slug: /tools/sdk/angular/sources/models/approval-config-timeout-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigTimeoutConfig', 'sources']
---

# ApprovalConfigTimeoutConfig

Import this model from the entry point of its package:

```typescript
import { ApprovalConfigTimeoutConfig } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if timeout is enabled. | [default to false]
**daysUntilTimeout** | **(optional)** `number` | Number of days until approval request times out. Max value is 90. | [default to undefined]
**timeoutResult** | **(optional)** `string` | Result of timeout. | [default to undefined]

