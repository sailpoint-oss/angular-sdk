---
id: triggers-model-sod-violation-mitigated-payload-applied-controls-inner
title: SODViolationMitigatedPayloadAppliedControlsInner
pagination_label: SODViolationMitigatedPayloadAppliedControlsInner
sidebar_label: SODViolationMitigatedPayloadAppliedControlsInner
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'SODViolationMitigatedPayloadAppliedControlsInner', 'triggers']
slug: /tools/sdk/angular/triggers/models/sod-violation-mitigated-payload-applied-controls-inner
tags: ['SDK', 'Software Development Kit', 'SODViolationMitigatedPayloadAppliedControlsInner', 'triggers']
---

# SODViolationMitigatedPayloadAppliedControlsInner

Import this model from the entry point of its package:

```typescript
import { SODViolationMitigatedPayloadAppliedControlsInner } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliedDate** | **(optional)** `string` | When the control was applied. | [default to undefined]
**applier** | **(optional)** `SODViolationMitigatedPayloadAppliedControlsInnerApplier` |  | [default to undefined]
**comments** | **(optional)** `string` | Optional comments from the applier. | [default to undefined]
**control** | **(optional)** `SODViolationMitigatedPayloadAppliedControlsInnerControl` |  | [default to undefined]
**expiration** | **(optional)** `string` | When this application of the control expires. | [default to undefined]
**id** | **(optional)** `string` | ID of the control application record. | [default to undefined]
**status** | **(optional)** `ViolationAppliedControlStatus` |  | [default to undefined]
**violation** | **(optional)** `string` | ID of the violation this application belongs to. | [default to undefined]
**workflowId** | **(optional)** `string` | Optional workflow correlation ID. | [default to undefined]

