---
id: public_identities-model-public-identities-composite-entry
title: PublicIdentitiesCompositeEntry
pagination_label: PublicIdentitiesCompositeEntry
sidebar_label: PublicIdentitiesCompositeEntry
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PublicIdentitiesCompositeEntry', 'public_identities']
slug: /tools/sdk/angular/public_identities/models/public-identities-composite-entry
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesCompositeEntry', 'public_identities']
---

# PublicIdentitiesCompositeEntry

Import this model from the entry point of its package:

```typescript
import { PublicIdentitiesCompositeEntry } from '@sailpoint/angular-sdk/public_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryType** | `string` | Entry type discriminator. Must be COMPOSITE for nested query sets. | [default to undefined]
**textQuery** | `PublicIdentitiesTextQuery` | Text query clause for this TEXT entry. | [default to undefined]
**querySet** | `PublicIdentitiesNestedQuerySet` | Nested query set for this COMPOSITE entry. | [default to undefined]

