
# DocumentSummary


## Properties

Name | Type
------------ | -------------
`netAmount` | number
`netAmountLocal` | number
`grossAmountLocal` | number
`vatAmount` | number
`vatAmountLocal` | number
`vatRateSummary` | [Array&lt;DocumentVatRateSummary&gt;](DocumentVatRateSummary.md)

## Example

```typescript
import type { DocumentSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "netAmount": null,
  "netAmountLocal": null,
  "grossAmountLocal": null,
  "vatAmount": null,
  "vatAmountLocal": null,
  "vatRateSummary": null,
} satisfies DocumentSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


