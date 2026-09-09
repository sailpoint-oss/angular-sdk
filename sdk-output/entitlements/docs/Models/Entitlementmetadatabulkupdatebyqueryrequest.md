---
id: entitlements-model-entitlementmetadatabulkupdatebyqueryrequest
title: Entitlementmetadatabulkupdatebyqueryrequest
pagination_label: Entitlementmetadatabulkupdatebyqueryrequest
sidebar_label: Entitlementmetadatabulkupdatebyqueryrequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Entitlementmetadatabulkupdatebyqueryrequest', 'entitlements']
slug: /tools/sdk/angular/entitlements/models/entitlementmetadatabulkupdatebyqueryrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementmetadatabulkupdatebyqueryrequest', 'entitlements']
---

# Entitlementmetadatabulkupdatebyqueryrequest

Import this model from the entry point of its package:

```typescript
import { Entitlementmetadatabulkupdatebyqueryrequest } from '@sailpoint/angular-sdk/entitlements';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `object` | The search query selecting the entitlements to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [default to undefined]
**values** | `Array<EntitlementmetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

