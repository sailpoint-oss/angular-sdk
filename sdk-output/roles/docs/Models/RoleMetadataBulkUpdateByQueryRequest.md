---
id: roles-model-role-metadata-bulk-update-by-query-request
title: RoleMetadataBulkUpdateByQueryRequest
pagination_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleMetadataBulkUpdateByQueryRequest', 'roles']
slug: /tools/sdk/angular/roles/models/role-metadata-bulk-update-by-query-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByQueryRequest', 'roles']
---

# RoleMetadataBulkUpdateByQueryRequest

Import this model from the entry point of its package:

```typescript
import { RoleMetadataBulkUpdateByQueryRequest } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `object` | query the identities to be updated | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | `Array<RoleMetadataBulkUpdateByQueryRequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

