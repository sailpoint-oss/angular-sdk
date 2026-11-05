---
id: access_profiles-model-access-profile-list-filter-v2
title: AccessProfileListFilterV2
pagination_label: AccessProfileListFilterV2
sidebar_label: AccessProfileListFilterV2
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessProfileListFilterV2', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/access-profile-list-filter-v2
tags: ['SDK', 'Software Development Kit', 'AccessProfileListFilterV2', 'access_profiles']
---

# AccessProfileListFilterV2

Import this model from the entry point of its package:

```typescript
import { AccessProfileListFilterV2 } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **(optional)** `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  **dimensional**: *eq*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [default to undefined]
**ammKeyValues** | **(optional)** `Array<AccessProfileListFilterDTOAmmKeyValuesInner>` | The Access Model Metadata attributes and values used to filter the results. | [default to undefined]

