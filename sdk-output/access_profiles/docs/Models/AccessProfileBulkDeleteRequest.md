---
id: access_profiles-model-access-profile-bulk-delete-request
title: AccessProfileBulkDeleteRequest
pagination_label: AccessProfileBulkDeleteRequest
sidebar_label: AccessProfileBulkDeleteRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessProfileBulkDeleteRequest', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/access-profile-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkDeleteRequest', 'access_profiles']
---

# AccessProfileBulkDeleteRequest

Import this model from the entry point of its package:

```typescript
import { AccessProfileBulkDeleteRequest } from 'sailpoint-angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfileIds** | **(optional)** `Array<string>` | List of IDs of Access Profiles to be deleted. | [default to undefined]
**bestEffortOnly** | **(optional)** `boolean` | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [default to undefined]

