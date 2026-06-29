
# DocumentItem


## Properties

Name | Type
------------ | -------------
`productId` | number
`name` | string
`netUnitAmount` | number
`quantity` | number
`netAmount` | number
`grossAmount` | number
`vat` | [Vat](Vat.md)
`vatAmount` | number

## Example

```typescript
import type { DocumentItem } from ''

// TODO: Update the object below with actual values
const example = {
  "productId": null,
  "name": null,
  "netUnitAmount": null,
  "quantity": null,
  "netAmount": null,
  "grossAmount": null,
  "vat": null,
  "vatAmount": null,
} satisfies DocumentItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


