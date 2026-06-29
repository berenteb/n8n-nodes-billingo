
# DocumentList

A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;Document&gt;](Document.md)
`total` | number
`perPage` | number
`currentPage` | number
`lastPage` | number
`prevPageUrl` | string
`nextPageUrl` | string

## Example

```typescript
import type { DocumentList } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "total": null,
  "perPage": null,
  "currentPage": null,
  "lastPage": null,
  "prevPageUrl": null,
  "nextPageUrl": null,
} satisfies DocumentList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


