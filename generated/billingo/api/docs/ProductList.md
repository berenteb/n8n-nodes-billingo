
# ProductList

A object with a data property that contains an array of up to limit products. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;Product&gt;](Product.md)
`total` | number
`perPage` | number
`currentPage` | number
`lastPage` | number
`prevPageUrl` | string
`nextPageUrl` | string

## Example

```typescript
import type { ProductList } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "total": null,
  "perPage": null,
  "currentPage": null,
  "lastPage": null,
  "prevPageUrl": null,
  "nextPageUrl": null,
} satisfies ProductList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProductList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


