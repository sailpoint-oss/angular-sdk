---
id: access_model_metadata-model-entitlement-attribute-bulk-update-ids-request
title: EntitlementAttributeBulkUpdateIdsRequest
pagination_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'EntitlementAttributeBulkUpdateIdsRequest', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/models/entitlement-attribute-bulk-update-ids-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateIdsRequest', 'access_model_metadata']
---

# EntitlementAttributeBulkUpdateIdsRequest

Import this model from the entry point of its package:

```typescript
import { EntitlementAttributeBulkUpdateIdsRequest } from '@sailpoint/angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **(optional)** `Array<string>` | List of entitlement IDs to update. | [default to undefined]
**operation** | **(optional)** `string` | Operation to perform on the attributes in the bulk update request. | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | **(optional)** `Array<BulkUpdateAMMKeyValueInner>` | The metadata to be updated, including attribute and values. | [default to undefined]

