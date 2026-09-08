---
id: machine_account_creation_request-model-account-request-details-dto
title: AccountRequestDetailsDto
pagination_label: AccountRequestDetailsDto
sidebar_label: AccountRequestDetailsDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccountRequestDetailsDto', 'machine_account_creation_request']
slug: /tools/sdk/angular/machine_account_creation_request/models/account-request-details-dto
tags: ['SDK', 'Software Development Kit', 'AccountRequestDetailsDto', 'machine_account_creation_request']
---

# AccountRequestDetailsDto

Import this model from the entry point of its package:

```typescript
import { AccountRequestDetailsDto } from '@sailpoint/angular-sdk/machine_account_creation_request';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountRequestId** | **(optional)** `string` | Account request ID. | [default to undefined]
**requestType** | **(optional)** `string` | Type of the account request. | [default to undefined]
**createdAt** | **(optional)** `string` | Machine account creation request creation date and time. | [readonly] [default to undefined]
**completedAt** | **(optional)** `string` | Machine account creation request completion date and time. | [readonly] [default to undefined]
**overallStatus** | **(optional)** `string` | Overall status of the creation request. | [default to undefined]
**requester** | **(optional)** `AccountRequestDetailsDtoRequester` |  | [default to undefined]
**accountRequestPhases** | **(optional)** `Array<AccountRequestPhase>` | List of account request phases. | [default to undefined]
**errorDetails** | **(optional)** `string` | Detailed error information. | [default to undefined]

