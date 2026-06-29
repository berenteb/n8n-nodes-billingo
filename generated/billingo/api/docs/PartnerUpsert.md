
# PartnerUpsert


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

## Example

```typescript
import type { PartnerUpsert } from ''

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
} satisfies PartnerUpsert

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartnerUpsert
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


