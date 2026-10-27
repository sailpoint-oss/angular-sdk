---
id: sources-model-delete-source-agents-request
title: DeleteSourceAgentsRequest
pagination_label: DeleteSourceAgentsRequest
sidebar_label: DeleteSourceAgentsRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'DeleteSourceAgentsRequest', 'sources']
slug: /tools/sdk/angular/sources/models/delete-source-agents-request
tags: ['SDK', 'Software Development Kit', 'DeleteSourceAgentsRequest', 'sources']
---

# DeleteSourceAgentsRequest

Import this model from the entry point of its package:

```typescript
import { DeleteSourceAgentsRequest } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasetIds** | `Array<string>` | IDs of the datasets to delete AI agents for. All AI agents from these datasets on the source are deleted. Must contain at least one ID, and IDs cannot be blank. | [default to undefined]

