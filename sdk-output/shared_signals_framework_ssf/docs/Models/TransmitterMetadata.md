---
id: shared_signals_framework_ssf-model-transmitter-metadata
title: TransmitterMetadata
pagination_label: TransmitterMetadata
sidebar_label: TransmitterMetadata
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'TransmitterMetadata', 'shared_signals_framework_ssf']
slug: /tools/sdk/angular/shared_signals_framework_ssf/models/transmitter-metadata
tags: ['SDK', 'Software Development Kit', 'TransmitterMetadata', 'shared_signals_framework_ssf']
---

# TransmitterMetadata

Import this model from the entry point of its package:

```typescript
import { TransmitterMetadata } from 'sailpoint-angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_version** | **(optional)** `string` | Version of the SSF specification supported. | [default to undefined]
**issuer** | **(optional)** `string` | Base URL of the transmitter (issuer). | [default to undefined]
**jwks_uri** | **(optional)** `string` | URL of the transmitter\'s JSON Web Key Set. | [default to undefined]
**delivery_methods_supported** | **(optional)** `Array<string>` | Supported delivery methods (e.g. push URN). | [default to undefined]
**configuration_endpoint** | **(optional)** `string` | Endpoint for stream configuration (create, read, update, replace, delete). | [default to undefined]
**status_endpoint** | **(optional)** `string` | Endpoint for reading and updating stream status. | [default to undefined]
**verification_endpoint** | **(optional)** `string` | Endpoint for receiver verification. | [default to undefined]
**authorization_schemes** | **(optional)** `Array<AuthorizationScheme>` | Supported authorization schemes (e.g. OAuth2, Bearer). | [default to undefined]

