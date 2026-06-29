
# ValidationErrorResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`errors` | [Array&lt;ValidationError&gt;](ValidationError.md)

## Example

```typescript
import type { ValidationErrorResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "errors": null,
} satisfies ValidationErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


