---
id: connector_rule_management-model-connector-rule-update-request
title: ConnectorRuleUpdateRequest
pagination_label: ConnectorRuleUpdateRequest
sidebar_label: ConnectorRuleUpdateRequest
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'ConnectorRuleUpdateRequest', 'connector_rule_management']
slug: /tools/sdk/angular/connector_rule_management/models/connector-rule-update-request
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleUpdateRequest', 'connector_rule_management']
---

# ConnectorRuleUpdateRequest

Import this model from the entry point of its package:

```typescript
import { ConnectorRuleUpdateRequest } from '@sailpoint/angular-sdk/connector_rule_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | the name of the rule | [default to undefined]
**description** | **(optional)** `string` | a description of the rule\'s purpose | [default to undefined]
**type** | `string` | the type of rule | [default to undefined]
**signature** | **(optional)** `ConnectorRuleCreateRequestSignature` |  | [default to undefined]
**sourceCode** | `SourceCode` |  | [default to undefined]
**attributes** | **(optional)** `object` | a map of string to objects | [default to undefined]
**id** | `string` | the ID of the rule to update | [default to undefined]

