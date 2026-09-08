---
id: data_segmentation-model-segment-membership
title: SegmentMembership
pagination_label: SegmentMembership
sidebar_label: SegmentMembership
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SegmentMembership', 'data_segmentation']
slug: /tools/sdk/angular/data_segmentation/models/segment-membership
tags: ['SDK', 'Software Development Kit', 'SegmentMembership', 'data_segmentation']
---

# SegmentMembership

Import this model from the entry point of its package:

```typescript
import { SegmentMembership } from 'sailpoint-angular-sdk/data_segmentation';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segments** | **(optional)** `Array<string>` | List of segment ids that the identity is associated with. | [default to undefined]
**allAccessScopes** | **(optional)** `Array<ScopeType>` | They type of scopes that are assigned to the identity. | [default to undefined]
**refreshBy** | **(optional)** `string` | Date time string that lets you know when the membership data is going to be refreshed. | [default to undefined]

