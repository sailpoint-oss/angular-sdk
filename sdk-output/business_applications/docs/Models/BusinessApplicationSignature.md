---
id: business_applications-model-business-application-signature
title: BusinessApplicationSignature
pagination_label: BusinessApplicationSignature
sidebar_label: BusinessApplicationSignature
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'BusinessApplicationSignature', 'business_applications']
slug: /tools/sdk/angular/business_applications/models/business-application-signature
tags: ['SDK', 'Software Development Kit', 'BusinessApplicationSignature', 'business_applications']
---

# BusinessApplicationSignature

Import this model from the entry point of its package:

```typescript
import { BusinessApplicationSignature } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Signature type, matched against the machine identity\'s subtype. Kept consistent with the machine identity subtype values. | [default to undefined]
**name** | `string` | Connector signature value to match against the machine identity\'s `spBusinessApplication` connector attribute. | [default to undefined]

