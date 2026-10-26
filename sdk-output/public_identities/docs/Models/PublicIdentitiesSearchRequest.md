---
id: public_identities-model-public-identities-search-request
title: PublicIdentitiesSearchRequest
pagination_label: PublicIdentitiesSearchRequest
sidebar_label: PublicIdentitiesSearchRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PublicIdentitiesSearchRequest', 'public_identities']
slug: /tools/sdk/angular/public_identities/models/public-identities-search-request
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesSearchRequest', 'public_identities']
---

# PublicIdentitiesSearchRequest

Import this model from the entry point of its package:

```typescript
import { PublicIdentitiesSearchRequest } from '@sailpoint/angular-sdk/public_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryType** | `string` | Search query type. Must be COMPOSITE. | [default to undefined]
**indices** | `Array<string>` | Search indices. Must be exactly [\"identities\"]. | [default to undefined]
**includeNested** | `boolean` | Must be false for public identities search. | [default to undefined]
**sort** | **(optional)** `Array<string>` | Optional attribute keys to sort by. Base keys must match those returned by GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional \"attributes.\" prefix and/or \".exact\" suffix. | [default to undefined]
**querySet** | `PublicIdentitiesSearchRequestQuerySet` |  | [default to undefined]

