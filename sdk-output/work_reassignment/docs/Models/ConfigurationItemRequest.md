---
id: work_reassignment-model-configuration-item-request
title: ConfigurationItemRequest
pagination_label: ConfigurationItemRequest
sidebar_label: ConfigurationItemRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ConfigurationItemRequest', 'work_reassignment']
slug: /tools/sdk/angular/work_reassignment/models/configuration-item-request
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemRequest', 'work_reassignment']
---

# ConfigurationItemRequest

Import this model from the entry point of its package:

```typescript
import { ConfigurationItemRequest } from 'sailpoint-angular-sdk/work_reassignment';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassignedFromId** | **(optional)** `string` | The identity id to reassign an item from | [default to undefined]
**reassignedToId** | **(optional)** `string` | The identity id to reassign an item to | [default to undefined]
**configType** | **(optional)** `ConfigTypeEnum` |  | [default to undefined]
**startDate** | **(optional)** `string` | The date from which to start reassigning work items | [default to undefined]
**endDate** | **(optional)** `string` | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [default to undefined]

