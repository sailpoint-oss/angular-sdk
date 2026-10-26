---
id: public_identities-model-public-identities-nested-composite-entry
title: PublicIdentitiesNestedCompositeEntry
pagination_label: PublicIdentitiesNestedCompositeEntry
sidebar_label: PublicIdentitiesNestedCompositeEntry
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PublicIdentitiesNestedCompositeEntry', 'public_identities']
slug: /tools/sdk/angular/public_identities/models/public-identities-nested-composite-entry
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesNestedCompositeEntry', 'public_identities']
---

# PublicIdentitiesNestedCompositeEntry

Import this model from the entry point of its package:

```typescript
import { PublicIdentitiesNestedCompositeEntry } from '@sailpoint/angular-sdk/public_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryType** | `string` | Entry type discriminator. Must be COMPOSITE for nested query sets. | [default to undefined]
**querySet** | `PublicIdentitiesNestedQuerySet` | Nested query set for this COMPOSITE entry. | [default to undefined]

