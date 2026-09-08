---
id: mfa_configuration-model-mfa-okta-config
title: MfaOktaConfig
pagination_label: MfaOktaConfig
sidebar_label: MfaOktaConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MfaOktaConfig', 'mfa_configuration']
slug: /tools/sdk/angular/mfa_configuration/models/mfa-okta-config
tags: ['SDK', 'Software Development Kit', 'MfaOktaConfig', 'mfa_configuration']
---

# MfaOktaConfig

Import this model from the entry point of its package:

```typescript
import { MfaOktaConfig } from 'sailpoint-angular-sdk/mfa_configuration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfaMethod** | **(optional)** `string` | Mfa method name | [default to undefined]
**enabled** | **(optional)** `boolean` | If MFA method is enabled. | [default to false]
**host** | **(optional)** `string` | The server host name or IP address of the MFA provider. | [default to undefined]
**accessKey** | **(optional)** `string` | The secret key for authenticating requests to the MFA provider. | [default to undefined]
**identityAttribute** | **(optional)** `string` | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [default to undefined]

