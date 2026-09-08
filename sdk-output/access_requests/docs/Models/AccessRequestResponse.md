---
id: access_requests-model-access-request-response
title: AccessRequestResponse
pagination_label: AccessRequestResponse
sidebar_label: AccessRequestResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessRequestResponse', 'access_requests']
slug: /tools/sdk/angular/access_requests/models/access-request-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse', 'access_requests']
---

# AccessRequestResponse

Import this model from the entry point of its package:

```typescript
import { AccessRequestResponse } from 'sailpoint-angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**newRequests** | **(optional)** `Array<AccessRequestTracking>` | A list of new access request tracking data mapped to the values requested. | [default to undefined]
**existingRequests** | **(optional)** `Array<AccessRequestTracking>` | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [default to undefined]

