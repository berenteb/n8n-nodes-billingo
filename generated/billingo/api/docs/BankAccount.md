
# BankAccount


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`accountNumber` | string
`accountNumberIban` | string
`swift` | string
`currency` | [Currency](Currency.md)
`needQr` | boolean

## Example

```typescript
import type { BankAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "accountNumber": null,
  "accountNumberIban": null,
  "swift": null,
  "currency": null,
  "needQr": null,
} satisfies BankAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


