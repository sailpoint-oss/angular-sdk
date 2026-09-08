---
id: access_requests-model-request-on-behalf-of-config
title: RequestOnBehalfOfConfig
pagination_label: RequestOnBehalfOfConfig
sidebar_label: RequestOnBehalfOfConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RequestOnBehalfOfConfig', 'access_requests']
slug: /tools/sdk/angular/access_requests/models/request-on-behalf-of-config
tags: ['SDK', 'Software Development Kit', 'RequestOnBehalfOfConfig', 'access_requests']
---

# RequestOnBehalfOfConfig

Import this model from the entry point of its package:

```typescript
import { RequestOnBehalfOfConfig } from 'sailpoint-angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowRequestOnBehalfOfAnyoneByAnyone** | **(optional)** `boolean` | If this is true, anyone can request access for anyone. | [default to false]
**allowRequestOnBehalfOfEmployeeByManager** | **(optional)** `boolean` | If this is true, a manager can request access for his or her direct reports. | [default to false]
**allowRequestOnBehalfOfForMachineIdentity** | **(optional)** `boolean` | If this is true, anyone can request access on behalf of machine identities. Machine access request authorization is evaluated as follows: 1. If this flag is true, any requester is allowed. 2. Else if `allowRequestForMachineByOwner` is true, the requester must be an admin or a primary/secondary owner of every requested machine identity. 3. Else admins are still allowed; non-admins receive 403.  | [default to true]
**allowRequestForMachineByOwner** | **(optional)** `boolean` | When `allowRequestOnBehalfOfForMachineIdentity` is false and this flag is true, only admins and primary/secondary owners of the requested machine identities may submit machine access requests. Defaults to false (opt-in).  | [default to false]

