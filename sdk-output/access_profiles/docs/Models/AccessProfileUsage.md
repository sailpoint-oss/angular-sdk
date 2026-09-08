---
id: access_profiles-model-access-profile-usage
title: AccessProfileUsage
pagination_label: AccessProfileUsage
sidebar_label: AccessProfileUsage
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessProfileUsage', 'access_profiles']
slug: /tools/sdk/angular/access_profiles/models/access-profile-usage
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsage', 'access_profiles']
---

# AccessProfileUsage

Import this model from the entry point of its package:

```typescript
import { AccessProfileUsage } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfileId** | **(optional)** `string` | ID of the Access Profile that is in use | [default to undefined]
**usedBy** | **(optional)** `Array<AccessProfileUsageUsedByInner>` | List of references to objects which are using the indicated Access Profile | [default to undefined]

