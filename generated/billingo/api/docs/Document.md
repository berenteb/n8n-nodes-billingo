
# Document

Document object representing your invoice.

## Properties

Name | Type
------------ | -------------
`id` | number
`invoiceNumber` | string
`type` | [DocumentType](DocumentType.md)
`cancelled` | boolean
`blockId` | number
`paymentStatus` | [PaymentStatus](PaymentStatus.md)
`paymentMethod` | [PaymentMethod](PaymentMethod.md)
`grossTotal` | number
`currency` | [Currency](Currency.md)
`conversionRate` | number
`invoiceDate` | Date
`fulfillmentDate` | Date
`dueDate` | Date
`paidDate` | Date
`organization` | [DocumentOrganization](DocumentOrganization.md)
`partner` | [Partner](Partner.md)
`electronic` | boolean
`comment` | string
`tags` | Array&lt;string&gt;
`notificationStatus` | [DocumentNotificationStatus](DocumentNotificationStatus.md)
`language` | [DocumentLanguage](DocumentLanguage.md)
`items` | [Array&lt;DocumentItem&gt;](DocumentItem.md)
`summary` | [DocumentSummary](DocumentSummary.md)
`settings` | [DocumentSettings](DocumentSettings.md)

## Example

```typescript
import type { Document } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "invoiceNumber": PREFIX / 2020-000001,
  "type": null,
  "cancelled": null,
  "blockId": null,
  "paymentStatus": null,
  "paymentMethod": null,
  "grossTotal": null,
  "currency": null,
  "conversionRate": null,
  "invoiceDate": null,
  "fulfillmentDate": null,
  "dueDate": null,
  "paidDate": null,
  "organization": null,
  "partner": null,
  "electronic": null,
  "comment": null,
  "tags": null,
  "notificationStatus": null,
  "language": null,
  "items": null,
  "summary": null,
  "settings": null,
} satisfies Document

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Document
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


