---
id: connectors-model-update-detail
title: UpdateDetail
pagination_label: UpdateDetail
sidebar_label: UpdateDetail
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'UpdateDetail', 'connectors']
slug: /tools/sdk/angular/connectors/models/update-detail
tags: ['SDK', 'Software Development Kit', 'UpdateDetail', 'connectors']
---

# UpdateDetail

Import this model from the entry point of its package:

```typescript
import { UpdateDetail } from 'sailpoint-angular-sdk/connectors';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **(optional)** `string` | The detailed message for an update. Typically the relevent error message when status is error. | [default to undefined]
**scriptName** | **(optional)** `string` | The connector script name | [default to undefined]
**updatedFiles** | **(optional)** `Array<string>` | The list of updated files supported by the connector | [default to undefined]
**status** | **(optional)** `string` | The connector update status | [default to undefined]

