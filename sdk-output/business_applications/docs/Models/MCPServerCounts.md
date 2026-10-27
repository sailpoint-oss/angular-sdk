---
id: business_applications-model-mcp-server-counts
title: MCPServerCounts
pagination_label: MCPServerCounts
sidebar_label: MCPServerCounts
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'MCPServerCounts', 'business_applications']
slug: /tools/sdk/angular/business_applications/models/mcp-server-counts
tags: ['SDK', 'Software Development Kit', 'MCPServerCounts', 'business_applications']
---

# MCPServerCounts

Import this model from the entry point of its package:

```typescript
import { MCPServerCounts } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registryEntries** | **(optional)** `number` | Total number of MCP servers in the tenant. | [default to undefined]
**remote** | **(optional)** `number` | Number of MCP servers that have at least one remote endpoint. | [default to undefined]
**connectedAgentCount** | **(optional)** `number` | Number of distinct AI agents connected to at least one MCP server. An agent connected to several MCP servers is counted once, so this can be less than the sum of each server\'s `connectedAgentCount`. | [default to undefined]

