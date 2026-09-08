---
id: iai_recommendations-model-error-response-dto
title: ErrorResponseDto
pagination_label: ErrorResponseDto
sidebar_label: ErrorResponseDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ErrorResponseDto', 'iai_recommendations']
slug: /tools/sdk/angular/iai_recommendations/models/error-response-dto
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto', 'iai_recommendations']
---

# ErrorResponseDto

Import this model from the entry point of its package:

```typescript
import { ErrorResponseDto } from '@sailpoint/angular-sdk/iai_recommendations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | **(optional)** `string` | Fine-grained error code providing more detail of the error. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<ErrorMessageDto>` | Generic localized reason for error | [default to undefined]
**causes** | **(optional)** `Array<ErrorMessageDto>` | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [default to undefined]

