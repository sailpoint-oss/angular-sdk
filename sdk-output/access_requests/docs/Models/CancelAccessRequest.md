---
id: access_requests-model-cancel-access-request
title: CancelAccessRequest
pagination_label: CancelAccessRequest
sidebar_label: CancelAccessRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CancelAccessRequest', 'access_requests']
slug: /tools/sdk/angular/access_requests/models/cancel-access-request
tags: ['SDK', 'Software Development Kit', 'CancelAccessRequest', 'access_requests']
---

# CancelAccessRequest

Import this model from the entry point of its package:

```typescript
import { CancelAccessRequest } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountActivityId** | `string` | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | [default to undefined]
**comment** | `string` | Reason for cancelling the pending access request. | [default to undefined]

