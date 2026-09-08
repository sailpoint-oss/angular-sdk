---
id: iai_common_access-model-common-access-response
title: CommonAccessResponse
pagination_label: CommonAccessResponse
sidebar_label: CommonAccessResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CommonAccessResponse', 'iai_common_access']
slug: /tools/sdk/angular/iai_common_access/models/common-access-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessResponse', 'iai_common_access']
---

# CommonAccessResponse

Import this model from the entry point of its package:

```typescript
import { CommonAccessResponse } from 'sailpoint-angular-sdk/iai_common_access';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique ID of the common access item | [default to undefined]
**access** | **(optional)** `CommonAccessItemAccess` |  | [default to undefined]
**status** | **(optional)** `string` | CONFIRMED or DENIED | [default to undefined]
**commonAccessType** | **(optional)** `string` |  | [default to undefined]
**lastUpdated** | **(optional)** `string` |  | [readonly] [default to undefined]
**reviewedByUser** | **(optional)** `boolean` | true if user has confirmed or denied status | [default to undefined]
**lastReviewed** | **(optional)** `string` |  | [readonly] [default to undefined]
**createdByUser** | **(optional)** `boolean` |  | [default to false]

