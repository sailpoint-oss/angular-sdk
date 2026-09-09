---
id: entitlements-model-entitlementmetadatabulkupdatebyidrequest
title: Entitlementmetadatabulkupdatebyidrequest
pagination_label: Entitlementmetadatabulkupdatebyidrequest
sidebar_label: Entitlementmetadatabulkupdatebyidrequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Entitlementmetadatabulkupdatebyidrequest', 'entitlements']
slug: /tools/sdk/angular/entitlements/models/entitlementmetadatabulkupdatebyidrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementmetadatabulkupdatebyidrequest', 'entitlements']
---

# Entitlementmetadatabulkupdatebyidrequest

Import this model from the entry point of its package:

```typescript
import { Entitlementmetadatabulkupdatebyidrequest } from '@sailpoint/angular-sdk/entitlements';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | `Array<string>` | The IDs of the entitlements to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [default to undefined]
**values** | `Array<EntitlementmetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

