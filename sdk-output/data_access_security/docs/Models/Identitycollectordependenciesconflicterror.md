---
id: data_access_security-model-identitycollectordependenciesconflicterror
title: Identitycollectordependenciesconflicterror
pagination_label: Identitycollectordependenciesconflicterror
sidebar_label: Identitycollectordependenciesconflicterror
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Identitycollectordependenciesconflicterror', 'data_access_security']
slug: /tools/sdk/angular/data_access_security/models/identitycollectordependenciesconflicterror
tags: ['SDK', 'Software Development Kit', 'Identitycollectordependenciesconflicterror', 'data_access_security']
---

# Identitycollectordependenciesconflicterror

Import this model from the entry point of its package:

```typescript
import { Identitycollectordependenciesconflicterror } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | **(optional)** `string` | Fine-grained error code providing more detail of the error. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<IdentitycollectordependenciesconflicterrorMessagesInner>` | Generic localized reason for error. | [default to undefined]
**dependencies** | **(optional)** `Array<Identitycollectordependency>` | Dependent objects blocking deletion. At most three items are returned. | [default to undefined]
**extendedDependenciesCount** | **(optional)** `number` | Number of additional dependent objects not included in `dependencies`. | [default to undefined]

