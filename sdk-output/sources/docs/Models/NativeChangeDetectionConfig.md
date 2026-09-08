---
id: sources-model-native-change-detection-config
title: NativeChangeDetectionConfig
pagination_label: NativeChangeDetectionConfig
sidebar_label: NativeChangeDetectionConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'NativeChangeDetectionConfig', 'sources']
slug: /tools/sdk/angular/sources/models/native-change-detection-config
tags: ['SDK', 'Software Development Kit', 'NativeChangeDetectionConfig', 'sources']
---

# NativeChangeDetectionConfig

Import this model from the entry point of its package:

```typescript
import { NativeChangeDetectionConfig } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | A flag indicating if Native Change Detection is enabled for a source. | [default to false]
**operations** | **(optional)** `Array<string>` | Operation types for which Native Change Detection is enabled for a source. | [default to undefined]
**allEntitlements** | **(optional)** `boolean` | A flag indicating that all entitlements participate in Native Change Detection. | [default to false]
**allNonEntitlementAttributes** | **(optional)** `boolean` | A flag indicating that all non-entitlement account attributes participate in Native Change Detection. | [default to false]
**selectedEntitlements** | **(optional)** `Array<string>` | If allEntitlements flag is off this field lists entitlements that participate in Native Change Detection. | [default to undefined]
**selectedNonEntitlementAttributes** | **(optional)** `Array<string>` | If allNonEntitlementAttributes flag is off this field lists non-entitlement account attributes that participate in Native Change Detection. | [default to undefined]

