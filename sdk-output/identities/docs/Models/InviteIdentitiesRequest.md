---
id: identities-model-invite-identities-request
title: InviteIdentitiesRequest
pagination_label: InviteIdentitiesRequest
sidebar_label: InviteIdentitiesRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'InviteIdentitiesRequest', 'identities']
slug: /tools/sdk/angular/identities/models/invite-identities-request
tags: ['SDK', 'Software Development Kit', 'InviteIdentitiesRequest', 'identities']
---

# InviteIdentitiesRequest

Import this model from the entry point of its package:

```typescript
import { InviteIdentitiesRequest } from '@sailpoint/angular-sdk/identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **(optional)** `Array<string>` | The list of Identities IDs to invite - required when \'uninvited\' is false | [default to undefined]
**uninvited** | **(optional)** `boolean` | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when \'ids\' is empty. | [default to false]

