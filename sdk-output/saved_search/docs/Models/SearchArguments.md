---
id: saved_search-model-search-arguments
title: SearchArguments
pagination_label: SearchArguments
sidebar_label: SearchArguments
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SearchArguments', 'saved_search']
slug: /tools/sdk/angular/saved_search/models/search-arguments
tags: ['SDK', 'Software Development Kit', 'SearchArguments', 'saved_search']
---

# SearchArguments

Import this model from the entry point of its package:

```typescript
import { SearchArguments } from '@sailpoint/angular-sdk/saved_search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleId** | **(optional)** `string` | The ID of the scheduled search that triggered the saved search execution.  | [default to undefined]
**owner** | **(optional)** `TypedReference` | The owner of the scheduled search being tested.  | [default to undefined]
**recipients** | **(optional)** `Array<TypedReference>` | The email recipients of the scheduled search being tested.  | [default to undefined]

