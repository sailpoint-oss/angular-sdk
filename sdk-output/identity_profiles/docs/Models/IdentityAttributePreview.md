---
id: identity_profiles-model-identity-attribute-preview
title: IdentityAttributePreview
pagination_label: IdentityAttributePreview
sidebar_label: IdentityAttributePreview
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'IdentityAttributePreview', 'identity_profiles']
slug: /tools/sdk/angular/identity_profiles/models/identity-attribute-preview
tags: ['SDK', 'Software Development Kit', 'IdentityAttributePreview', 'identity_profiles']
---

# IdentityAttributePreview

Import this model from the entry point of its package:

```typescript
import { IdentityAttributePreview } from '@sailpoint/angular-sdk/identity_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Name of the attribute that is being previewed. | [default to undefined]
**value** | **(optional)** `string` | Value that was derived during the preview. | [default to undefined]
**previousValue** | **(optional)** `string` | The value of the attribute before the preview. | [default to undefined]
**errorMessages** | **(optional)** `Array<ErrorMessageDto>` | List of error messages | [default to undefined]

