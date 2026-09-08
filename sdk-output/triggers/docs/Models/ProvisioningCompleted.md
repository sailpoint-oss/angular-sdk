---
id: triggers-model-provisioning-completed
title: ProvisioningCompleted
pagination_label: ProvisioningCompleted
sidebar_label: ProvisioningCompleted
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ProvisioningCompleted', 'triggers']
slug: /tools/sdk/angular/triggers/models/provisioning-completed
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompleted', 'triggers']
---

# ProvisioningCompleted

Import this model from the entry point of its package:

```typescript
import { ProvisioningCompleted } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingNumber** | `string` | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [default to undefined]
**sources** | `string` | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [default to undefined]
**action** | **(optional)** `string` | Origin of where the provisioning request came from. | [default to undefined]
**errors** | **(optional)** `Array<string>` | A list of any accumulated error messages that occurred during provisioning. | [default to undefined]
**warnings** | **(optional)** `Array<string>` | A list of any accumulated warning messages that occurred during provisioning. | [default to undefined]
**recipient** | `ProvisioningCompletedRecipient` |  | [default to undefined]
**requester** | **(optional)** `ProvisioningCompletedRequester` |  | [default to undefined]
**accountRequests** | `Array<ProvisioningCompletedAccountRequestsInner>` | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | [default to undefined]

