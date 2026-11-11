---
id: ui_plugins-model-plugin-slot
title: PluginSlot
pagination_label: PluginSlot
sidebar_label: PluginSlot
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PluginSlot', 'ui_plugins']
slug: /tools/sdk/angular/ui_plugins/models/plugin-slot
tags: ['SDK', 'Software Development Kit', 'PluginSlot', 'ui_plugins']
---

# PluginSlot

Import this model from the entry point of its package:

```typescript
import { PluginSlot } from '@sailpoint/angular-sdk/ui_plugins';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slotId** | `string` | Identifier referencing an entry in the slot registry | [default to undefined]
**requiredCapabilities** | **(optional)** `Array<string>` | SailPoint Identity Security capabilities the user must hold (AND logic) to see this plugin in the slot. Empty means unrestricted. | [default to undefined]
**restrictToUsers** | **(optional)** `Array<string>` | User GUIDs (32-char hex) limiting visibility during development. Empty means no user restriction. | [default to undefined]

