---
id: accounts-model-recommendation
title: Recommendation
pagination_label: Recommendation
sidebar_label: Recommendation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'Recommendation', 'accounts']
slug: /tools/sdk/angular/accounts/models/recommendation
tags: ['SDK', 'Software Development Kit', 'Recommendation', 'accounts']
---

# Recommendation

Import this model from the entry point of its package:

```typescript
import { Recommendation } from 'sailpoint-angular-sdk/accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Recommended type of account. | [default to undefined]
**method** | `string` | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [default to undefined]

