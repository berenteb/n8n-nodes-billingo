# DocumentBlockApi

All URIs are relative to *https://api.billingo.hu/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listDocumentBlock**](DocumentBlockApi.md#listdocumentblock) | **GET** /document-blocks | List all document blocks |



## listDocumentBlock

> DocumentBlockList listDocumentBlock(page, perPage)

List all document blocks

Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.

### Example

```ts
import {
  Configuration,
  DocumentBlockApi,
} from '';
import type { ListDocumentBlockRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key
    apiKey: "YOUR API KEY",
  });
  const api = new DocumentBlockApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListDocumentBlockRequest;

  try {
    const data = await api.listDocumentBlock(body);
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

[**DocumentBlockList**](DocumentBlockList.md)

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

