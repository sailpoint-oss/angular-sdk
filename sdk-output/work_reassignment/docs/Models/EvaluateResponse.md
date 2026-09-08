---
id: work_reassignment-model-evaluate-response
title: EvaluateResponse
pagination_label: EvaluateResponse
sidebar_label: EvaluateResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'EvaluateResponse', 'work_reassignment']
slug: /tools/sdk/angular/work_reassignment/models/evaluate-response
tags: ['SDK', 'Software Development Kit', 'EvaluateResponse', 'work_reassignment']
---

# EvaluateResponse

Import this model from the entry point of its package:

```typescript
import { EvaluateResponse } from 'sailpoint-angular-sdk/work_reassignment';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassignToId** | **(optional)** `string` | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [default to undefined]
**lookupTrail** | **(optional)** `Array<LookupStep>` | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [default to undefined]

