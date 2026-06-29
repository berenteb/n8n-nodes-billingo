
# DocumentVatRateSummary


## Properties

Name | Type
------------ | -------------
`vatName` | string
`vatPercentage` | number
`vatRateNetAmount` | number
`vatRateVatAmount` | number
`vatRateVatAmountLocal` | number
`vatRateGrossAmount` | number

## Example

```typescript
import type { DocumentVatRateSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "vatName": null,
  "vatPercentage": null,
  "vatRateNetAmount": null,
  "vatRateVatAmount": null,
  "vatRateVatAmountLocal": null,
  "vatRateGrossAmount": null,
} satisfies DocumentVatRateSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentVatRateSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


