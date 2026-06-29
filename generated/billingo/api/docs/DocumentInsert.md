
# DocumentInsert


## Properties

Name | Type
------------ | -------------
`vendorId` | string
`partnerId` | number
`blockId` | number
`bankAccountId` | number
`type` | [DocumentInsertType](DocumentInsertType.md)
`fulfillmentDate` | Date
`dueDate` | Date
`paymentMethod` | [PaymentMethod](PaymentMethod.md)
`language` | [DocumentLanguage](DocumentLanguage.md)
`currency` | [Currency](Currency.md)
`conversionRate` | number
`electronic` | boolean
`paid` | boolean
`items` | [Array&lt;DocumentItemData&gt;](DocumentItemData.md)
`comment` | string
`settings` | [DocumentSettings](DocumentSettings.md)

## Example

```typescript
import type { DocumentInsert } from ''

// TODO: Update the object below with actual values
const example = {
  "vendorId": null,
  "partnerId": null,
  "blockId": null,
  "bankAccountId": null,
  "type": null,
  "fulfillmentDate": null,
  "dueDate": null,
  "paymentMethod": null,
  "language": null,
  "currency": null,
  "conversionRate": null,
  "electronic": null,
  "paid": null,
  "items": null,
  "comment": null,
  "settings": null,
} satisfies DocumentInsert

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentInsert
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


