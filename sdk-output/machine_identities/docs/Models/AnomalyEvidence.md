---
id: machine_identities-model-anomaly-evidence
title: AnomalyEvidence
pagination_label: AnomalyEvidence
sidebar_label: AnomalyEvidence
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AnomalyEvidence', 'machine_identities']
slug: /tools/sdk/angular/machine_identities/models/anomaly-evidence
tags: ['SDK', 'Software Development Kit', 'AnomalyEvidence', 'machine_identities']
---

# AnomalyEvidence

Import this model from the entry point of its package:

```typescript
import { AnomalyEvidence } from 'sailpoint-angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **(optional)** `string` | Evidence source system. | [default to undefined]
**timestamp** | **(optional)** `AnomalyEvidenceTimestamp` |  | [default to undefined]
**agentAttributeType** | **(optional)** `string` | Attribute type captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**agentAttributeValue** | **(optional)** `string` | Attribute value captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**baseline** | **(optional)** `AnomalyBaseline` | Peer-group baseline for SIEM detections; null for SENTINEL detections. | [default to undefined]

