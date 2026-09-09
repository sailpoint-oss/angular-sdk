---
id: access_profiles-model-accessprofilemetadatabulkupdatebyidrequest
title: Accessprofilemetadatabulkupdatebyidrequest
pagination_label: Accessprofilemetadatabulkupdatebyidrequest
sidebar_label: Accessprofilemetadatabulkupdatebyidrequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Accessprofilemetadatabulkupdatebyidrequest', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/accessprofilemetadatabulkupdatebyidrequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilemetadatabulkupdatebyidrequest', 'access_profiles']
---

# Accessprofilemetadatabulkupdatebyidrequest

Import this model from the entry point of its package:

```typescript
import { Accessprofilemetadatabulkupdatebyidrequest } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfiles** | `Array<string>` | The IDs of the access profiles to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessprofilemetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

