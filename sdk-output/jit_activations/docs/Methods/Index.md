---
id: jit_activations-methods
title: Methods
pagination_label: Methods
sidebar_label: Methods
sidebar_position: 3
sidebar_key: jit_activations-angular-methods
sidebar_class_name: methods
keywords: ['angular', 'Angular', 'sdk', 'jit_activations', 'methods']
slug: /tools/sdk/angular/jit_activations/methods
tags: ['SDK', 'Software Development Kit', 'jit_activations', 'methods']
---

Method documents provide detailed information about each API operation (or method). They describe what the method does and details its input parameters, expected return values, and any considerations to be aware of when using it.

## Key Features
- Purpose & Overview: Explains the purpose of the method and its role in the API.
- Parameters: Describe the required input parameters, including their data types. Every method takes a single object that holds all of its parameters.
- Response Format: Details the expected return format or structure. Every method returns an `Observable`.
- Error Scenarios: Outline potential errors or issues that may arise during method execution.
- Example: Provides a sample of how the API uses the method.

## Injecting a service
Every service is provided in the root injector, so `inject()` returns one without any extra setup:

```typescript
import { inject } from '@angular/core';
import { JITActivationsService } from '@sailpoint/angular-sdk/jit_activations';

private readonly api = inject(JITActivationsService);
```

## Available Methods
This is a list of the core methods available in the Angular SDK for the **jit_activations** endpoints:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
