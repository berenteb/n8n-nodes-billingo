# BankAccountApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBankAccount**](BankAccountApi.md#createbankaccount) | **POST** /bank-accounts | Create a bank account |
| [**deleteBankAccount**](BankAccountApi.md#deletebankaccount) | **DELETE** /bank-accounts/{id} | Delete a bank account |
| [**getBankAccount**](BankAccountApi.md#getbankaccount) | **GET** /bank-accounts/{id} | Retrieve a bank account |
| [**listBankAccount**](BankAccountApi.md#listbankaccount) | **GET** /bank-accounts | List all bank account |
| [**updateBankAccount**](BankAccountApi.md#updatebankaccount) | **PUT** /bank-accounts/{id} | Update a bank account |



## createBankAccount

> BankAccount createBankAccount(bankAccount)

Create a bank account

Create a new bank account. Returns a bank account object if the create is succeded.

### Example

```ts
import {
  Configuration,
  BankAccountApi,
} from '';
import type { CreateBankAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BankAccountApi(config);

  const body = {
    // BankAccount | BankAccount object that you would like to store.
    bankAccount: ...,
  } satisfies CreateBankAccountRequest;

  try {
    const data = await api.createBankAccount(body);
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
| **bankAccount** | [BankAccount](BankAccount.md) | BankAccount object that you would like to store. | |

### Return type

[**BankAccount**](BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | BankAccount created successfully. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **403** | Authenticated user doesn\&#39;t have access to the resource. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **422** | Validation errors occured. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBankAccount

> deleteBankAccount(id)

Delete a bank account

Delete an existing bank account.

### Example

```ts
import {
  Configuration,
  BankAccountApi,
} from '';
import type { DeleteBankAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BankAccountApi(config);

  const body = {
    // number
    id: 56,
  } satisfies DeleteBankAccountRequest;

  try {
    const data = await api.deleteBankAccount(body);
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
| **204** | Bank account deleted successfully. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **403** | Authenticated user doesn\&#39;t have access to the resource. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **404** | Non-existent resource is requested. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBankAccount

> BankAccount getBankAccount(id)

Retrieve a bank account

Retrieves the details of an existing bank account.

### Example

```ts
import {
  Configuration,
  BankAccountApi,
} from '';
import type { GetBankAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BankAccountApi(config);

  const body = {
    // number
    id: 56,
  } satisfies GetBankAccountRequest;

  try {
    const data = await api.getBankAccount(body);
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

[**BankAccount**](BankAccount.md)

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


## listBankAccount

> BankAccountList listBankAccount(page, perPage)

List all bank account

Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.

### Example

```ts
import {
  Configuration,
  BankAccountApi,
} from '';
import type { ListBankAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BankAccountApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListBankAccountRequest;

  try {
    const data = await api.listBankAccount(body);
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

[**BankAccountList**](BankAccountList.md)

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


## updateBankAccount

> BankAccount updateBankAccount(id, bankAccount)

Update a bank account

Update an existing bank accounts. Returns a bank account object if the update is succeded.

### Example

```ts
import {
  Configuration,
  BankAccountApi,
} from '';
import type { UpdateBankAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new BankAccountApi(config);

  const body = {
    // number
    id: 56,
    // BankAccount | Bank account object that you would like to update.
    bankAccount: ...,
  } satisfies UpdateBankAccountRequest;

  try {
    const data = await api.updateBankAccount(body);
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
| **bankAccount** | [BankAccount](BankAccount.md) | Bank account object that you would like to update. | |

### Return type

[**BankAccount**](BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bank account updated successfully. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **400** | The request is malformed. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **401** | Authorization information is missing or invalid. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **403** | Authenticated user doesn\&#39;t have access to the resource. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **422** | Validation errors occured. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **500** | Internal server error. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |
| **404** | Non-existent resource is requested. |  * X-RateLimit-Limit - Request limit per hour. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  * Retry-After - How many seconds you have to wait before making new request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

