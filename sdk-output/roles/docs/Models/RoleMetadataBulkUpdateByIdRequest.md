---
id: roles-model-role-metadata-bulk-update-by-id-request
title: RoleMetadataBulkUpdateByIdRequest
pagination_label: RoleMetadataBulkUpdateByIdRequest
sidebar_label: RoleMetadataBulkUpdateByIdRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleMetadataBulkUpdateByIdRequest', 'roles']
slug: /tools/sdk/angular/roles/models/role-metadata-bulk-update-by-id-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequest', 'roles']
---

# RoleMetadataBulkUpdateByIdRequest

Import this model from the entry point of its package:

```typescript
import { RoleMetadataBulkUpdateByIdRequest } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roles** | `Array<string>` | Roles\' Id to be updated | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | `Array<RoleMetadataBulkUpdateByIdRequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

