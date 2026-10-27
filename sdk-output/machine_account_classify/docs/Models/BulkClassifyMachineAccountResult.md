---
id: machine_account_classify-model-bulk-classify-machine-account-result
title: BulkClassifyMachineAccountResult
pagination_label: BulkClassifyMachineAccountResult
sidebar_label: BulkClassifyMachineAccountResult
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BulkClassifyMachineAccountResult', 'machine_account_classify']
slug: /tools/sdk/angular/machine_account_classify/models/bulk-classify-machine-account-result
tags: ['SDK', 'Software Development Kit', 'BulkClassifyMachineAccountResult', 'machine_account_classify']
---

# BulkClassifyMachineAccountResult

Import this model from the entry point of its package:

```typescript
import { BulkClassifyMachineAccountResult } from '@sailpoint/angular-sdk/machine_account_classify';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Account ID from the request. | [default to undefined]
**status** | **(optional)** `number` | HTTP status code for this account. `200` means the account was classified, `404` means the account was not found, and other codes describe why classification failed. | [default to undefined]
**isMachine** | **(optional)** `boolean` | Indicates if the account is classified as machine. `false` when classification did not succeed. | [default to false]
**message** | **(optional)** `string` | Result message for this account. | [default to undefined]

