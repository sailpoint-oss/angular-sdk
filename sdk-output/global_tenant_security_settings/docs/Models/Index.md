---
id: global_tenant_security_settings-models
title: Models
pagination_label: Models
sidebar_label: Models
sidebar_position: 4
sidebar_key: global_tenant_security_settings-angular-models
sidebar_class_name: models
keywords: ['angular', 'Angular', 'sdk', 'global_tenant_security_settings', 'models']
slug: /tools/sdk/angular/global_tenant_security_settings/models
tags: ['SDK', 'Software Development Kit', 'global_tenant_security_settings', 'models']
---

The Angular SDK uses data models to structure and manage data within the API. These models provide essential details about the data, including their attributes, data types, and how the models relate to each other. Understanding these models is crucial to effectively interact with the API.

## Key Features
- Attributes: Describe each attribute, including its name, data type, and whether it's required.
- Validation & Constraints: Highlight any rules or limitations for the attributes, such as format or length limits.
- Example: Provides a sample of how the API uses the model.

## Importing a model
Models are not re-exported from the root of the package. Import them from the entry point of their own package:

```typescript
import { ArrayInner } from '@sailpoint/angular-sdk/global_tenant_security_settings';
```
