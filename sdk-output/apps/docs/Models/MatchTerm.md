---
id: apps-model-match-term
title: MatchTerm
pagination_label: MatchTerm
sidebar_label: MatchTerm
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MatchTerm', 'apps']
slug: /tools/sdk/angular/apps/models/match-term
tags: ['SDK', 'Software Development Kit', 'MatchTerm', 'apps']
---

# MatchTerm

Import this model from the entry point of its package:

```typescript
import { MatchTerm } from 'sailpoint-angular-sdk/apps';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The attribute name | [default to undefined]
**value** | **(optional)** `string` | The attribute value | [default to undefined]
**op** | **(optional)** `string` | The operator between name and value | [default to undefined]
**container** | **(optional)** `boolean` | If it is a container or a real match term | [default to false]
**and** | **(optional)** `boolean` | If it is AND logical operator for the children match terms | [default to false]
**children** | **(optional)** `Array<{ [key: string]: any; }>` | The children under this match term | [default to undefined]

