
# OnlineSzamlaStatus


## Properties

Name | Type
------------ | -------------
`transactionId` | string
`status` | string
`messages` | [Array&lt;OnlineSzamlaStatusMessage&gt;](OnlineSzamlaStatusMessage.md)

## Example

```typescript
import type { OnlineSzamlaStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "transactionId": null,
  "status": null,
  "messages": null,
} satisfies OnlineSzamlaStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnlineSzamlaStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


