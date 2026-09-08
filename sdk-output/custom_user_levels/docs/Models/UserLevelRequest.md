---
id: custom_user_levels-model-user-level-request
title: UserLevelRequest
pagination_label: UserLevelRequest
sidebar_label: UserLevelRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'UserLevelRequest', 'custom_user_levels']
slug: /tools/sdk/angular/custom_user_levels/models/user-level-request
tags: ['SDK', 'Software Development Kit', 'UserLevelRequest', 'custom_user_levels']
---

# UserLevelRequest

Import this model from the entry point of its package:

```typescript
import { UserLevelRequest } from '@sailpoint/angular-sdk/custom_user_levels';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the user level. | [default to undefined]
**description** | `string` | A brief description of the user level. | [default to undefined]
**owner** | `PublicIdentity` |  | [default to undefined]
**rightSets** | **(optional)** `Array<string>` | A list of rights associated with the user level. | [default to undefined]

