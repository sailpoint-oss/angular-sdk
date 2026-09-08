---
id: password_management-model-password-digit-token-reset
title: PasswordDigitTokenReset
pagination_label: PasswordDigitTokenReset
sidebar_label: PasswordDigitTokenReset
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PasswordDigitTokenReset', 'password_management']
slug: /tools/sdk/angular/password_management/models/password-digit-token-reset
tags: ['SDK', 'Software Development Kit', 'PasswordDigitTokenReset', 'password_management']
---

# PasswordDigitTokenReset

Import this model from the entry point of its package:

```typescript
import { PasswordDigitTokenReset } from '@sailpoint/angular-sdk/password_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | `string` | The uid of the user requested for digit token | [default to undefined]
**length** | **(optional)** `number` | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [default to undefined]
**durationMinutes** | **(optional)** `number` | The time to live for the digit token in minutes. The default value is 5 minutes. | [default to undefined]

