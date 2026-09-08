---
id: password_management-model-password-status
title: PasswordStatus
pagination_label: PasswordStatus
sidebar_label: PasswordStatus
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PasswordStatus', 'password_management']
slug: /tools/sdk/angular/password_management/models/password-status
tags: ['SDK', 'Software Development Kit', 'PasswordStatus', 'password_management']
---

# PasswordStatus

Import this model from the entry point of its package:

```typescript
import { PasswordStatus } from 'sailpoint-angular-sdk/password_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **(optional)** `string` | The password change request ID | [default to undefined]
**state** | **(optional)** `string` | Password change state | [default to undefined]
**errors** | **(optional)** `Array<string>` | The errors during the password change request | [default to undefined]
**sourceIds** | **(optional)** `Array<string>` | List of source IDs in the password change request | [default to undefined]

