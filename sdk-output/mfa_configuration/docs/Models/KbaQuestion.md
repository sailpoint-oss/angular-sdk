---
id: mfa_configuration-model-kba-question
title: KbaQuestion
pagination_label: KbaQuestion
sidebar_label: KbaQuestion
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'KbaQuestion', 'mfa_configuration']
slug: /tools/sdk/angular/mfa_configuration/models/kba-question
tags: ['SDK', 'Software Development Kit', 'KbaQuestion', 'mfa_configuration']
---

# KbaQuestion

Import this model from the entry point of its package:

```typescript
import { KbaQuestion } from 'sailpoint-angular-sdk/mfa_configuration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | KBA Question Id | [default to undefined]
**text** | `string` | KBA Question description | [default to undefined]
**hasAnswer** | `boolean` | Denotes whether the KBA question has an answer configured for any user in the tenant | [default to undefined]
**numAnswers** | `number` | Denotes the number of KBA configurations for this question | [default to undefined]

