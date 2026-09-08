---
id: password_configuration-model-password-org-config
title: PasswordOrgConfig
pagination_label: PasswordOrgConfig
sidebar_label: PasswordOrgConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PasswordOrgConfig', 'password_configuration']
slug: /tools/sdk/angular/password_configuration/models/password-org-config
tags: ['SDK', 'Software Development Kit', 'PasswordOrgConfig', 'password_configuration']
---

# PasswordOrgConfig

Import this model from the entry point of its package:

```typescript
import { PasswordOrgConfig } from 'sailpoint-angular-sdk/password_configuration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customInstructionsEnabled** | **(optional)** `boolean` | Indicator whether custom password instructions feature is enabled. The default value is false. | [default to false]
**digitTokenEnabled** | **(optional)** `boolean` | Indicator whether \"digit token\" feature is enabled. The default value is false. | [default to false]
**digitTokenDurationMinutes** | **(optional)** `number` | The duration of \"digit token\" in minutes. The default value is 5. | [default to 5]
**digitTokenLength** | **(optional)** `number` | The length of \"digit token\". The default value is 6. | [default to 6]

