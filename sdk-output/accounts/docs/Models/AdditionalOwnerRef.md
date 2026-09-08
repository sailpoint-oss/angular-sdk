---
id: accounts-model-additional-owner-ref
title: AdditionalOwnerRef
pagination_label: AdditionalOwnerRef
sidebar_label: AdditionalOwnerRef
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AdditionalOwnerRef', 'accounts']
slug: /tools/sdk/angular/accounts/models/additional-owner-ref
tags: ['SDK', 'Software Development Kit', 'AdditionalOwnerRef', 'accounts']
---

# AdditionalOwnerRef

Import this model from the entry point of its package:

```typescript
import { AdditionalOwnerRef } from '@sailpoint/angular-sdk/accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [default to undefined]
**id** | **(optional)** `string` | ID of the identity or governance group. | [default to undefined]
**name** | **(optional)** `string` | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [default to undefined]

