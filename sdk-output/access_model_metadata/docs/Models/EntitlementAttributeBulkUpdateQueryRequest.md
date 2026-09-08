---
id: access_model_metadata-model-entitlement-attribute-bulk-update-query-request
title: EntitlementAttributeBulkUpdateQueryRequest
pagination_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'EntitlementAttributeBulkUpdateQueryRequest', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/models/entitlement-attribute-bulk-update-query-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateQueryRequest', 'access_model_metadata']
---

# EntitlementAttributeBulkUpdateQueryRequest

Import this model from the entry point of its package:

```typescript
import { EntitlementAttributeBulkUpdateQueryRequest } from 'sailpoint-angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **(optional)** `Search` |  | [default to undefined]
**operation** | **(optional)** `string` | Operation to perform on the attributes in the bulk update request. | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | **(optional)** `Array<BulkUpdateAMMKeyValueInner>` | The metadata to be updated, including attribute and values. | [default to undefined]

