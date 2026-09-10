---
id: access_profiles-model-access-profile-metadata-bulk-update-by-id-request-values-inner
title: AccessProfileMetadataBulkUpdateByIdRequestValuesInner
pagination_label: AccessProfileMetadataBulkUpdateByIdRequestValuesInner
sidebar_label: AccessProfileMetadataBulkUpdateByIdRequestValuesInner
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessProfileMetadataBulkUpdateByIdRequestValuesInner', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/access-profile-metadata-bulk-update-by-id-request-values-inner
tags: ['SDK', 'Software Development Kit', 'AccessProfileMetadataBulkUpdateByIdRequestValuesInner', 'access_profiles']
---

# AccessProfileMetadataBulkUpdateByIdRequestValuesInner

Import this model from the entry point of its package:

```typescript
import { AccessProfileMetadataBulkUpdateByIdRequestValuesInner } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | `string` | The technical name of the metadata attribute. | [default to undefined]
**values** | `Array<string>` | The values of the attribute to be updated. | [default to undefined]
**objectType** | **(optional)** `string` | The type of the metadata attribute. Set to `custom` for custom metadata attributes, which require a suite license. | [default to undefined]

