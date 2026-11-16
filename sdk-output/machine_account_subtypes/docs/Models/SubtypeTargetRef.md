---
id: machine_account_subtypes-model-subtype-target-ref
title: SubtypeTargetRef
pagination_label: SubtypeTargetRef
sidebar_label: SubtypeTargetRef
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SubtypeTargetRef', 'machine_account_subtypes']
slug: /tools/sdk/angular/machine_account_subtypes/models/subtype-target-ref
tags: ['SDK', 'Software Development Kit', 'SubtypeTargetRef', 'machine_account_subtypes']
---

# SubtypeTargetRef

Import this model from the entry point of its package:

```typescript
import { SubtypeTargetRef } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [default to undefined]
**id** | **(optional)** `string` | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [default to undefined]
**name** | **(optional)** `string` | Human-readable target name. Falls back to `id` when a display name is not available. | [default to undefined]

