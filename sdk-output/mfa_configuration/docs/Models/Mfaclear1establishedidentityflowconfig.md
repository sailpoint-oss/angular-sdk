---
id: mfa_configuration-model-mfaclear1establishedidentityflowconfig
title: Mfaclear1establishedidentityflowconfig
pagination_label: Mfaclear1establishedidentityflowconfig
sidebar_label: Mfaclear1establishedidentityflowconfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Mfaclear1establishedidentityflowconfig', 'mfa_configuration']
slug: /tools/sdk/angular/mfa_configuration/models/mfaclear1establishedidentityflowconfig
tags: ['SDK', 'Software Development Kit', 'Mfaclear1establishedidentityflowconfig', 'mfa_configuration']
---

# Mfaclear1establishedidentityflowconfig

Import this model from the entry point of its package:

```typescript
import { Mfaclear1establishedidentityflowconfig } from '@sailpoint/angular-sdk/mfa_configuration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | If the established identity flow is enabled for the CLEAR1 MFA method. | [default to false]
**projectId** | **(optional)** `string` | The ID of the CLEAR1 project used for the established identity flow. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [default to undefined]
**userProfileMatchingAttributes** | **(optional)** `Mfaclear1userprofilematchingattributes` |  | [default to undefined]

