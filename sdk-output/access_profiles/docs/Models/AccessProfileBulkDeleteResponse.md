---
id: access_profiles-model-access-profile-bulk-delete-response
title: AccessProfileBulkDeleteResponse
pagination_label: AccessProfileBulkDeleteResponse
sidebar_label: AccessProfileBulkDeleteResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessProfileBulkDeleteResponse', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/access-profile-bulk-delete-response
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkDeleteResponse', 'access_profiles']
---

# AccessProfileBulkDeleteResponse

Import this model from the entry point of its package:

```typescript
import { AccessProfileBulkDeleteResponse } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **(optional)** `string` | ID of the task which is executing the bulk deletion. This can be passed to the **_/task-status** API to track status. | [default to undefined]
**pending** | **(optional)** `Array<string>` | List of IDs of Access Profiles which are pending deletion. | [default to undefined]
**inUse** | **(optional)** `Array<AccessProfileUsage>` | List of usages of Access Profiles targeted for deletion. | [default to undefined]

