
# PaymentHistory


## Properties

Name | Type
------------ | -------------
`date` | Date
`price` | number
`paymentMethod` | any
`voucherNumber` | string
`conversionRate` | number

## Example

```typescript
import type { PaymentHistory } from ''

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "price": null,
  "paymentMethod": null,
  "voucherNumber": null,
  "conversionRate": null,
} satisfies PaymentHistory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentHistory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


