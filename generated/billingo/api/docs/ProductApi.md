# ProductApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProduct**](ProductApi.md#createproduct) | **POST** /products | Create a product |
| [**deleteProduct**](ProductApi.md#deleteproduct) | **DELETE** /products/{id} | Delete a product |
| [**getProduct**](ProductApi.md#getproduct) | **GET** /products/{id} | Retrieve a product |
| [**listProduct**](ProductApi.md#listproduct) | **GET** /products | List all product |
| [**updateProduct**](ProductApi.md#updateproduct) | **PUT** /products/{id} | Update a product |



## createProduct

> Product createProduct(product)

Create a product

Create a new product. Returns a product object if the create is succeded.

### Example

```ts
import {
  Configuration,
  ProductApi,
} from '';
import type { CreateProductRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductApi(config);

  const body = {
    // Product | Product object that you would like to store.
    product: ...,
  } satisfies CreateProductRequest;

  try {
    const data = await api.createProduct(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **product** | [Product](Product.md) | Product object that you would like to store. | |

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Product created successfully. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **403** | Authenticated user doesn\&#39;t have access to the resource. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **422** | Validation errors occured. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProduct

> deleteProduct(id)

Delete a product

Delete an existing product.

### Example

```ts
import {
  Configuration,
  ProductApi,
} from '';
import type { DeleteProductRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductApi(config);

  const body = {
    // number
    id: 56,
  } satisfies DeleteProductRequest;

  try {
    const data = await api.deleteProduct(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Product deleted successfully. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **403** | Authenticated user doesn\&#39;t have access to the resource. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **404** | Non-existent resource is requested. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProduct

> Product getProduct(id)

Retrieve a product

Retrieves the details of an existing product.

### Example

```ts
import {
  Configuration,
  ProductApi,
} from '';
import type { GetProductRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductApi(config);

  const body = {
    // number
    id: 56,
  } satisfies GetProductRequest;

  try {
    const data = await api.getProduct(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success response |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **422** | Validation errors occured. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **404** | Non-existent resource is requested. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listProduct

> ProductList listProduct(page, perPage)

List all product

Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example

```ts
import {
  Configuration,
  ProductApi,
} from '';
import type { ListProductRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListProductRequest;

  try {
    const data = await api.listProduct(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` |  | [Optional] [Defaults to `25`] |

### Return type

[**ProductList**](ProductList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success response |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **422** | Validation errors occured. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateProduct

> Product updateProduct(id, product)

Update a product

Update an existing product. Returns a product object if the update is succeded.

### Example

```ts
import {
  Configuration,
  ProductApi,
} from '';
import type { UpdateProductRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ProductApi(config);

  const body = {
    // number
    id: 56,
    // Product | Product object that you would like to update.
    product: ...,
  } satisfies UpdateProductRequest;

  try {
    const data = await api.updateProduct(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |
| **product** | [Product](Product.md) | Product object that you would like to update. | |

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Product updated successfully. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **403** | Authenticated user doesn\&#39;t have access to the resource. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **422** | Validation errors occured. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **404** | Non-existent resource is requested. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

