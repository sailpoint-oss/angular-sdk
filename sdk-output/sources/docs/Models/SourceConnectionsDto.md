---
id: sources-model-source-connections-dto
title: SourceConnectionsDto
pagination_label: SourceConnectionsDto
sidebar_label: SourceConnectionsDto
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SourceConnectionsDto', 'sources']
slug: /tools/sdk/angular/sources/models/source-connections-dto
tags: ['SDK', 'Software Development Kit', 'SourceConnectionsDto', 'sources']
---

# SourceConnectionsDto

Import this model from the entry point of its package:

```typescript
import { SourceConnectionsDto } from 'sailpoint-angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityProfiles** | **(optional)** `Array<IdentityProfilesConnections>` | The IdentityProfile attached to this source | [default to undefined]
**credentialProfiles** | **(optional)** `Array<string>` | Name of the CredentialProfile attached to this source | [default to undefined]
**sourceAttributes** | **(optional)** `Array<string>` | The attributes attached to this source | [default to undefined]
**mappingProfiles** | **(optional)** `Array<string>` | The profiles attached to this source | [default to undefined]
**dependentCustomTransforms** | **(optional)** `Array<TransformRead>` | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [default to undefined]
**dependentApps** | **(optional)** `Array<DependantAppConnections>` |  | [default to undefined]
**missingDependents** | **(optional)** `Array<DependantConnectionsMissingDto>` |  | [default to undefined]

