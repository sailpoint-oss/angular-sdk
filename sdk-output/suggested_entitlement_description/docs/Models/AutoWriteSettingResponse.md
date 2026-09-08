---
id: suggested_entitlement_description-model-auto-write-setting-response
title: AutoWriteSettingResponse
pagination_label: AutoWriteSettingResponse
sidebar_label: AutoWriteSettingResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AutoWriteSettingResponse', 'suggested_entitlement_description']
slug: /tools/sdk/angular/suggested_entitlement_description/models/auto-write-setting-response
tags: ['SDK', 'Software Development Kit', 'AutoWriteSettingResponse', 'suggested_entitlement_description']
---

# AutoWriteSettingResponse

Import this model from the entry point of its package:

```typescript
import { AutoWriteSettingResponse } from 'sailpoint-angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Whether auto-write is currently enabled for the tenant | [default to false]
**includedSourceIds** | **(optional)** `Array<string>` | Source IDs in the allowlist. Empty array means not in allowlist mode. | [default to undefined]
**excludedSourceIds** | **(optional)** `Array<string>` | Source IDs to exclude from auto-write. Always applied. | [default to undefined]
**createdAt** | **(optional)** `string` | When settings were first created | [default to undefined]
**updatedAt** | **(optional)** `string` | When settings were last modified | [default to undefined]

