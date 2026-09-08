---
id: sources-model-entitlement-approval-scheme
title: EntitlementApprovalScheme
pagination_label: EntitlementApprovalScheme
sidebar_label: EntitlementApprovalScheme
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'EntitlementApprovalScheme', 'sources']
slug: /tools/sdk/angular/sources/models/entitlement-approval-scheme
tags: ['SDK', 'Software Development Kit', 'EntitlementApprovalScheme', 'sources']
---

# EntitlementApprovalScheme

Import this model from the entry point of its package:

```typescript
import { EntitlementApprovalScheme } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **(optional)** `string` | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field, Workflows are exclusive to other types of approvals and License required.      | [default to undefined]
**approverId** | **(optional)** `string` | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW | [default to undefined]

