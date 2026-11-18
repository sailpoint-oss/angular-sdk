---
id: machine_identities-model-machineidentityagentdiscoveredcounts
title: Machineidentityagentdiscoveredcounts
pagination_label: Machineidentityagentdiscoveredcounts
sidebar_label: Machineidentityagentdiscoveredcounts
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Machineidentityagentdiscoveredcounts', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/machineidentityagentdiscoveredcounts
tags: ['SDK', 'Software Development Kit', 'Machineidentityagentdiscoveredcounts', 'machine_identities']
---

# Machineidentityagentdiscoveredcounts

Import this model from the entry point of its package:

```typescript
import { Machineidentityagentdiscoveredcounts } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **(optional)** `number` | Number of machine identities created within the window. | [default to undefined]
**windowDays** | **(optional)** `number` | Length of the window, in days. | [default to undefined]
**from** | **(optional)** `string` | Start of the window, in UTC, and the exact cutoff used for `count`. Identities created at or after this time are included. | [default to undefined]

