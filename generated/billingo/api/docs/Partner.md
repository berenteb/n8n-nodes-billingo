
# Partner


## Properties

Name | Type
------------ | -------------
`name` | string
`address` | [Address](Address.md)
`emails` | Array&lt;string&gt;
`taxcode` | string
`iban` | string
`swift` | string
`accountNumber` | string
`phone` | string
`id` | number

## Example

```typescript
import type { Partner } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "address": null,
  "emails": null,
  "taxcode": null,
  "iban": null,
  "swift": null,
  "accountNumber": null,
  "phone": null,
  "id": null,
} satisfies Partner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Partner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


