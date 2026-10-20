---
id: gov_certification-model-requestability
title: Requestability
pagination_label: Requestability
sidebar_label: Requestability
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Requestability', 'gov_certification']
slug: /tools/sdk/angular/gov_certification/models/requestability
tags: ['SDK', 'Software Development Kit', 'Requestability', 'gov_certification']
---

# Requestability

Import this model from the entry point of its package:

```typescript
import { Requestability } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Whether the requester of the containing object must provide comments justifying the request | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Whether an approver must provide comments when denying the request | [default to false]
**approvalSchemes** | **(optional)** `Array<AccessProfileApprovalScheme>` | List describing the steps in approving the request | [default to undefined]

