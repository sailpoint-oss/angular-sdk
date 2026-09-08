---
id: managed_clusters-model-cluster-manual-upgrade-jobs-inner
title: ClusterManualUpgradeJobsInner
pagination_label: ClusterManualUpgradeJobsInner
sidebar_label: ClusterManualUpgradeJobsInner
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ClusterManualUpgradeJobsInner', 'managed_clusters']
slug: /tools/sdk/angular/managed_clusters/models/cluster-manual-upgrade-jobs-inner
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInner', 'managed_clusters']
---

# ClusterManualUpgradeJobsInner

Import this model from the entry point of its package:

```typescript
import { ClusterManualUpgradeJobsInner } from '@sailpoint/angular-sdk/managed_clusters';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | `string` | Unique identifier for the upgrade job. | [default to undefined]
**cookbook** | `string` | Identifier for the cookbook used in the upgrade job. | [default to undefined]
**state** | `string` | Current state of the upgrade job. | [default to undefined]
**type** | `string` | The type of upgrade job (e.g., VA_UPGRADE). | [default to undefined]
**targetId** | `string` | Unique identifier of the target for the upgrade job. | [default to undefined]
**managedProcessConfiguration** | `ClusterManualUpgradeJobsInnerManagedProcessConfiguration` |  | [default to undefined]

