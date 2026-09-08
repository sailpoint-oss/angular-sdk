---
id: tagged_objects-model-bulk-add-tagged-object
title: BulkAddTaggedObject
pagination_label: BulkAddTaggedObject
sidebar_label: BulkAddTaggedObject
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BulkAddTaggedObject', 'tagged_objects']
slug: /tools/sdk/angular/tagged_objects/models/bulk-add-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkAddTaggedObject', 'tagged_objects']
---

# BulkAddTaggedObject

Import this model from the entry point of its package:

```typescript
import { BulkAddTaggedObject } from '@sailpoint/angular-sdk/tagged_objects';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectRefs** | **(optional)** `Array<TaggedObjectDto>` |  | [default to undefined]
**tags** | **(optional)** `Array<string>` | Label to be applied to an Object | [default to undefined]
**operation** | **(optional)** `string` | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [default to OperationEnum_Append]

