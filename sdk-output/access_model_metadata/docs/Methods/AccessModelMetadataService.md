---
id: access_model_metadata-method-access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'AccessModelMetadata', 'access_model_metadata']
slug: /tools/sdk/angular/access_model_metadata/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'access_model_metadata']
---

# AccessModelMetadataService
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute-v1**](#create-access-model-metadata-attribute-v1) | **POST** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value-v1**](#create-access-model-metadata-attribute-value-v1) | **POST** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**get-access-model-metadata-attribute-v1**](#get-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value-v1**](#get-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute-v1**](#list-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value-v1**](#list-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-attribute-v1**](#update-access-model-metadata-attribute-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}` | Update access model metadata attribute
[**update-access-model-metadata-attribute-value-v1**](#update-access-model-metadata-attribute-value-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Update access model metadata value
[**update-access-model-metadata-by-filter-v1**](#update-access-model-metadata-by-filter-v1) | **POST** `/access-model-metadata/v1/bulk-update/filter` | Metadata Attribute update by filter
[**update-access-model-metadata-by-ids-v1**](#update-access-model-metadata-by-ids-v1) | **POST** `/access-model-metadata/v1/bulk-update/ids` | Metadata Attribute update by ids
[**update-access-model-metadata-by-query-v1**](#update-access-model-metadata-by-query-v1) | **POST** `/access-model-metadata/v1/bulk-update/query` | Metadata Attribute update by query


## create-access-model-metadata-attribute-v1
Create access model metadata attribute
Create a new Access Model Metadata Attribute.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateAccessModelMetadataAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**attributeDTO** | `AttributeDTO` | Attribute to create | 

### Return type

`Observable<AttributeDTO>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';
import { AttributeDTO } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  createAccessModelMetadataAttributeV1(): void {
    const attributeDTO: AttributeDTO = ; // Attribute to create
    this.api.createAccessModelMetadataAttributeV1({ attributeDTO: attributeDTO }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-access-model-metadata-attribute-value-v1
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.    


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-value-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateAccessModelMetadataAttributeValueV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValueDTO** | `AttributeValueDTO` | Attribute value to create | 

### Return type

`Observable<AttributeValueDTO>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';
import { AttributeValueDTO } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  createAccessModelMetadataAttributeValueV1(): void {
    const key: string = ; // Technical name of the Attribute.
    const attributeValueDTO: AttributeValueDTO = ; // Attribute value to create
    this.api.createAccessModelMetadataAttributeValueV1({ key: key, attributeValueDTO: attributeValueDTO }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute-v1
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessModelMetadataAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]

### Return type

`Observable<AttributeDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  getAccessModelMetadataAttributeV1(): void {
    const key: string = ; // Technical name of the Attribute.
    this.api.getAccessModelMetadataAttributeV1({ key: key }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute-value-v1
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-value-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessModelMetadataAttributeValueV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**value** | `string` | Technical name of the Attribute value. |  [default to undefined]

### Return type

`Observable<AttributeValueDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  getAccessModelMetadataAttributeValueV1(): void {
    const key: string = ; // Technical name of the Attribute.
    const value: string = ; // Technical name of the Attribute value.
    this.api.getAccessModelMetadataAttributeValueV1({ key: key, value: value }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute-v1
List access model metadata attributes
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAccessModelMetadataAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<AttributeDTO>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  listAccessModelMetadataAttributeV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listAccessModelMetadataAttributeV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute-value-v1
List access model metadata values
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-value-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAccessModelMetadataAttributeValueV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<AttributeValueDTO>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  listAccessModelMetadataAttributeValueV1(): void {
    const key: string = ; // Technical name of the Attribute.
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listAccessModelMetadataAttributeValueV1({ key: key }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute-v1
Update access model metadata attribute
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessModelMetadataAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch array to apply | 

### Return type

`Observable<AttributeDTO>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';
import { JsonPatchOperation } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  updateAccessModelMetadataAttributeV1(): void {
    const key: string = ; // Technical name of the Attribute.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // JSON Patch array to apply
    this.api.updateAccessModelMetadataAttributeV1({ key: key, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute-value-v1
Update access model metadata value
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-value-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessModelMetadataAttributeValueV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**value** | `string` | Technical name of the Attribute value. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch array to apply | 

### Return type

`Observable<AttributeValueDTO>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';
import { JsonPatchOperation } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  updateAccessModelMetadataAttributeValueV1(): void {
    const key: string = ; // Technical name of the Attribute.
    const value: string = ; // Technical name of the Attribute value.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // JSON Patch array to apply
    this.api.updateAccessModelMetadataAttributeValueV1({ key: key, value: value, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-model-metadata-by-filter-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by filter
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessModelMetadataByFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementAttributeBulkUpdateFilterRequest** | `EntitlementAttributeBulkUpdateFilterRequest` | Attribute metadata bulk update request body. | 

### Return type

`Observable<AccessModelMetadataBulkUpdateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';
import { EntitlementAttributeBulkUpdateFilterRequest } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  updateAccessModelMetadataByFilterV1(): void {
    const entitlementAttributeBulkUpdateFilterRequest: EntitlementAttributeBulkUpdateFilterRequest = ; // Attribute metadata bulk update request body.
    this.api.updateAccessModelMetadataByFilterV1({ entitlementAttributeBulkUpdateFilterRequest: entitlementAttributeBulkUpdateFilterRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-model-metadata-by-ids-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by ids
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-ids-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessModelMetadataByIdsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementAttributeBulkUpdateIdsRequest** | `EntitlementAttributeBulkUpdateIdsRequest` | Attribute metadata bulk update request body. | 

### Return type

`Observable<AccessModelMetadataBulkUpdateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';
import { EntitlementAttributeBulkUpdateIdsRequest } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  updateAccessModelMetadataByIdsV1(): void {
    const entitlementAttributeBulkUpdateIdsRequest: EntitlementAttributeBulkUpdateIdsRequest = ; // Attribute metadata bulk update request body.
    this.api.updateAccessModelMetadataByIdsV1({ entitlementAttributeBulkUpdateIdsRequest: entitlementAttributeBulkUpdateIdsRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-model-metadata-by-query-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by query
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-query-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessModelMetadataByQueryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementAttributeBulkUpdateQueryRequest** | `EntitlementAttributeBulkUpdateQueryRequest` | Attribute metadata bulk update request body. | 

### Return type

`Observable<AccessModelMetadataBulkUpdateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessModelMetadataService } from 'sailpoint-angular-sdk/access_model_metadata';
import { EntitlementAttributeBulkUpdateQueryRequest } from 'sailpoint-angular-sdk/access_model_metadata';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessModelMetadataService);

  updateAccessModelMetadataByQueryV1(): void {
    const entitlementAttributeBulkUpdateQueryRequest: EntitlementAttributeBulkUpdateQueryRequest = ; // Attribute metadata bulk update request body.
    this.api.updateAccessModelMetadataByQueryV1({ entitlementAttributeBulkUpdateQueryRequest: entitlementAttributeBulkUpdateQueryRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

