---
id: generic_request_approval_config-model-generic-request-approval-action-config
title: GenericRequestApprovalActionConfig
pagination_label: GenericRequestApprovalActionConfig
sidebar_label: GenericRequestApprovalActionConfig
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'GenericRequestApprovalActionConfig', 'generic_request_approval_config']
slug: /tools/sdk/angular/generic_request_approval_config/models/generic-request-approval-action-config
tags: ['SDK', 'Software Development Kit', 'GenericRequestApprovalActionConfig', 'generic_request_approval_config']
---

# GenericRequestApprovalActionConfig

Import this model from the entry point of its package:

```typescript
import { GenericRequestApprovalActionConfig } from '@sailpoint/angular-sdk/generic_request_approval_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** | **(optional)** `string` | How the request is approved. Omitted when the action inherits the organization-level configuration. | [default to undefined]
**approvers** | **(optional)** `string` | APPROVAL scheme only. A comma-separated list of approver tokens: `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`, `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. `accountOwner` is also allowed for the SUBTYPE DELETE action. | [default to undefined]
**comments** | **(optional)** `string` | APPROVAL scheme only. When approvers must comment: on both decisions (ALL), on approval only (APPROVAL), on rejection only (REJECTION), or never (OFF). | [default to undefined]
**workflowId** | **(optional)** `string` | WORKFLOW scheme only. The ID of the workflow that approves the request. | [default to undefined]

