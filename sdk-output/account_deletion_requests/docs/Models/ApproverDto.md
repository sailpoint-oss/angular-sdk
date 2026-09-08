---
id: account_deletion_requests-model-approver-dto
title: ApproverDto
pagination_label: ApproverDto
sidebar_label: ApproverDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ApproverDto', 'account_deletion_requests']
slug: /tools/sdk/angular/account_deletion_requests/models/approver-dto
tags: ['SDK', 'Software Development Kit', 'ApproverDto', 'account_deletion_requests']
---

# ApproverDto

Import this model from the entry point of its package:

```typescript
import { ApproverDto } from '@sailpoint/angular-sdk/account_deletion_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityID** | **(optional)** `string` | Identity ID and it cannot be null. | [default to undefined]
**id** | **(optional)** `string` | Optional id | [default to undefined]
**name** | **(optional)** `string` | Identity display name | [default to undefined]
**email** | **(optional)** `string` | Email address of identity | [default to undefined]
**type** | **(optional)** `string` | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [default to undefined]
**ownerOf** | **(optional)** `Array<ApproverReference>` | List of reference of identity type dto for account owner identities | [default to undefined]
**actionedAs** | **(optional)** `Array<ApproverReference>` | List of reference of identity type dto who acted on behalf of other identities. | [default to undefined]
**members** | **(optional)** `Array<ApproverReference>` | List of reference of identity type dto for member identities. | [default to undefined]

