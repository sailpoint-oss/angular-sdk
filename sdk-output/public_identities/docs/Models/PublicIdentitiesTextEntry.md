---
id: public_identities-model-public-identities-text-entry
title: PublicIdentitiesTextEntry
pagination_label: PublicIdentitiesTextEntry
sidebar_label: PublicIdentitiesTextEntry
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PublicIdentitiesTextEntry', 'public_identities']
slug: /tools/sdk/angular/public_identities/models/public-identities-text-entry
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesTextEntry', 'public_identities']
---

# PublicIdentitiesTextEntry

Import this model from the entry point of its package:

```typescript
import { PublicIdentitiesTextEntry } from '@sailpoint/angular-sdk/public_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryType** | `string` | Entry type discriminator. Must be TEXT for text query entries. | [default to undefined]
**textQuery** | `PublicIdentitiesTextQuery` | Text query clause for this TEXT entry. | [default to undefined]

