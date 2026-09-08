---
id: suggested_entitlement_description-model-auto-write-setting-patch
title: AutoWriteSettingPatch
pagination_label: AutoWriteSettingPatch
sidebar_label: AutoWriteSettingPatch
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AutoWriteSettingPatch', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/auto-write-setting-patch
tags: ['SDK', 'Software Development Kit', 'AutoWriteSettingPatch', 'suggested_entitlement_description']
---

# AutoWriteSettingPatch

Import this model from the entry point of its package:

```typescript
import { AutoWriteSettingPatch } from 'sailpoint-angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to perform. Only \"replace\" is supported. | [default to undefined]
**path** | `string` | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | [default to undefined]
**value** | `AutoWriteSettingPatchValue` |  | [default to undefined]

