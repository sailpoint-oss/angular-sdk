---
id: identities-model-role-assignment-ref
title: RoleAssignmentRef
pagination_label: RoleAssignmentRef
sidebar_label: RoleAssignmentRef
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleAssignmentRef', 'identities']
slug: /tools/sdk/angular/identities/models/role-assignment-ref
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentRef', 'identities']
---

# RoleAssignmentRef

Import this model from the entry point of its package:

```typescript
import { RoleAssignmentRef } from '@sailpoint/angular-sdk/identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Assignment Id | [default to undefined]
**role** | **(optional)** `BaseReferenceDto` |  | [default to undefined]
**addedDate** | **(optional)** `string` | Date that the assignment was added | [default to undefined]
**startDate** | **(optional)** `string` | Date when assignment will be active, if requested with a future date. If null, assignment is active immediately | [default to undefined]
**removeDate** | **(optional)** `string` | Date that the assignment will be removed | [default to undefined]

