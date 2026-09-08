---
id: triggers-model-test-invocation
title: TestInvocation
pagination_label: TestInvocation
sidebar_label: TestInvocation
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'TestInvocation', 'triggers']
slug: /tools/sdk/angular/triggers/models/test-invocation
tags: ['SDK', 'Software Development Kit', 'TestInvocation', 'triggers']
---

# TestInvocation

Import this model from the entry point of its package:

```typescript
import { TestInvocation } from 'sailpoint-angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerId** | `string` | Trigger ID | [default to undefined]
**input** | **(optional)** `object` | Mock input to use for test invocation.  This must adhere to the input schema defined in the trigger being invoked.  If this property is omitted, then the default trigger sample payload will be sent. | [default to undefined]
**contentJson** | `object` | JSON map of invocation metadata. | [default to undefined]
**subscriptionIds** | **(optional)** `Array<string>` | Only send the test event to the subscription IDs listed.  If omitted, the test event will be sent to all subscribers. | [default to undefined]

