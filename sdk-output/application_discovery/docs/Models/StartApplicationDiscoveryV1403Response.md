---
id: application_discovery-model-start-application-discovery-v1403-response
title: StartApplicationDiscoveryV1403Response
pagination_label: StartApplicationDiscoveryV1403Response
sidebar_label: StartApplicationDiscoveryV1403Response
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'StartApplicationDiscoveryV1403Response', 'application_discovery']
slug: /tools/sdk/angular/application_discovery/models/start-application-discovery-v1403-response
tags: ['SDK', 'Software Development Kit', 'StartApplicationDiscoveryV1403Response', 'application_discovery']
---

# StartApplicationDiscoveryV1403Response

Import this model from the entry point of its package:

```typescript
import { StartApplicationDiscoveryV1403Response } from 'sailpoint-angular-sdk/application_discovery';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | **(optional)** `string` | Fine-grained error code providing more detail of the error. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<ErrorMessageDto>` | Generic localized reason for error | [default to undefined]
**causes** | **(optional)** `Array<ErrorMessageDto>` | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [default to undefined]
**error** | `string` | Error message when quota is exceeded | [default to undefined]

