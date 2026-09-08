---
id: role_insights-model-role-insight
title: RoleInsight
pagination_label: RoleInsight
sidebar_label: RoleInsight
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'RoleInsight', 'role_insights']
slug: /tools/sdk/angular/role_insights/models/role-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsight', 'role_insights']
---

# RoleInsight

Import this model from the entry point of its package:

```typescript
import { RoleInsight } from '@sailpoint/angular-sdk/role_insights';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Insight id | [default to undefined]
**numberOfUpdates** | **(optional)** `number` | Total number of updates for this role | [default to undefined]
**createdDate** | **(optional)** `string` | The date-time insights were last created for this role. | [default to undefined]
**modifiedDate** | **(optional)** `string` | The date-time insights were last modified for this role. | [default to undefined]
**role** | **(optional)** `RoleInsightsRole` |  | [default to undefined]
**insight** | **(optional)** `RoleInsightsInsight` |  | [default to undefined]

