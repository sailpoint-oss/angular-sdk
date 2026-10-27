---
id: credentials-model-credential-owners
title: CredentialOwners
pagination_label: CredentialOwners
sidebar_label: CredentialOwners
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CredentialOwners', 'credentials']
slug: /tools/sdk/angular/credentials/models/credential-owners
tags: ['SDK', 'Software Development Kit', 'CredentialOwners', 'credentials']
---

# CredentialOwners

Import this model from the entry point of its package:

```typescript
import { CredentialOwners } from '@sailpoint/angular-sdk/credentials';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `CredentialOwnersPrimary` |  | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [default to undefined]

