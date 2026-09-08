---
id: password_management-model-password-info
title: PasswordInfo
pagination_label: PasswordInfo
sidebar_label: PasswordInfo
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PasswordInfo', 'password_management']
slug: /tools/sdk/angular/password_management/models/password-info
tags: ['SDK', 'Software Development Kit', 'PasswordInfo', 'password_management']
---

# PasswordInfo

Import this model from the entry point of its package:

```typescript
import { PasswordInfo } from 'sailpoint-angular-sdk/password_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | Identity ID | [default to undefined]
**sourceId** | **(optional)** `string` | source ID | [default to undefined]
**publicKeyId** | **(optional)** `string` | public key ID | [default to undefined]
**publicKey** | **(optional)** `string` | User\'s public key with Base64 encoding | [default to undefined]
**accounts** | **(optional)** `Array<PasswordInfoAccount>` | Account info related to queried identity and source | [default to undefined]
**policies** | **(optional)** `Array<string>` | Password constraints | [default to undefined]

