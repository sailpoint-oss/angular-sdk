---
id: oauth_clients-model-error-message-dto
title: ErrorMessageDto
pagination_label: ErrorMessageDto
sidebar_label: ErrorMessageDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ErrorMessageDto', 'oauth_clients']
slug: /tools/sdk/angular/oauth_clients/models/error-message-dto
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto', 'oauth_clients']
---

# ErrorMessageDto

Import this model from the entry point of its package:

```typescript
import { ErrorMessageDto } from '@sailpoint/angular-sdk/oauth_clients';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **(optional)** `string` | The locale for the message text, a BCP 47 language tag. | [default to undefined]
**localeOrigin** | **(optional)** `LocaleOrigin` |  | [default to undefined]
**text** | **(optional)** `string` | Actual text of the error message in the indicated locale. | [default to undefined]

