---
id: machine_identities-model-unsanctioned-application-anomaly-summary
title: UnsanctionedApplicationAnomalySummary
pagination_label: UnsanctionedApplicationAnomalySummary
sidebar_label: UnsanctionedApplicationAnomalySummary
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'UnsanctionedApplicationAnomalySummary', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/unsanctioned-application-anomaly-summary
tags: ['SDK', 'Software Development Kit', 'UnsanctionedApplicationAnomalySummary', 'machine_identities']
---

# UnsanctionedApplicationAnomalySummary

Import this model from the entry point of its package:

```typescript
import { UnsanctionedApplicationAnomalySummary } from 'sailpoint-angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anomalyType** | **(optional)** `string` | The anomaly type these counts describe. Always unsanctioned_app for this endpoint. | [default to undefined]
**agentCount** | **(optional)** `number` | Number of distinct agents with at least one unsanctioned-application anomaly. | [default to undefined]
**userCount** | **(optional)** `number` | Number of distinct owners (users) associated with unsanctioned-application anomalies. | [default to undefined]
**eventCount** | **(optional)** `number` | Total number of unsanctioned-application anomaly records. | [default to undefined]

