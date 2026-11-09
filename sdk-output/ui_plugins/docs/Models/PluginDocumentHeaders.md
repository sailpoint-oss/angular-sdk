---
id: ui_plugins-model-plugin-document-headers
title: PluginDocumentHeaders
pagination_label: PluginDocumentHeaders
sidebar_label: PluginDocumentHeaders
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'PluginDocumentHeaders', 'ui_plugins']
slug: /tools/sdk/angular/ui_plugins/models/plugin-document-headers
tags: ['SDK', 'Software Development Kit', 'PluginDocumentHeaders', 'ui_plugins']
---

# PluginDocumentHeaders

Import this model from the entry point of its package:

```typescript
import { PluginDocumentHeaders } from '@sailpoint/angular-sdk/ui_plugins';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content_Security_Policy** | `string` | Effective `Content-Security-Policy` header value for plugin documents. | [default to undefined]
**Permissions_Policy** | `string` | Effective `Permissions-Policy` header value for plugin documents. Features are denied by default unless the plugin opts in. | [default to undefined]

