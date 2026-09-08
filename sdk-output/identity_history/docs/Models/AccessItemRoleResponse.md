---
id: identity_history-model-access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessItemRoleResponse', 'identity_history']
slug: /tools/sdk/angular/identity_history/models/access-item-role-response
tags: ['SDK', 'Software Development Kit', 'AccessItemRoleResponse', 'identity_history']
---

# AccessItemRoleResponse

Import this model from the entry point of its package:

```typescript
import { AccessItemRoleResponse } from 'sailpoint-angular-sdk/identity_history';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | the access item id | [default to undefined]
**accessType** | **(optional)** `string` | the access item type. role in this case | [default to undefined]
**displayName** | **(optional)** `string` | the role display name | [default to undefined]
**sourceName** | **(optional)** `string` | the associated source name if it exists | [default to undefined]
**description** | **(optional)** `string` | the description for the role | [default to undefined]
**startDate** | **(optional)** `string` | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [default to undefined]
**removeDate** | **(optional)** `string` | the date the role is no longer assigned to the specified identity | [default to undefined]
**revocable** | `boolean` | indicates whether the role is revocable | [default to undefined]

