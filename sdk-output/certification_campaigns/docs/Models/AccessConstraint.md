---
id: certification_campaigns-model-access-constraint
title: AccessConstraint
pagination_label: AccessConstraint
sidebar_label: AccessConstraint
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessConstraint', 'certification_campaigns']
slug: /tools/sdk/angular/certification_campaigns/models/access-constraint
tags: ['SDK', 'Software Development Kit', 'AccessConstraint', 'certification_campaigns']
---

# AccessConstraint

Import this model from the entry point of its package:

```typescript
import { AccessConstraint } from 'sailpoint-angular-sdk/certification_campaigns';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Type of Access | [default to undefined]
**ids** | **(optional)** `Array<string>` | Must be set only if operator is SELECTED. | [default to undefined]
**operator** | `string` | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [default to undefined]

