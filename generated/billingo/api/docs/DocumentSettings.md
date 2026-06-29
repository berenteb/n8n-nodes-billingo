
# DocumentSettings


## Properties

Name | Type
------------ | -------------
`mediatedService` | boolean
`withoutFinancialFulfillment` | boolean
`onlinePayment` | [OnlinePayment](OnlinePayment.md)
`round` | [Round](Round.md)
`placeId` | number

## Example

```typescript
import type { DocumentSettings } from ''

// TODO: Update the object below with actual values
const example = {
  "mediatedService": null,
  "withoutFinancialFulfillment": null,
  "onlinePayment": null,
  "round": null,
  "placeId": null,
} satisfies DocumentSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


