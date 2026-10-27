---
id: business_applications-model-mcp-package
title: MCPPackage
pagination_label: MCPPackage
sidebar_label: MCPPackage
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MCPPackage', 'business_applications']
slug: /tools/sdk/angular/business_applications/models/mcp-package
tags: ['SDK', 'Software Development Kit', 'MCPPackage', 'business_applications']
---

# MCPPackage

Import this model from the entry point of its package:

```typescript
import { MCPPackage } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registryType** | **(optional)** `string` | Package registry that hosts the package. | [default to undefined]
**identifier** | **(optional)** `string` | Package identifier within the registry. | [default to undefined]
**command** | **(optional)** `string` | Command used to launch the package. | [default to undefined]
**args** | **(optional)** `Array<string>` | Arguments passed to the launch command, in the order they are applied. | [default to undefined]

