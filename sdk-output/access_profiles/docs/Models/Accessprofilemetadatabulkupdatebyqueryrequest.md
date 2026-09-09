---
id: access_profiles-model-accessprofilemetadatabulkupdatebyqueryrequest
title: Accessprofilemetadatabulkupdatebyqueryrequest
pagination_label: Accessprofilemetadatabulkupdatebyqueryrequest
sidebar_label: Accessprofilemetadatabulkupdatebyqueryrequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Accessprofilemetadatabulkupdatebyqueryrequest', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/accessprofilemetadatabulkupdatebyqueryrequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilemetadatabulkupdatebyqueryrequest', 'access_profiles']
---

# Accessprofilemetadatabulkupdatebyqueryrequest

Import this model from the entry point of its package:

```typescript
import { Accessprofilemetadatabulkupdatebyqueryrequest } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `object` | The search query selecting the access profiles to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessprofilemetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

