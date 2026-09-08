---
id: custom_password_instructions-model-custom-password-instruction
title: CustomPasswordInstruction
pagination_label: CustomPasswordInstruction
sidebar_label: CustomPasswordInstruction
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'CustomPasswordInstruction', 'custom_password_instructions']
slug: /tools/sdk/angular/custom_password_instructions/models/custom-password-instruction
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstruction', 'custom_password_instructions']
---

# CustomPasswordInstruction

Import this model from the entry point of its package:

```typescript
import { CustomPasswordInstruction } from 'sailpoint-angular-sdk/custom_password_instructions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageId** | **(optional)** `string` | The page ID that represents the page for forget user name, reset password and unlock account flow. | [default to undefined]
**pageContent** | **(optional)** `string` | The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks. If the customization text includes a link, like `<A HREF=\\\"URL\\\">...</A>` clicking on this will open the link on the current browser page. If you want your link to be redirected to a different page, please redirect it to \"_blank\" like this: `<a href=\\\"URL\" target=\\\"_blank\\\" >link</a>`. This will open a new tab when the link is clicked. Notice we\'re only supporting _blank as the redirection target.  | [default to undefined]
**locale** | **(optional)** `string` | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". | [default to undefined]

