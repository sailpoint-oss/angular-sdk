---
id: machine_account_subtypes-model-subtype-target
title: SubtypeTarget
pagination_label: SubtypeTarget
sidebar_label: SubtypeTarget
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SubtypeTarget', 'machine_account_subtypes']
slug: /tools/sdk/angular/machine_account_subtypes/models/subtype-target
tags: ['SDK', 'Software Development Kit', 'SubtypeTarget', 'machine_account_subtypes']
---

# SubtypeTarget

Import this model from the entry point of its package:

```typescript
import { SubtypeTarget } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [default to undefined]
**id** | **(optional)** `string` | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [default to undefined]
**name** | **(optional)** `string` | Human-readable target name. Falls back to `id` when a display name is not available. | [default to undefined]
**supportsProvisioning** | **(optional)** `boolean` | Whether the target can provision accounts. `false` when the target does not support provisioning. | [default to false]

