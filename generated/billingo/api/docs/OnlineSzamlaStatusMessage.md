
# OnlineSzamlaStatusMessage


## Properties

Name | Type
------------ | -------------
`validationResultCode` | string
`validationErrorCode` | string
`humanReadableMessage` | string

## Example

```typescript
import type { OnlineSzamlaStatusMessage } from ''

// TODO: Update the object below with actual values
const example = {
  "validationResultCode": null,
  "validationErrorCode": null,
  "humanReadableMessage": null,
} satisfies OnlineSzamlaStatusMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnlineSzamlaStatusMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


