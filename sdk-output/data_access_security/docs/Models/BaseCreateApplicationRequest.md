---
id: data_access_security-model-base-create-application-request
title: BaseCreateApplicationRequest
pagination_label: BaseCreateApplicationRequest
sidebar_label: BaseCreateApplicationRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BaseCreateApplicationRequest', 'data_access_security']
slug: /tools/sdk/angular/data_access_security/models/base-create-application-request
tags: ['SDK', 'Software Development Kit', 'BaseCreateApplicationRequest', 'data_access_security']
---

# BaseCreateApplicationRequest

Import this model from the entry point of its package:

```typescript
import { BaseCreateApplicationRequest } from 'sailpoint-angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationType** | `ApplicationType` |  | [default to undefined]
**name** | `string` | The display name of the application. | [default to undefined]
**description** | **(optional)** `string` | A brief description of the application and its purpose. | [default to undefined]
**tags** | **(optional)** `Array<Int64StringKeyValuePair>` | A list of tags to categorize or identify the application. | [default to undefined]
**identityCollectorId** | **(optional)** `number` | The unique identifier for the identity collector associated with this application. | [default to undefined]
**adIdentityCollectorId** | **(optional)** `number` | The unique identifier for the AD identity collector. | [default to undefined]
**nisIdentityCollectorId** | **(optional)** `number` | The unique identifier for the NIS identity collector. | [default to undefined]
**applicationCrawlerSettings** | **(optional)** `ApplicationCrawlerSettings` |  | [default to undefined]
**permissionCollectorSettings** | **(optional)** `PermissionCollectorSettings` |  | [default to undefined]
**dataClassificationSettings** | **(optional)** `DataClassificationSettings` |  | [default to undefined]
**activityConfigurationSettings** | **(optional)** `ActivityConfigurationSettings` |  | [default to undefined]
**executeNow** | **(optional)** `boolean` | If true, the application setup will be executed immediately after creation. | [default to false]

