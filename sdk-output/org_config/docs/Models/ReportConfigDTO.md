---
id: org_config-model-report-config-dto
title: ReportConfigDTO
pagination_label: ReportConfigDTO
sidebar_label: ReportConfigDTO
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ReportConfigDTO', 'org_config']
slug: /tools/sdk/angular/org_config/models/report-config-dto
tags: ['SDK', 'Software Development Kit', 'ReportConfigDTO', 'org_config']
---

# ReportConfigDTO

Import this model from the entry point of its package:

```typescript
import { ReportConfigDTO } from '@sailpoint/angular-sdk/org_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columnName** | **(optional)** `string` | Name of column in report | [default to undefined]
**required** | **(optional)** `boolean` | If true, column is required in all reports, and this entry is immutable. A 400 error will result from any attempt to modify the column\'s definition. | [default to false]
**included** | **(optional)** `boolean` | If true, column is included in the report. A 400 error will be thrown if an attempt is made to set included=false if required==true. | [default to false]
**order** | **(optional)** `number` | Relative sort order for the column. Columns will be displayed left-to-right in nondecreasing order. | [default to undefined]

