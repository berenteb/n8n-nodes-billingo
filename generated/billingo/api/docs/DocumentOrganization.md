
# DocumentOrganization


## Properties

Name | Type
------------ | -------------
`name` | string
`taxNumber` | string
`bankAccount` | [DocumentBankAccount](DocumentBankAccount.md)
`address` | [Address](Address.md)
`smallTaxpayer` | boolean
`evNumber` | string
`euTaxNumber` | string
`cashSettled` | boolean

## Example

```typescript
import type { DocumentOrganization } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "taxNumber": null,
  "bankAccount": null,
  "address": null,
  "smallTaxpayer": null,
  "evNumber": null,
  "euTaxNumber": null,
  "cashSettled": null,
} satisfies DocumentOrganization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentOrganization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


