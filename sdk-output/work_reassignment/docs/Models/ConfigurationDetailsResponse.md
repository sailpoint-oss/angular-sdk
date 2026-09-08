---
id: work_reassignment-model-configuration-details-response
title: ConfigurationDetailsResponse
pagination_label: ConfigurationDetailsResponse
sidebar_label: ConfigurationDetailsResponse
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ConfigurationDetailsResponse', 'work_reassignment']
slug: /tools/sdk/angular/work_reassignment/models/configuration-details-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationDetailsResponse', 'work_reassignment']
---

# ConfigurationDetailsResponse

Import this model from the entry point of its package:

```typescript
import { ConfigurationDetailsResponse } from 'sailpoint-angular-sdk/work_reassignment';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configType** | **(optional)** `ConfigTypeEnum` |  | [default to undefined]
**targetIdentity** | **(optional)** `Identity2` |  | [default to undefined]
**startDate** | **(optional)** `string` | The date from which to start reassigning work items | [default to undefined]
**endDate** | **(optional)** `string` | The date from which to stop reassigning work items.  If this is an empty string it indicates a permanent reassignment. | [default to undefined]
**auditDetails** | **(optional)** `AuditDetails` |  | [default to undefined]

