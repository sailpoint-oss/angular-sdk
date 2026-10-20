---
id: gov_certification-model-decision-statistics
title: DecisionStatistics
pagination_label: DecisionStatistics
sidebar_label: DecisionStatistics
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'DecisionStatistics', 'gov_certification']
slug: /tools/sdk/angular/gov_certification/models/decision-statistics
tags: ['SDK', 'Software Development Kit', 'DecisionStatistics', 'gov_certification']
---

# DecisionStatistics

Import this model from the entry point of its package:

```typescript
import { DecisionStatistics } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **(optional)** `number` | Count of approval decisions for this item type. | [default to undefined]
**revoked** | **(optional)** `number` | Count of revoke decisions for this item type. | [default to undefined]
**acknowledged** | **(optional)** `number` | Count of acknowledge decisions for this item type. | [default to undefined]
**decisionsMade** | **(optional)** `number` | Count of decisions made so far for this item type. | [default to undefined]
**decisionsTotal** | **(optional)** `number` | Count of all decisions for this item type, both made and yet-to-be-made. | [default to undefined]

