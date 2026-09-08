---
id: certification_summaries-model-data-access
title: DataAccess
pagination_label: DataAccess
sidebar_label: DataAccess
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'DataAccess', 'certification_summaries']
slug: /tools/sdk/angular/certification_summaries/models/data-access
tags: ['SDK', 'Software Development Kit', 'DataAccess', 'certification_summaries']
---

# DataAccess

Import this model from the entry point of its package:

```typescript
import { DataAccess } from 'sailpoint-angular-sdk/certification_summaries';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | **(optional)** `Array<DataAccessPoliciesInner>` | List of classification policies that apply to resources the entitlement \\ groups has access to | [default to undefined]
**categories** | **(optional)** `Array<DataAccessCategoriesInner>` | List of classification categories that apply to resources the entitlement \\ groups has access to | [default to undefined]
**impactScore** | **(optional)** `DataAccessImpactScore` |  | [default to undefined]

