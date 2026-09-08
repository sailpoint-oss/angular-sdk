---
id: ui_metadata-model-tenant-ui-metadata-item-update-request
title: TenantUiMetadataItemUpdateRequest
pagination_label: TenantUiMetadataItemUpdateRequest
sidebar_label: TenantUiMetadataItemUpdateRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'TenantUiMetadataItemUpdateRequest', 'ui_metadata']
slug: /tools/sdk/angular/ui_metadata/models/tenant-ui-metadata-item-update-request
tags: ['SDK', 'Software Development Kit', 'TenantUiMetadataItemUpdateRequest', 'ui_metadata']
---

# TenantUiMetadataItemUpdateRequest

Import this model from the entry point of its package:

```typescript
import { TenantUiMetadataItemUpdateRequest } from 'sailpoint-angular-sdk/ui_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframeWhiteList** | **(optional)** `string` | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [default to undefined]
**usernameLabel** | **(optional)** `string` | Descriptor for the username input field. If you would like to reset the value use \"null\". | [default to undefined]
**usernameEmptyText** | **(optional)** `string` | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [default to undefined]

