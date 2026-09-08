---
id: roles-model-revocability-for-role
title: RevocabilityForRole
pagination_label: RevocabilityForRole
sidebar_label: RevocabilityForRole
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RevocabilityForRole', 'roles']
slug: /tools/sdk/angular/roles/models/revocability-for-role
tags: ['SDK', 'Software Development Kit', 'RevocabilityForRole', 'roles']
---

# RevocabilityForRole

Import this model from the entry point of its package:

```typescript
import { RevocabilityForRole } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Whether the requester of the containing object must provide comments justifying the request | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Whether an approver must provide comments when denying the request | [default to false]
**approvalSchemes** | **(optional)** `Array<ApprovalSchemeForRole>` | List describing the steps in approving the revocation request | [default to undefined]

