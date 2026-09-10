---
id: data_access_security-model-createidentitycollectorrequest
title: Createidentitycollectorrequest
pagination_label: Createidentitycollectorrequest
sidebar_label: Createidentitycollectorrequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Createidentitycollectorrequest', 'data_access_security']
slug: /tools/sdk/angular/data_access_security/models/createidentitycollectorrequest
tags: ['SDK', 'Software Development Kit', 'Createidentitycollectorrequest', 'data_access_security']
---

# Createidentitycollectorrequest

Import this model from the entry point of its package:

```typescript
import { Createidentitycollectorrequest } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The display name for the new identity collector. Must be unique within the tenant. | [default to undefined]
**sourceId** | `string` | The identifier of the source to create the identity collector for, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. The identity collector type is derived from this source. | [default to undefined]
**users** | **(optional)** `Identitycollectorcollectionsettings` |  | [default to undefined]
**groups** | **(optional)** `Identitycollectorcollectionsettings` |  | [default to undefined]

