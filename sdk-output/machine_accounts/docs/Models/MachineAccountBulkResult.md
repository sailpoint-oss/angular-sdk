---
id: machine_accounts-model-machine-account-bulk-result
title: MachineAccountBulkResult
pagination_label: MachineAccountBulkResult
sidebar_label: MachineAccountBulkResult
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MachineAccountBulkResult', 'machine_accounts']
slug: /tools/sdk/angular/machine_accounts/models/machine-account-bulk-result
tags: ['SDK', 'Software Development Kit', 'MachineAccountBulkResult', 'machine_accounts']
---

# MachineAccountBulkResult

Import this model from the entry point of its package:

```typescript
import { MachineAccountBulkResult } from '@sailpoint/angular-sdk/machine_accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the machine account this result applies to. | [default to undefined]
**status** | **(optional)** `number` | HTTP-style status code for this machine account. `200` means the operation succeeded or was queued. Other values, such as `400`, `404` or `500`, describe why it failed. | [default to undefined]
**message** | **(optional)** `string` | A message that describes the outcome for this machine account. | [default to undefined]

