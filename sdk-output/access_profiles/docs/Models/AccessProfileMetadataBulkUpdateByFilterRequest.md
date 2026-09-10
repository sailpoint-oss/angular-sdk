---
id: access_profiles-model-access-profile-metadata-bulk-update-by-filter-request
title: AccessProfileMetadataBulkUpdateByFilterRequest
pagination_label: AccessProfileMetadataBulkUpdateByFilterRequest
sidebar_label: AccessProfileMetadataBulkUpdateByFilterRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessProfileMetadataBulkUpdateByFilterRequest', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/access-profile-metadata-bulk-update-by-filter-request
tags: ['SDK', 'Software Development Kit', 'AccessProfileMetadataBulkUpdateByFilterRequest', 'access_profiles']
---

# AccessProfileMetadataBulkUpdateByFilterRequest

Import this model from the entry point of its package:

```typescript
import { AccessProfileMetadataBulkUpdateByFilterRequest } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessProfileMetadataBulkUpdateByIdRequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

