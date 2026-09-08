---
id: suggested_entitlement_description-model-auto-write-setting
title: AutoWriteSetting
pagination_label: AutoWriteSetting
sidebar_label: AutoWriteSetting
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AutoWriteSetting', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/auto-write-setting
tags: ['SDK', 'Software Development Kit', 'AutoWriteSetting', 'suggested_entitlement_description']
---

# AutoWriteSetting

Import this model from the entry point of its package:

```typescript
import { AutoWriteSetting } from '@sailpoint/angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Whether auto-write is currently enabled for the tenant | [default to false]
**includedSourceIds** | **(optional)** `Array<string>` | Source IDs in the allowlist. Empty array means not in allowlist mode. | [default to undefined]
**excludedSourceIds** | **(optional)** `Array<string>` | Source IDs to exclude from auto-write. Always applied. | [default to undefined]

