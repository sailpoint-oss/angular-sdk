---
id: machine_account_subtypes-model-create-source-subtype-v2-request
title: CreateSourceSubtypeV2Request
pagination_label: CreateSourceSubtypeV2Request
sidebar_label: CreateSourceSubtypeV2Request
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CreateSourceSubtypeV2Request', 'machine_account_subtypes']
slug: /tools/sdk/angular/machine_account_subtypes/models/create-source-subtype-v2-request
tags: ['SDK', 'Software Development Kit', 'CreateSourceSubtypeV2Request', 'machine_account_subtypes']
---

# CreateSourceSubtypeV2Request

Import this model from the entry point of its package:

```typescript
import { CreateSourceSubtypeV2Request } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetType** | **(optional)** `string` | Tier to create the subtype at. Defaults to `SOURCE`. | [default to TargetTypeEnum_Source]
**targetId** | `string` | Scope key of the subtype. The source ID for a `SOURCE` subtype, or a registered connector type for a `CONNECTOR` subtype. | [default to undefined]
**targetName** | **(optional)** `string` | Display name of the target. For a `CONNECTOR` subtype, a supplied value must match the connector\'s registered name and is replaced by the registered spelling. When omitted, the registered name is used. | [default to undefined]
**technicalName** | `string` | Technical name of the subtype. | [default to undefined]
**displayName** | `string` | Display name of the subtype. | [default to undefined]
**description** | `string` | Description of the subtype. | [default to undefined]
**type** | **(optional)** `string` | Entity type of the subtype. Defaults to `MACHINE`. | [default to 'MACHINE']
**classification** | **(optional)** `string` | Classification of the subtype. Defaults to `MACHINE`. | [default to ClassificationEnum_Machine]

