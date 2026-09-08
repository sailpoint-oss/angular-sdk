---
id: data_access_security-method-data-access-security
title: DataAccessSecurity
pagination_label: DataAccessSecurity
sidebar_label: DataAccessSecurity
sidebar_class_name: angularsdk
keywords: ['angular', 'Angular', 'sdk', 'DataAccessSecurity', 'data_access_security']
slug: /tools/sdk/angular/data_access_security/methods/data-access-security
tags: ['SDK', 'Software Development Kit', 'DataAccessSecurity', 'data_access_security']
---

# DataAccessSecurityService
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-task-v1**](#cancel-task-v1) | **POST** `/das/v1/tasks/cancel/{id}` | Cancel a DAS task.
[**create-application-v1**](#create-application-v1) | **POST** `/das/v1/applications` | Create application
[**create-identity-collector-v1**](#create-identity-collector-v1) | **POST** `/das/identity-collectors/v1` | Create identity collector
[**create-schedule-v1**](#create-schedule-v1) | **POST** `/das/v1/tasks/schedules` | Create a new schedule.
[**das-v1-owners-assign-post**](#das-v1-owners-assign-post) | **POST** `/das/v1/owners/assign` | Assign owner to application resource.
[**das-v1-owners-owner-identity-id-resources-get**](#das-v1-owners-owner-identity-id-resources-get) | **GET** `/das/v1/owners/{ownerIdentityId}/resources` | List resources for owner.
[**das-v1-owners-reelect-post**](#das-v1-owners-reelect-post) | **POST** `/das/v1/owners/reelect` | Re-elect resource owner.
[**das-v1-owners-resources-resource-id-get**](#das-v1-owners-resources-resource-id-get) | **GET** `/das/v1/owners/resources/{resourceId}` | List owners for resource.
[**das-v1-owners-source-identity-id-reassign-destination-identity-id-post**](#das-v1-owners-source-identity-id-reassign-destination-identity-id-post) | **POST** `/das/v1/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**delete-application-v1**](#delete-application-v1) | **DELETE** `/das/v1/applications/{id}` | Delete an application by identifier.
[**delete-identity-collector-v1**](#delete-identity-collector-v1) | **DELETE** `/das/identity-collectors/v1/{id}` | Delete identity collector by identifier
[**delete-schedule-v1**](#delete-schedule-v1) | **DELETE** `/das/v1/tasks/schedules/{id}` | Delete a DAS schedule.
[**delete-task-v1**](#delete-task-v1) | **DELETE** `/das/v1/tasks/{id}` | Delete a DAS task.
[**get-application-v1**](#get-application-v1) | **GET** `/das/v1/applications/{id}` | Retrieve application details by identifier.
[**get-applications-v1**](#get-applications-v1) | **GET** `/das/v1/applications` | Search applications in DAS.
[**get-owners-v1**](#get-owners-v1) | **GET** `/das/v1/owners/applications/{appId}` | Retrieve owners per application.
[**get-schedule-v1**](#get-schedule-v1) | **GET** `/das/v1/tasks/schedules/{id}` | Get a DAS schedule.
[**get-schedules-v1**](#get-schedules-v1) | **GET** `/das/v1/tasks/schedules` | List all schedules.
[**get-task-v1**](#get-task-v1) | **GET** `/das/v1/tasks/{id}` | Get a DAS task.
[**get-tasks-v1**](#get-tasks-v1) | **GET** `/das/v1/tasks` | Lists all DAS tasks.
[**list-identity-collectors-v1**](#list-identity-collectors-v1) | **GET** `/das/identity-collectors/v1` | List identity collectors
[**put-application-v1**](#put-application-v1) | **PUT** `/das/v1/applications/{id}` | Update application by identifier.
[**put-identity-collector-v1**](#put-identity-collector-v1) | **PUT** `/das/identity-collectors/v1/{id}` | Update identity collector by identifier
[**put-schedule-v1**](#put-schedule-v1) | **PUT** `/das/v1/tasks/schedules/{id}` | Update a schedule.
[**start-task-rerun-v1**](#start-task-rerun-v1) | **POST** `/das/v1/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task-v1
Cancel a DAS task.
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-task-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CancelTaskV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to cancel. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  cancelTaskV1(): void {
    const id: number = ; // The unique identifier of the task to cancel.
    this.api.cancelTaskV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-application-v1
Create application
This endpoint creates a new application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/create-application-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateApplicationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**baseCreateApplicationRequest** | `BaseCreateApplicationRequest` | Request body containing the details required to create a new application. | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { BaseCreateApplicationRequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  createApplicationV1(): void {
    const baseCreateApplicationRequest: BaseCreateApplicationRequest = ; // Request body containing the details required to create a new application.
    this.api.createApplicationV1({ baseCreateApplicationRequest: baseCreateApplicationRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-identity-collector-v1
Create identity collector
This endpoint creates a new identity collector in Data Access Security for the specified source. The identity collector type is derived from the source.

[API Spec](https://developer.sailpoint.com/docs/api/create-identity-collector-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateIdentityCollectorV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createidentitycollectorrequest** | `Createidentitycollectorrequest` | Request body containing the details required to create a new identity collector. | 

### Return type

`Observable<CreateIdentityCollectorV1200Response>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { Createidentitycollectorrequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  createIdentityCollectorV1(): void {
    const createidentitycollectorrequest: Createidentitycollectorrequest = ; // Request body containing the details required to create a new identity collector.
    this.api.createIdentityCollectorV1({ createidentitycollectorrequest: createidentitycollectorrequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-schedule-v1
Create a new schedule.


[API Spec](https://developer.sailpoint.com/docs/api/create-schedule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateScheduleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createScheduleRequest** | `CreateScheduleRequest` |  | 

### Return type

`Observable<number>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { CreateScheduleRequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  createScheduleV1(): void {
    const createScheduleRequest: CreateScheduleRequest = ; // 
    this.api.createScheduleV1({ createScheduleRequest: createScheduleRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## das-v1-owners-assign-post
Assign owner to application resource.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-assign-post)

### Parameters

The service takes one object that holds every parameter. Its type is `DasV1OwnersAssignPostRequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**assignResourceOwnerRequest** | `AssignResourceOwnerRequest` | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner. | 

### Return type

`Observable<number>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { AssignResourceOwnerRequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  dasV1OwnersAssignPost(): void {
    const assignResourceOwnerRequest: AssignResourceOwnerRequest = ; // The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner.
    this.api.dasV1OwnersAssignPost({ assignResourceOwnerRequest: assignResourceOwnerRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## das-v1-owners-owner-identity-id-resources-get
List resources for owner.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-owner-identity-id-resources-get)

### Parameters

The service takes one object that holds every parameter. Its type is `DasV1OwnersOwnerIdentityIdResourcesGetRequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerIdentityId** | `string` | Unique identifier for the owner. This should be a UUID representing the owner\&#39;s identity. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Observable<Array<ResourceModel>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  dasV1OwnersOwnerIdentityIdResourcesGet(): void {
    const ownerIdentityId: string = ; // Unique identifier for the owner. This should be a UUID representing the owner\&#39;s identity.
    const limit: number = ; // Not applicable for this endpoint. Do not use. (optional)
    const offset: number = ; // Not applicable for this endpoint. Do not use. (optional)
    this.api.dasV1OwnersOwnerIdentityIdResourcesGet({ ownerIdentityId: ownerIdentityId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## das-v1-owners-reelect-post
Re-elect resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-reelect-post)

### Parameters

The service takes one object that holds every parameter. Its type is `DasV1OwnersReelectPostRequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reelectRequest** | `ReelectRequest` | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds. | 

### Return type

`Observable<number>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { ReelectRequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  dasV1OwnersReelectPost(): void {
    const reelectRequest: ReelectRequest = ; // The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.
    this.api.dasV1OwnersReelectPost({ reelectRequest: reelectRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## das-v1-owners-resources-resource-id-get
List owners for resource.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-resources-resource-id-get)

### Parameters

The service takes one object that holds every parameter. Its type is `DasV1OwnersResourcesResourceIdGetRequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**resourceId** | `number` | Unique identifier for the resource. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Observable<Array<string>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  dasV1OwnersResourcesResourceIdGet(): void {
    const resourceId: number = ; // Unique identifier for the resource.
    const limit: number = ; // Not applicable for this endpoint. Do not use. (optional)
    const offset: number = ; // Not applicable for this endpoint. Do not use. (optional)
    this.api.dasV1OwnersResourcesResourceIdGet({ resourceId: resourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## das-v1-owners-source-identity-id-reassign-destination-identity-id-post
Reassign resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-source-identity-id-reassign-destination-identity-id-post)

### Parameters

The service takes one object that holds every parameter. Its type is `DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPostRequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceIdentityId** | `string` | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from. |  [default to undefined]
**destinationIdentityId** | `string` | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to. |  [default to undefined]

### Return type

`Observable<number>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(): void {
    const sourceIdentityId: string = ; // Unique identifier for the source owner. This should be a UUID representing the identity to reassign from.
    const destinationIdentityId: string = ; // Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to.
    this.api.dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost({ sourceIdentityId: sourceIdentityId, destinationIdentityId: destinationIdentityId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-application-v1
Delete an application by identifier.
This endpoint deletes an application from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/delete-application-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteApplicationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  deleteApplicationV1(): void {
    const id: number = ; // The unique identifier of the application to delete.
    this.api.deleteApplicationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-identity-collector-v1
Delete identity collector by identifier
This endpoint deletes an identity collector from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-collector-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteIdentityCollectorV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the identity collector to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  deleteIdentityCollectorV1(): void {
    const id: number = ; // The unique identifier of the identity collector to delete.
    this.api.deleteIdentityCollectorV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-schedule-v1
Delete a DAS schedule.
This end-point sends a request to delete a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/delete-schedule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteScheduleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  deleteScheduleV1(): void {
    const id: number = ; // The unique identifier of the schedule to delete.
    this.api.deleteScheduleV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-task-v1
Delete a DAS task.
This end-point sends a request to delete a task in Data Access Security.


[API Spec](https://developer.sailpoint.com/docs/api/delete-task-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteTaskV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  deleteTaskV1(): void {
    const id: number = ; // The unique identifier of the task to delete.
    this.api.deleteTaskV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-application-v1
Retrieve application details by identifier.
This endpoint retrieves the details of a specific application in Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/get-application-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetApplicationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to retrieve. |  [default to undefined]

### Return type

`Observable<ApplicationItem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  getApplicationV1(): void {
    const id: number = ; // The unique identifier of the application to retrieve.
    this.api.getApplicationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-applications-v1
Search applications in DAS.
This endpoint lists all the applications in Data Access Security with optional filtering.

[API Spec](https://developer.sailpoint.com/docs/api/get-applications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetApplicationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<ApplicationItem>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  getApplicationsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getApplicationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-owners-v1
Retrieve owners per application.


[API Spec](https://developer.sailpoint.com/docs/api/get-owners-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetOwnersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**appId** | `number` | The unique identifier of the application for which to retrieve owners. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Observable<Array<DataOwnerModel>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  getOwnersV1(): void {
    const appId: number = ; // The unique identifier of the application for which to retrieve owners.
    const limit: number = ; // Not applicable for this endpoint. Do not use. (optional)
    const offset: number = ; // Not applicable for this endpoint. Do not use. (optional)
    this.api.getOwnersV1({ appId: appId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-schedule-v1
Get a DAS schedule.
This end-point gets a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-schedule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetScheduleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to retrieve. |  [default to undefined]

### Return type

`Observable<ScheduleInfo>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  getScheduleV1(): void {
    const id: number = ; // The unique identifier of the schedule to retrieve.
    this.api.getScheduleV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-schedules-v1
List all schedules.
This end-point lists all the schedules in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-schedules-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSchedulesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<ScheduleInfo>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  getSchedulesV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getSchedulesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-task-v1
Get a DAS task.
This end-point gets a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-task-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTaskV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to retrieve. |  [default to undefined]

### Return type

`Observable<TaskInfo>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  getTaskV1(): void {
    const id: number = ; // The unique identifier of the task to retrieve.
    this.api.getTaskV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-tasks-v1
Lists all DAS tasks.
This end-point lists all the tasks in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-tasks-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTasksV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<TaskInfo>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  getTasksV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getTasksV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-identity-collectors-v1
List identity collectors
This endpoint lists the identity collectors in Data Access Security with optional filtering and pagination.

Sorting is not supported for this endpoint; supplying the `sorters` query parameter results in a validation error.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-collectors-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListIdentityCollectorsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<Identitycollectorlistitem>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  listIdentityCollectorsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listIdentityCollectorsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-application-v1
Update application by identifier.
This endpoint updates an existing application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/put-application-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutApplicationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to update. |  [default to undefined]
**baseCreateApplicationRequest** | `BaseCreateApplicationRequest` | Request body containing the updated details for the application. | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { BaseCreateApplicationRequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  putApplicationV1(): void {
    const id: number = ; // The unique identifier of the application to update.
    const baseCreateApplicationRequest: BaseCreateApplicationRequest = ; // Request body containing the updated details for the application.
    this.api.putApplicationV1({ id: id, baseCreateApplicationRequest: baseCreateApplicationRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-identity-collector-v1
Update identity collector by identifier
This endpoint updates the name of an existing identity collector in Data Access Security. The `sourceId` and `type` cannot be changed and must match the current values.

[API Spec](https://developer.sailpoint.com/docs/api/put-identity-collector-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutIdentityCollectorV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the identity collector to update. |  [default to undefined]
**updateidentitycollectorrequest** | `Updateidentitycollectorrequest` | Request body containing the updated details for the identity collector. | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { Updateidentitycollectorrequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  putIdentityCollectorV1(): void {
    const id: number = ; // The unique identifier of the identity collector to update.
    const updateidentitycollectorrequest: Updateidentitycollectorrequest = ; // Request body containing the updated details for the identity collector.
    this.api.putIdentityCollectorV1({ id: id, updateidentitycollectorrequest: updateidentitycollectorrequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-schedule-v1
Update a schedule.


[API Spec](https://developer.sailpoint.com/docs/api/put-schedule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutScheduleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to update. |  [default to undefined]
**updateScheduleRequest** | `UpdateScheduleRequest` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';
import { UpdateScheduleRequest } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  putScheduleV1(): void {
    const id: number = ; // The unique identifier of the schedule to update.
    const updateScheduleRequest: UpdateScheduleRequest = ; // 
    this.api.putScheduleV1({ id: id, updateScheduleRequest: updateScheduleRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-task-rerun-v1
Rerun a DAS task.
This end-point sends a request to re-run a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/start-task-rerun-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartTaskRerunV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to rerun. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataAccessSecurityService } from 'sailpoint-angular-sdk/data_access_security';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataAccessSecurityService);

  startTaskRerunV1(): void {
    const id: number = ; // The unique identifier of the task to rerun.
    this.api.startTaskRerunV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

