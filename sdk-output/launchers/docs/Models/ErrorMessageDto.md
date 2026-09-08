---
id: launchers-model-error-message-dto
title: ErrorMessageDto
pagination_label: ErrorMessageDto
sidebar_label: ErrorMessageDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ErrorMessageDto', 'launchers']
slug: /tools/sdk/angular/launchers/models/error-message-dto
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto', 'launchers']
---

# ErrorMessageDto

Import this model from the entry point of its package:

```typescript
import { ErrorMessageDto } from '@sailpoint/angular-sdk/launchers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **(optional)** `string` | The locale for the message text, a BCP 47 language tag. | [default to undefined]
**localeOrigin** | **(optional)** `LocaleOrigin` |  | [default to undefined]
**text** | **(optional)** `string` | Actual text of the error message in the indicated locale. | [default to undefined]

