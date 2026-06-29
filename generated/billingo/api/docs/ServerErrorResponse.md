
# ServerErrorResponse


## Properties

Name | Type
------------ | -------------
`error` | [ServerError](ServerError.md)

## Example

```typescript
import type { ServerErrorResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "error": null,
} satisfies ServerErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServerErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


