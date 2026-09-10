---
id: access_profiles-model-access-profile-list-filter-dto
title: AccessProfileListFilterDTO
pagination_label: AccessProfileListFilterDTO
sidebar_label: AccessProfileListFilterDTO
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessProfileListFilterDTO', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/access-profile-list-filter-dto
tags: ['SDK', 'Software Development Kit', 'AccessProfileListFilterDTO', 'access_profiles']
---

# AccessProfileListFilterDTO

Import this model from the entry point of its package:

```typescript
import { AccessProfileListFilterDTO } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **(optional)** `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | [default to undefined]
**ammKeyValues** | **(optional)** `Array<AccessProfileListFilterDTOAmmKeyValuesInner>` | The Access Model Metadata attributes and values used to filter the results. | [default to undefined]

