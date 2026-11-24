---
id: human_account_subtypes-model-human-account-subtype
title: HumanAccountSubtype
pagination_label: HumanAccountSubtype
sidebar_label: HumanAccountSubtype
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'HumanAccountSubtype', 'human_account_subtypes']
slug: /tools/sdk/angular/human_account_subtypes/models/human-account-subtype
tags: ['SDK', 'Software Development Kit', 'HumanAccountSubtype', 'human_account_subtypes']
---

# HumanAccountSubtype

Import this model from the entry point of its package:

```typescript
import { HumanAccountSubtype } from '@sailpoint/angular-sdk/human_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the subtype. | [readonly] [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source the subtype belongs to. | [readonly] [default to undefined]
**technicalName** | **(optional)** `string` | Technical name of the subtype. | [default to undefined]
**displayName** | **(optional)** `string` | Display name of the subtype. | [default to undefined]
**description** | **(optional)** `string` | Description of the subtype. | [default to undefined]
**entityType** | **(optional)** `string` | Entity type the subtype applies to. Human account subtypes apply to accounts. | [readonly] [default to undefined]
**_default** | **(optional)** `boolean` | Whether this subtype is the default human account subtype of the source. | [default to false]
**systemManaged** | **(optional)** `boolean` | Indicates if the subtype is managed by the system. Read-only. | [readonly] [default to false]
**created** | **(optional)** `string` | Creation timestamp. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modified timestamp. | [readonly] [default to undefined]

