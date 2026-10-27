---
id: capabilities-model-capability-owners
title: CapabilityOwners
pagination_label: CapabilityOwners
sidebar_label: CapabilityOwners
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CapabilityOwners', 'capabilities']
slug: /tools/sdk/angular/capabilities/models/capability-owners
tags: ['SDK', 'Software Development Kit', 'CapabilityOwners', 'capabilities']
---

# CapabilityOwners

Import this model from the entry point of its package:

```typescript
import { CapabilityOwners } from '@sailpoint/angular-sdk/capabilities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `CapabilityOwnersPrimary` |  | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [default to undefined]

