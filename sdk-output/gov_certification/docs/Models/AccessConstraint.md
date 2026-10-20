---
id: gov_certification-model-access-constraint
title: AccessConstraint
pagination_label: AccessConstraint
sidebar_label: AccessConstraint
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessConstraint', 'gov_certification']
slug: /tools/sdk/angular/gov_certification/models/access-constraint
tags: ['SDK', 'Software Development Kit', 'AccessConstraint', 'gov_certification']
---

# AccessConstraint

Import this model from the entry point of its package:

```typescript
import { AccessConstraint } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Type of Access | [default to undefined]
**ids** | **(optional)** `Array<string>` | Must be set only if operator is SELECTED. | [default to undefined]
**operator** | `string` | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [default to undefined]

