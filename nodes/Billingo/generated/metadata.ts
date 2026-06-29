import type { INodeProperties } from 'n8n-workflow';

export type BillingoArgumentMetadata =
	| {
			kind: 'parameter';
			apiName: string;
			location: 'path' | 'query' | 'header' | 'cookie';
			propertyName: string;
			required: boolean;
			valueType: string;
		}
	| {
			kind: 'objectBody';
			requiredFields: Array<{
				apiName: string;
				propertyName: string;
				valueType: string;
				fixedCollectionOptionName?: string;
				inputModePropertyName?: string;
				jsonPropertyName?: string;
			}>;
			optionalCollection?: string;
			optionalFields: Array<{
				apiName: string;
				propertyName: string;
				valueType: string;
				fixedCollectionOptionName?: string;
				inputModePropertyName?: string;
				jsonPropertyName?: string;
			}>;
		}
	| {
			kind: 'jsonBody';
			propertyName: string;
			valueType?: string;
			fixedCollectionOptionName?: string;
		};

export interface BillingoOperationMetadata {
	resource: string;
	resourceName: string;
	operation: string;
	operationName: string;
	httpMethod: string;
	path: string;
	description: string;
	arguments: BillingoArgumentMetadata[];
}

export const billingoOperations = [
	{
		"resource": "bankAccount",
		"resourceName": "Bank Account",
		"operation": "listBankAccount",
		"operationName": "List all bank account",
		"httpMethod": "GET",
		"path": "/bank-accounts",
		"description": "Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "page",
				"location": "query",
				"propertyName": "listBankAccount__query__page",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "per_page",
				"location": "query",
				"propertyName": "listBankAccount__query__per_page",
				"required": false,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "bankAccount",
		"resourceName": "Bank Account",
		"operation": "createBankAccount",
		"operationName": "Create a bank account",
		"httpMethod": "POST",
		"path": "/bank-accounts",
		"description": "Create a new bank account. Returns a bank account object if the create is succeded.",
		"arguments": [
			{
				"kind": "objectBody",
				"requiredFields": [
					{
						"apiName": "name",
						"propertyName": "createBankAccount__body__name",
						"valueType": "string"
					},
					{
						"apiName": "account_number",
						"propertyName": "createBankAccount__body__account_number",
						"valueType": "string"
					},
					{
						"apiName": "currency",
						"propertyName": "createBankAccount__body__currency",
						"valueType": "options"
					}
				],
				"optionalCollection": "createBankAccount__additionalFields",
				"optionalFields": [
					{
						"apiName": "account_number_iban",
						"propertyName": "account_number_iban",
						"valueType": "string"
					},
					{
						"apiName": "swift",
						"propertyName": "swift",
						"valueType": "string"
					},
					{
						"apiName": "need_qr",
						"propertyName": "need_qr",
						"valueType": "boolean"
					}
				]
			}
		]
	},
	{
		"resource": "bankAccount",
		"resourceName": "Bank Account",
		"operation": "getBankAccount",
		"operationName": "Retrieve a bank account",
		"httpMethod": "GET",
		"path": "/bank-accounts/{id}",
		"description": "Retrieves the details of an existing bank account.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "getBankAccount__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "bankAccount",
		"resourceName": "Bank Account",
		"operation": "updateBankAccount",
		"operationName": "Update a bank account",
		"httpMethod": "PUT",
		"path": "/bank-accounts/{id}",
		"description": "Update an existing bank accounts. Returns a bank account object if the update is succeded.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "updateBankAccount__path__id",
				"required": true,
				"valueType": "number"
			},
			{
				"kind": "objectBody",
				"requiredFields": [
					{
						"apiName": "name",
						"propertyName": "updateBankAccount__body__name",
						"valueType": "string"
					},
					{
						"apiName": "account_number",
						"propertyName": "updateBankAccount__body__account_number",
						"valueType": "string"
					},
					{
						"apiName": "currency",
						"propertyName": "updateBankAccount__body__currency",
						"valueType": "options"
					}
				],
				"optionalCollection": "updateBankAccount__additionalFields",
				"optionalFields": [
					{
						"apiName": "account_number_iban",
						"propertyName": "account_number_iban",
						"valueType": "string"
					},
					{
						"apiName": "swift",
						"propertyName": "swift",
						"valueType": "string"
					},
					{
						"apiName": "need_qr",
						"propertyName": "need_qr",
						"valueType": "boolean"
					}
				]
			}
		]
	},
	{
		"resource": "bankAccount",
		"resourceName": "Bank Account",
		"operation": "deleteBankAccount",
		"operationName": "Delete a bank account",
		"httpMethod": "DELETE",
		"path": "/bank-accounts/{id}",
		"description": "Delete an existing bank account.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "deleteBankAccount__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "documentBlock",
		"resourceName": "Document Block",
		"operation": "listDocumentBlock",
		"operationName": "List all document blocks",
		"httpMethod": "GET",
		"path": "/document-blocks",
		"description": "Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "page",
				"location": "query",
				"propertyName": "listDocumentBlock__query__page",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "per_page",
				"location": "query",
				"propertyName": "listDocumentBlock__query__per_page",
				"required": false,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "listDocument",
		"operationName": "List all invoices",
		"httpMethod": "GET",
		"path": "/documents",
		"description": "Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "page",
				"location": "query",
				"propertyName": "listDocument__query__page",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "per_page",
				"location": "query",
				"propertyName": "listDocument__query__per_page",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "block_id",
				"location": "query",
				"propertyName": "listDocument__query__block_id",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "partner_id",
				"location": "query",
				"propertyName": "listDocument__query__partner_id",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "payment_method",
				"location": "query",
				"propertyName": "listDocument__query__payment_method",
				"required": false,
				"valueType": "options"
			},
			{
				"kind": "parameter",
				"apiName": "payment_status",
				"location": "query",
				"propertyName": "listDocument__query__payment_status",
				"required": false,
				"valueType": "options"
			},
			{
				"kind": "parameter",
				"apiName": "start_date",
				"location": "query",
				"propertyName": "listDocument__query__start_date",
				"required": false,
				"valueType": "string"
			},
			{
				"kind": "parameter",
				"apiName": "end_date",
				"location": "query",
				"propertyName": "listDocument__query__end_date",
				"required": false,
				"valueType": "string"
			},
			{
				"kind": "parameter",
				"apiName": "start_number",
				"location": "query",
				"propertyName": "listDocument__query__start_number",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "end_number",
				"location": "query",
				"propertyName": "listDocument__query__end_number",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "start_year",
				"location": "query",
				"propertyName": "listDocument__query__start_year",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "end_year",
				"location": "query",
				"propertyName": "listDocument__query__end_year",
				"required": false,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "createDocument",
		"operationName": "Create an invoice",
		"httpMethod": "POST",
		"path": "/documents",
		"description": "Create a new document. Returns a document object if the create is succeded.",
		"arguments": [
			{
				"kind": "objectBody",
				"requiredFields": [
					{
						"apiName": "partner_id",
						"propertyName": "createDocument__body__partner_id",
						"valueType": "number"
					},
					{
						"apiName": "block_id",
						"propertyName": "createDocument__body__block_id",
						"valueType": "number"
					},
					{
						"apiName": "type",
						"propertyName": "createDocument__body__type",
						"valueType": "options"
					},
					{
						"apiName": "fulfillment_date",
						"propertyName": "createDocument__body__fulfillment_date",
						"valueType": "string"
					},
					{
						"apiName": "due_date",
						"propertyName": "createDocument__body__due_date",
						"valueType": "string"
					},
					{
						"apiName": "payment_method",
						"propertyName": "createDocument__body__payment_method",
						"valueType": "options"
					},
					{
						"apiName": "language",
						"propertyName": "createDocument__body__language",
						"valueType": "options"
					},
					{
						"apiName": "currency",
						"propertyName": "createDocument__body__currency",
						"valueType": "options"
					}
				],
				"optionalCollection": "createDocument__additionalFields",
				"optionalFields": [
					{
						"apiName": "vendor_id",
						"propertyName": "vendor_id",
						"valueType": "string"
					},
					{
						"apiName": "bank_account_id",
						"propertyName": "bank_account_id",
						"valueType": "number"
					},
					{
						"apiName": "conversion_rate",
						"propertyName": "conversion_rate",
						"valueType": "number"
					},
					{
						"apiName": "electronic",
						"propertyName": "electronic",
						"valueType": "boolean"
					},
					{
						"apiName": "paid",
						"propertyName": "paid",
						"valueType": "boolean"
					},
					{
						"apiName": "items",
						"propertyName": "items",
						"valueType": "arrayObject",
						"fixedCollectionOptionName": "item",
						"inputModePropertyName": "items__inputMode",
						"jsonPropertyName": "items__json"
					},
					{
						"apiName": "comment",
						"propertyName": "comment",
						"valueType": "string"
					},
					{
						"apiName": "settings",
						"propertyName": "settings",
						"valueType": "json"
					}
				]
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "getDocument",
		"operationName": "Retrieve an invoice",
		"httpMethod": "GET",
		"path": "/documents/{id}",
		"description": "Retrieves the details of an existing document.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "getDocument__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "cancelDocument",
		"operationName": "Cancel an invoice",
		"httpMethod": "POST",
		"path": "/documents/{id}/cancel",
		"description": "Cancel a document. Returns a cancellation document object if the cancellation is succeded.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "cancelDocument__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "createDocumentFromProforma",
		"operationName": "Create an invoice from proforma.",
		"httpMethod": "POST",
		"path": "/documents/{id}/create-from-proforma",
		"description": "Create a new document from proforma. Returns a document object if the create is succeded.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "createDocumentFromProforma__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "downloadDocument",
		"operationName": "Download an invoice in PDF format.",
		"httpMethod": "GET",
		"path": "/documents/{id}/download",
		"description": "Download a document. Returns a document in PDF format.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "downloadDocument__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "getOnlineSzamlaStatus",
		"operationName": "Retrieve an invoice Online Számla status",
		"httpMethod": "GET",
		"path": "/documents/{id}/online-szamla",
		"description": "Retrieves the details of an existing document status.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "getOnlineSzamlaStatus__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "getPayment",
		"operationName": "Retrieve a payment history",
		"httpMethod": "GET",
		"path": "/documents/{id}/payments",
		"description": "Retrieves the details of payment history an existing document.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "getPayment__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "updatePayment",
		"operationName": "Update payment history",
		"httpMethod": "PUT",
		"path": "/documents/{id}/payments",
		"description": "Update payment history an existing document. Returns a payment history object if the update is succeded.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "updatePayment__path__id",
				"required": true,
				"valueType": "number"
			},
			{
				"kind": "jsonBody",
				"propertyName": "updatePayment__body",
				"valueType": "fixedCollection",
				"fixedCollectionOptionName": "Body"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "deletePayment",
		"operationName": "Delete all payment history on invoice",
		"httpMethod": "DELETE",
		"path": "/documents/{id}/payments",
		"description": "Delete all exist payment history on document.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "deletePayment__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "document",
		"resourceName": "Invoice",
		"operation": "sendDocument",
		"operationName": "Send invoice to given email addresses.",
		"httpMethod": "POST",
		"path": "/documents/{id}/send",
		"description": "Returns a list of emails, where the invoice is sent.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "sendDocument__path__id",
				"required": true,
				"valueType": "number"
			},
			{
				"kind": "objectBody",
				"requiredFields": [],
				"optionalCollection": "sendDocument__additionalFields",
				"optionalFields": [
					{
						"apiName": "emails",
						"propertyName": "emails",
						"valueType": "json"
					}
				]
			}
		]
	},
	{
		"resource": "partner",
		"resourceName": "Partner",
		"operation": "listPartner",
		"operationName": "List all partners",
		"httpMethod": "GET",
		"path": "/partners",
		"description": "Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "page",
				"location": "query",
				"propertyName": "listPartner__query__page",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "per_page",
				"location": "query",
				"propertyName": "listPartner__query__per_page",
				"required": false,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "partner",
		"resourceName": "Partner",
		"operation": "createPartner",
		"operationName": "Create a partner",
		"httpMethod": "POST",
		"path": "/partners",
		"description": "Create a new partner. Returns a partner object if the create is succeded.",
		"arguments": [
			{
				"kind": "objectBody",
				"requiredFields": [
					{
						"apiName": "name",
						"propertyName": "createPartner__body__name",
						"valueType": "string"
					},
					{
						"apiName": "address",
						"propertyName": "createPartner__body__address",
						"valueType": "json"
					}
				],
				"optionalCollection": "createPartner__additionalFields",
				"optionalFields": [
					{
						"apiName": "emails",
						"propertyName": "emails",
						"valueType": "json"
					},
					{
						"apiName": "taxcode",
						"propertyName": "taxcode",
						"valueType": "string"
					},
					{
						"apiName": "iban",
						"propertyName": "iban",
						"valueType": "string"
					},
					{
						"apiName": "swift",
						"propertyName": "swift",
						"valueType": "string"
					},
					{
						"apiName": "account_number",
						"propertyName": "account_number",
						"valueType": "string"
					},
					{
						"apiName": "phone",
						"propertyName": "phone",
						"valueType": "string"
					}
				]
			}
		]
	},
	{
		"resource": "partner",
		"resourceName": "Partner",
		"operation": "getPartner",
		"operationName": "Retrieve a partner",
		"httpMethod": "GET",
		"path": "/partners/{id}",
		"description": "Retrieves the details of an existing partner.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "getPartner__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "partner",
		"resourceName": "Partner",
		"operation": "updatePartner",
		"operationName": "Update a partner",
		"httpMethod": "PUT",
		"path": "/partners/{id}",
		"description": "Update an existing partner. Returns a partner object if the update is succeded.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "updatePartner__path__id",
				"required": true,
				"valueType": "number"
			},
			{
				"kind": "objectBody",
				"requiredFields": [
					{
						"apiName": "name",
						"propertyName": "updatePartner__body__name",
						"valueType": "string"
					},
					{
						"apiName": "address",
						"propertyName": "updatePartner__body__address",
						"valueType": "json"
					}
				],
				"optionalCollection": "updatePartner__additionalFields",
				"optionalFields": [
					{
						"apiName": "emails",
						"propertyName": "emails",
						"valueType": "json"
					},
					{
						"apiName": "taxcode",
						"propertyName": "taxcode",
						"valueType": "string"
					},
					{
						"apiName": "iban",
						"propertyName": "iban",
						"valueType": "string"
					},
					{
						"apiName": "swift",
						"propertyName": "swift",
						"valueType": "string"
					},
					{
						"apiName": "account_number",
						"propertyName": "account_number",
						"valueType": "string"
					},
					{
						"apiName": "phone",
						"propertyName": "phone",
						"valueType": "string"
					}
				]
			}
		]
	},
	{
		"resource": "partner",
		"resourceName": "Partner",
		"operation": "deletePartner",
		"operationName": "Delete a partner",
		"httpMethod": "DELETE",
		"path": "/partners/{id}",
		"description": "Delete an existing partner.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "deletePartner__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "product",
		"resourceName": "Product",
		"operation": "listProduct",
		"operationName": "List all product",
		"httpMethod": "GET",
		"path": "/products",
		"description": "Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "page",
				"location": "query",
				"propertyName": "listProduct__query__page",
				"required": false,
				"valueType": "number"
			},
			{
				"kind": "parameter",
				"apiName": "per_page",
				"location": "query",
				"propertyName": "listProduct__query__per_page",
				"required": false,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "product",
		"resourceName": "Product",
		"operation": "createProduct",
		"operationName": "Create a product",
		"httpMethod": "POST",
		"path": "/products",
		"description": "Create a new product. Returns a product object if the create is succeded.",
		"arguments": [
			{
				"kind": "objectBody",
				"requiredFields": [
					{
						"apiName": "name",
						"propertyName": "createProduct__body__name",
						"valueType": "string"
					},
					{
						"apiName": "currency",
						"propertyName": "createProduct__body__currency",
						"valueType": "options"
					},
					{
						"apiName": "vat",
						"propertyName": "createProduct__body__vat",
						"valueType": "string"
					},
					{
						"apiName": "unit",
						"propertyName": "createProduct__body__unit",
						"valueType": "string"
					}
				],
				"optionalCollection": "createProduct__additionalFields",
				"optionalFields": [
					{
						"apiName": "comment",
						"propertyName": "comment",
						"valueType": "string"
					},
					{
						"apiName": "net_unit_price",
						"propertyName": "net_unit_price",
						"valueType": "number"
					},
					{
						"apiName": "general_ledger_number",
						"propertyName": "general_ledger_number",
						"valueType": "string"
					},
					{
						"apiName": "general_ledger_taxcode",
						"propertyName": "general_ledger_taxcode",
						"valueType": "string"
					}
				]
			}
		]
	},
	{
		"resource": "product",
		"resourceName": "Product",
		"operation": "getProduct",
		"operationName": "Retrieve a product",
		"httpMethod": "GET",
		"path": "/products/{id}",
		"description": "Retrieves the details of an existing product.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "getProduct__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	},
	{
		"resource": "product",
		"resourceName": "Product",
		"operation": "updateProduct",
		"operationName": "Update a product",
		"httpMethod": "PUT",
		"path": "/products/{id}",
		"description": "Update an existing product. Returns a product object if the update is succeded.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "updateProduct__path__id",
				"required": true,
				"valueType": "number"
			},
			{
				"kind": "objectBody",
				"requiredFields": [
					{
						"apiName": "name",
						"propertyName": "updateProduct__body__name",
						"valueType": "string"
					},
					{
						"apiName": "currency",
						"propertyName": "updateProduct__body__currency",
						"valueType": "options"
					},
					{
						"apiName": "vat",
						"propertyName": "updateProduct__body__vat",
						"valueType": "string"
					},
					{
						"apiName": "unit",
						"propertyName": "updateProduct__body__unit",
						"valueType": "string"
					}
				],
				"optionalCollection": "updateProduct__additionalFields",
				"optionalFields": [
					{
						"apiName": "comment",
						"propertyName": "comment",
						"valueType": "string"
					},
					{
						"apiName": "net_unit_price",
						"propertyName": "net_unit_price",
						"valueType": "number"
					},
					{
						"apiName": "general_ledger_number",
						"propertyName": "general_ledger_number",
						"valueType": "string"
					},
					{
						"apiName": "general_ledger_taxcode",
						"propertyName": "general_ledger_taxcode",
						"valueType": "string"
					}
				]
			}
		]
	},
	{
		"resource": "product",
		"resourceName": "Product",
		"operation": "deleteProduct",
		"operationName": "Delete a product",
		"httpMethod": "DELETE",
		"path": "/products/{id}",
		"description": "Delete an existing product.",
		"arguments": [
			{
				"kind": "parameter",
				"apiName": "id",
				"location": "path",
				"propertyName": "deleteProduct__path__id",
				"required": true,
				"valueType": "number"
			}
		]
	}
] satisfies BillingoOperationMetadata[];

export const billingoGeneratedProperties = [
	{
		"displayName": "Resource",
		"name": "resource",
		"type": "options",
		"noDataExpression": true,
		"options": [
			{
				"name": "Bank Account",
				"value": "bankAccount"
			},
			{
				"name": "Document Block",
				"value": "documentBlock"
			},
			{
				"name": "Invoice",
				"value": "document"
			},
			{
				"name": "Partner",
				"value": "partner"
			},
			{
				"name": "Product",
				"value": "product"
			}
		],
		"default": "bankAccount"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				]
			}
		},
		"options": [
			{
				"name": "List all bank account",
				"value": "listBankAccount",
				"description": "Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.",
				"action": "List all bank account"
			},
			{
				"name": "Create a bank account",
				"value": "createBankAccount",
				"description": "Create a new bank account. Returns a bank account object if the create is succeded.",
				"action": "Create a bank account"
			},
			{
				"name": "Retrieve a bank account",
				"value": "getBankAccount",
				"description": "Retrieves the details of an existing bank account.",
				"action": "Retrieve a bank account"
			},
			{
				"name": "Update a bank account",
				"value": "updateBankAccount",
				"description": "Update an existing bank accounts. Returns a bank account object if the update is succeded.",
				"action": "Update a bank account"
			},
			{
				"name": "Delete a bank account",
				"value": "deleteBankAccount",
				"description": "Delete an existing bank account.",
				"action": "Delete a bank account"
			}
		],
		"default": "listBankAccount"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"documentBlock"
				]
			}
		},
		"options": [
			{
				"name": "List all document blocks",
				"value": "listDocumentBlock",
				"description": "Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.",
				"action": "List all document blocks"
			}
		],
		"default": "listDocumentBlock"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				]
			}
		},
		"options": [
			{
				"name": "List all invoices",
				"value": "listDocument",
				"description": "Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.",
				"action": "List all invoices"
			},
			{
				"name": "Create an invoice",
				"value": "createDocument",
				"description": "Create a new document. Returns a document object if the create is succeded.",
				"action": "Create an invoice"
			},
			{
				"name": "Retrieve an invoice",
				"value": "getDocument",
				"description": "Retrieves the details of an existing document.",
				"action": "Retrieve an invoice"
			},
			{
				"name": "Cancel an invoice",
				"value": "cancelDocument",
				"description": "Cancel a document. Returns a cancellation document object if the cancellation is succeded.",
				"action": "Cancel an invoice"
			},
			{
				"name": "Create an invoice from proforma.",
				"value": "createDocumentFromProforma",
				"description": "Create a new document from proforma. Returns a document object if the create is succeded.",
				"action": "Create an invoice from proforma."
			},
			{
				"name": "Download an invoice in PDF format.",
				"value": "downloadDocument",
				"description": "Download a document. Returns a document in PDF format.",
				"action": "Download an invoice in PDF format."
			},
			{
				"name": "Retrieve an invoice Online Számla status",
				"value": "getOnlineSzamlaStatus",
				"description": "Retrieves the details of an existing document status.",
				"action": "Retrieve an invoice Online Számla status"
			},
			{
				"name": "Retrieve a payment history",
				"value": "getPayment",
				"description": "Retrieves the details of payment history an existing document.",
				"action": "Retrieve a payment history"
			},
			{
				"name": "Update payment history",
				"value": "updatePayment",
				"description": "Update payment history an existing document. Returns a payment history object if the update is succeded.",
				"action": "Update payment history"
			},
			{
				"name": "Delete all payment history on invoice",
				"value": "deletePayment",
				"description": "Delete all exist payment history on document.",
				"action": "Delete all payment history on invoice"
			},
			{
				"name": "Send invoice to given email addresses.",
				"value": "sendDocument",
				"description": "Returns a list of emails, where the invoice is sent.",
				"action": "Send invoice to given email addresses."
			}
		],
		"default": "listDocument"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				]
			}
		},
		"options": [
			{
				"name": "List all partners",
				"value": "listPartner",
				"description": "Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.",
				"action": "List all partners"
			},
			{
				"name": "Create a partner",
				"value": "createPartner",
				"description": "Create a new partner. Returns a partner object if the create is succeded.",
				"action": "Create a partner"
			},
			{
				"name": "Retrieve a partner",
				"value": "getPartner",
				"description": "Retrieves the details of an existing partner.",
				"action": "Retrieve a partner"
			},
			{
				"name": "Update a partner",
				"value": "updatePartner",
				"description": "Update an existing partner. Returns a partner object if the update is succeded.",
				"action": "Update a partner"
			},
			{
				"name": "Delete a partner",
				"value": "deletePartner",
				"description": "Delete an existing partner.",
				"action": "Delete a partner"
			}
		],
		"default": "listPartner"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				]
			}
		},
		"options": [
			{
				"name": "List all product",
				"value": "listProduct",
				"description": "Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.",
				"action": "List all product"
			},
			{
				"name": "Create a product",
				"value": "createProduct",
				"description": "Create a new product. Returns a product object if the create is succeded.",
				"action": "Create a product"
			},
			{
				"name": "Retrieve a product",
				"value": "getProduct",
				"description": "Retrieves the details of an existing product.",
				"action": "Retrieve a product"
			},
			{
				"name": "Update a product",
				"value": "updateProduct",
				"description": "Update an existing product. Returns a product object if the update is succeded.",
				"action": "Update a product"
			},
			{
				"name": "Delete a product",
				"value": "deleteProduct",
				"description": "Delete an existing product.",
				"action": "Delete a product"
			}
		],
		"default": "listProduct"
	},
	{
		"displayName": "Page",
		"name": "listBankAccount__query__page",
		"type": "number",
		"default": 1,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"listBankAccount"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Per Page",
		"name": "listBankAccount__query__per_page",
		"type": "number",
		"default": 25,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"listBankAccount"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0,
			"minValue": 1,
			"maxValue": 100
		}
	},
	{
		"displayName": "Name",
		"name": "createBankAccount__body__name",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"createBankAccount"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Account Number",
		"name": "createBankAccount__body__account_number",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"createBankAccount"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Currency",
		"name": "createBankAccount__body__currency",
		"type": "options",
		"default": "AUD",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"createBankAccount"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "AUD",
				"value": "AUD"
			},
			{
				"name": "BGN",
				"value": "BGN"
			},
			{
				"name": "BRL",
				"value": "BRL"
			},
			{
				"name": "CAD",
				"value": "CAD"
			},
			{
				"name": "CHF",
				"value": "CHF"
			},
			{
				"name": "CNY",
				"value": "CNY"
			},
			{
				"name": "CZK",
				"value": "CZK"
			},
			{
				"name": "DKK",
				"value": "DKK"
			},
			{
				"name": "EUR",
				"value": "EUR"
			},
			{
				"name": "GBP",
				"value": "GBP"
			},
			{
				"name": "HKD",
				"value": "HKD"
			},
			{
				"name": "HRK",
				"value": "HRK"
			},
			{
				"name": "HUF",
				"value": "HUF"
			},
			{
				"name": "IDR",
				"value": "IDR"
			},
			{
				"name": "ILS",
				"value": "ILS"
			},
			{
				"name": "INR",
				"value": "INR"
			},
			{
				"name": "ISK",
				"value": "ISK"
			},
			{
				"name": "JPY",
				"value": "JPY"
			},
			{
				"name": "KRW",
				"value": "KRW"
			},
			{
				"name": "LTL",
				"value": "LTL"
			},
			{
				"name": "LVL",
				"value": "LVL"
			},
			{
				"name": "MXN",
				"value": "MXN"
			},
			{
				"name": "MYR",
				"value": "MYR"
			},
			{
				"name": "NOK",
				"value": "NOK"
			},
			{
				"name": "NZD",
				"value": "NZD"
			},
			{
				"name": "PHP",
				"value": "PHP"
			},
			{
				"name": "PLN",
				"value": "PLN"
			},
			{
				"name": "RON",
				"value": "RON"
			},
			{
				"name": "RSD",
				"value": "RSD"
			},
			{
				"name": "RUB",
				"value": "RUB"
			},
			{
				"name": "SEK",
				"value": "SEK"
			},
			{
				"name": "SGD",
				"value": "SGD"
			},
			{
				"name": "THB",
				"value": "THB"
			},
			{
				"name": "TRY",
				"value": "TRY"
			},
			{
				"name": "UAH",
				"value": "UAH"
			},
			{
				"name": "USD",
				"value": "USD"
			},
			{
				"name": "ZAR",
				"value": "ZAR"
			}
		]
	},
	{
		"displayName": "Additional Fields",
		"name": "createBankAccount__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"createBankAccount"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Number Iban",
				"name": "account_number_iban",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Swift",
				"name": "swift",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Need Qr",
				"name": "need_qr",
				"type": "boolean",
				"default": false,
				"required": false,
				"description": ""
			}
		]
	},
	{
		"displayName": "Id",
		"name": "getBankAccount__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"getBankAccount"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "updateBankAccount__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"updateBankAccount"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Name",
		"name": "updateBankAccount__body__name",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"updateBankAccount"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Account Number",
		"name": "updateBankAccount__body__account_number",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"updateBankAccount"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Currency",
		"name": "updateBankAccount__body__currency",
		"type": "options",
		"default": "AUD",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"updateBankAccount"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "AUD",
				"value": "AUD"
			},
			{
				"name": "BGN",
				"value": "BGN"
			},
			{
				"name": "BRL",
				"value": "BRL"
			},
			{
				"name": "CAD",
				"value": "CAD"
			},
			{
				"name": "CHF",
				"value": "CHF"
			},
			{
				"name": "CNY",
				"value": "CNY"
			},
			{
				"name": "CZK",
				"value": "CZK"
			},
			{
				"name": "DKK",
				"value": "DKK"
			},
			{
				"name": "EUR",
				"value": "EUR"
			},
			{
				"name": "GBP",
				"value": "GBP"
			},
			{
				"name": "HKD",
				"value": "HKD"
			},
			{
				"name": "HRK",
				"value": "HRK"
			},
			{
				"name": "HUF",
				"value": "HUF"
			},
			{
				"name": "IDR",
				"value": "IDR"
			},
			{
				"name": "ILS",
				"value": "ILS"
			},
			{
				"name": "INR",
				"value": "INR"
			},
			{
				"name": "ISK",
				"value": "ISK"
			},
			{
				"name": "JPY",
				"value": "JPY"
			},
			{
				"name": "KRW",
				"value": "KRW"
			},
			{
				"name": "LTL",
				"value": "LTL"
			},
			{
				"name": "LVL",
				"value": "LVL"
			},
			{
				"name": "MXN",
				"value": "MXN"
			},
			{
				"name": "MYR",
				"value": "MYR"
			},
			{
				"name": "NOK",
				"value": "NOK"
			},
			{
				"name": "NZD",
				"value": "NZD"
			},
			{
				"name": "PHP",
				"value": "PHP"
			},
			{
				"name": "PLN",
				"value": "PLN"
			},
			{
				"name": "RON",
				"value": "RON"
			},
			{
				"name": "RSD",
				"value": "RSD"
			},
			{
				"name": "RUB",
				"value": "RUB"
			},
			{
				"name": "SEK",
				"value": "SEK"
			},
			{
				"name": "SGD",
				"value": "SGD"
			},
			{
				"name": "THB",
				"value": "THB"
			},
			{
				"name": "TRY",
				"value": "TRY"
			},
			{
				"name": "UAH",
				"value": "UAH"
			},
			{
				"name": "USD",
				"value": "USD"
			},
			{
				"name": "ZAR",
				"value": "ZAR"
			}
		]
	},
	{
		"displayName": "Additional Fields",
		"name": "updateBankAccount__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"updateBankAccount"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Number Iban",
				"name": "account_number_iban",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Swift",
				"name": "swift",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Need Qr",
				"name": "need_qr",
				"type": "boolean",
				"default": false,
				"required": false,
				"description": ""
			}
		]
	},
	{
		"displayName": "Id",
		"name": "deleteBankAccount__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"bankAccount"
				],
				"operation": [
					"deleteBankAccount"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Page",
		"name": "listDocumentBlock__query__page",
		"type": "number",
		"default": 1,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"documentBlock"
				],
				"operation": [
					"listDocumentBlock"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Per Page",
		"name": "listDocumentBlock__query__per_page",
		"type": "number",
		"default": 25,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"documentBlock"
				],
				"operation": [
					"listDocumentBlock"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0,
			"minValue": 1,
			"maxValue": 100
		}
	},
	{
		"displayName": "Page",
		"name": "listDocument__query__page",
		"type": "number",
		"default": 1,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Per Page",
		"name": "listDocument__query__per_page",
		"type": "number",
		"default": 25,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0,
			"minValue": 1,
			"maxValue": 100
		}
	},
	{
		"displayName": "Block Id",
		"name": "listDocument__query__block_id",
		"type": "number",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Partner Id",
		"name": "listDocument__query__partner_id",
		"type": "number",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Payment Method",
		"name": "listDocument__query__payment_method",
		"type": "options",
		"default": "aruhitel",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "aruhitel",
				"value": "aruhitel"
			},
			{
				"name": "bankcard",
				"value": "bankcard"
			},
			{
				"name": "barion",
				"value": "barion"
			},
			{
				"name": "barter",
				"value": "barter"
			},
			{
				"name": "cash",
				"value": "cash"
			},
			{
				"name": "cash_on_delivery",
				"value": "cash_on_delivery"
			},
			{
				"name": "coupon",
				"value": "coupon"
			},
			{
				"name": "elore_utalas",
				"value": "elore_utalas"
			},
			{
				"name": "ep_kartya",
				"value": "ep_kartya"
			},
			{
				"name": "kompenzacio",
				"value": "kompenzacio"
			},
			{
				"name": "levonas",
				"value": "levonas"
			},
			{
				"name": "online_bankcard",
				"value": "online_bankcard"
			},
			{
				"name": "payoneer",
				"value": "payoneer"
			},
			{
				"name": "paypal",
				"value": "paypal"
			},
			{
				"name": "paypal_utolag",
				"value": "paypal_utolag"
			},
			{
				"name": "payu",
				"value": "payu"
			},
			{
				"name": "pick_pack_pont",
				"value": "pick_pack_pont"
			},
			{
				"name": "postai_csekk",
				"value": "postai_csekk"
			},
			{
				"name": "postautalvany",
				"value": "postautalvany"
			},
			{
				"name": "skrill",
				"value": "skrill"
			},
			{
				"name": "szep_card",
				"value": "szep_card"
			},
			{
				"name": "transferwise",
				"value": "transferwise"
			},
			{
				"name": "upwork",
				"value": "upwork"
			},
			{
				"name": "utalvany",
				"value": "utalvany"
			},
			{
				"name": "valto",
				"value": "valto"
			},
			{
				"name": "wire_transfer",
				"value": "wire_transfer"
			}
		]
	},
	{
		"displayName": "Payment Status",
		"name": "listDocument__query__payment_status",
		"type": "options",
		"default": "expired",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "expired",
				"value": "expired"
			},
			{
				"name": "none",
				"value": "none"
			},
			{
				"name": "outstanding",
				"value": "outstanding"
			},
			{
				"name": "paid",
				"value": "paid"
			},
			{
				"name": "partially_paid",
				"value": "partially_paid"
			}
		]
	},
	{
		"displayName": "Start Date",
		"name": "listDocument__query__start_date",
		"type": "string",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"placeholder": "YYYY-MM-DD"
	},
	{
		"displayName": "End Date",
		"name": "listDocument__query__end_date",
		"type": "string",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"placeholder": "YYYY-MM-DD"
	},
	{
		"displayName": "Start Number",
		"name": "listDocument__query__start_number",
		"type": "number",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "End Number",
		"name": "listDocument__query__end_number",
		"type": "number",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Start Year",
		"name": "listDocument__query__start_year",
		"type": "number",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "End Year",
		"name": "listDocument__query__end_year",
		"type": "number",
		"default": "",
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"listDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Partner Id",
		"name": "createDocument__body__partner_id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Block Id",
		"name": "createDocument__body__block_id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Type",
		"name": "createDocument__body__type",
		"type": "options",
		"default": "advance",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "advance",
				"value": "advance"
			},
			{
				"name": "draft",
				"value": "draft"
			},
			{
				"name": "invoice",
				"value": "invoice"
			},
			{
				"name": "proforma",
				"value": "proforma"
			}
		]
	},
	{
		"displayName": "Fulfillment Date",
		"name": "createDocument__body__fulfillment_date",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"placeholder": "YYYY-MM-DD"
	},
	{
		"displayName": "Due Date",
		"name": "createDocument__body__due_date",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"placeholder": "YYYY-MM-DD"
	},
	{
		"displayName": "Payment Method",
		"name": "createDocument__body__payment_method",
		"type": "options",
		"default": "aruhitel",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "aruhitel",
				"value": "aruhitel"
			},
			{
				"name": "bankcard",
				"value": "bankcard"
			},
			{
				"name": "barion",
				"value": "barion"
			},
			{
				"name": "barter",
				"value": "barter"
			},
			{
				"name": "cash",
				"value": "cash"
			},
			{
				"name": "cash_on_delivery",
				"value": "cash_on_delivery"
			},
			{
				"name": "coupon",
				"value": "coupon"
			},
			{
				"name": "elore_utalas",
				"value": "elore_utalas"
			},
			{
				"name": "ep_kartya",
				"value": "ep_kartya"
			},
			{
				"name": "kompenzacio",
				"value": "kompenzacio"
			},
			{
				"name": "levonas",
				"value": "levonas"
			},
			{
				"name": "online_bankcard",
				"value": "online_bankcard"
			},
			{
				"name": "payoneer",
				"value": "payoneer"
			},
			{
				"name": "paypal",
				"value": "paypal"
			},
			{
				"name": "paypal_utolag",
				"value": "paypal_utolag"
			},
			{
				"name": "payu",
				"value": "payu"
			},
			{
				"name": "pick_pack_pont",
				"value": "pick_pack_pont"
			},
			{
				"name": "postai_csekk",
				"value": "postai_csekk"
			},
			{
				"name": "postautalvany",
				"value": "postautalvany"
			},
			{
				"name": "skrill",
				"value": "skrill"
			},
			{
				"name": "szep_card",
				"value": "szep_card"
			},
			{
				"name": "transferwise",
				"value": "transferwise"
			},
			{
				"name": "upwork",
				"value": "upwork"
			},
			{
				"name": "utalvany",
				"value": "utalvany"
			},
			{
				"name": "valto",
				"value": "valto"
			},
			{
				"name": "wire_transfer",
				"value": "wire_transfer"
			}
		]
	},
	{
		"displayName": "Language",
		"name": "createDocument__body__language",
		"type": "options",
		"default": "de",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "de",
				"value": "de"
			},
			{
				"name": "en",
				"value": "en"
			},
			{
				"name": "fr",
				"value": "fr"
			},
			{
				"name": "hr",
				"value": "hr"
			},
			{
				"name": "hu",
				"value": "hu"
			},
			{
				"name": "it",
				"value": "it"
			},
			{
				"name": "ro",
				"value": "ro"
			},
			{
				"name": "sk",
				"value": "sk"
			}
		]
	},
	{
		"displayName": "Currency",
		"name": "createDocument__body__currency",
		"type": "options",
		"default": "AUD",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "AUD",
				"value": "AUD"
			},
			{
				"name": "BGN",
				"value": "BGN"
			},
			{
				"name": "BRL",
				"value": "BRL"
			},
			{
				"name": "CAD",
				"value": "CAD"
			},
			{
				"name": "CHF",
				"value": "CHF"
			},
			{
				"name": "CNY",
				"value": "CNY"
			},
			{
				"name": "CZK",
				"value": "CZK"
			},
			{
				"name": "DKK",
				"value": "DKK"
			},
			{
				"name": "EUR",
				"value": "EUR"
			},
			{
				"name": "GBP",
				"value": "GBP"
			},
			{
				"name": "HKD",
				"value": "HKD"
			},
			{
				"name": "HRK",
				"value": "HRK"
			},
			{
				"name": "HUF",
				"value": "HUF"
			},
			{
				"name": "IDR",
				"value": "IDR"
			},
			{
				"name": "ILS",
				"value": "ILS"
			},
			{
				"name": "INR",
				"value": "INR"
			},
			{
				"name": "ISK",
				"value": "ISK"
			},
			{
				"name": "JPY",
				"value": "JPY"
			},
			{
				"name": "KRW",
				"value": "KRW"
			},
			{
				"name": "LTL",
				"value": "LTL"
			},
			{
				"name": "LVL",
				"value": "LVL"
			},
			{
				"name": "MXN",
				"value": "MXN"
			},
			{
				"name": "MYR",
				"value": "MYR"
			},
			{
				"name": "NOK",
				"value": "NOK"
			},
			{
				"name": "NZD",
				"value": "NZD"
			},
			{
				"name": "PHP",
				"value": "PHP"
			},
			{
				"name": "PLN",
				"value": "PLN"
			},
			{
				"name": "RON",
				"value": "RON"
			},
			{
				"name": "RSD",
				"value": "RSD"
			},
			{
				"name": "RUB",
				"value": "RUB"
			},
			{
				"name": "SEK",
				"value": "SEK"
			},
			{
				"name": "SGD",
				"value": "SGD"
			},
			{
				"name": "THB",
				"value": "THB"
			},
			{
				"name": "TRY",
				"value": "TRY"
			},
			{
				"name": "UAH",
				"value": "UAH"
			},
			{
				"name": "USD",
				"value": "USD"
			},
			{
				"name": "ZAR",
				"value": "ZAR"
			}
		]
	},
	{
		"displayName": "Additional Fields",
		"name": "createDocument__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocument"
				]
			}
		},
		"options": [
			{
				"displayName": "Vendor Id",
				"name": "vendor_id",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Bank Account Id",
				"name": "bank_account_id",
				"type": "number",
				"default": "",
				"required": false,
				"description": "",
				"typeOptions": {
					"numberPrecision": 0
				}
			},
			{
				"displayName": "Conversion Rate",
				"name": "conversion_rate",
				"type": "number",
				"default": 1,
				"required": false,
				"description": "",
				"typeOptions": {
					"numberPrecision": 2
				}
			},
			{
				"displayName": "Electronic",
				"name": "electronic",
				"type": "boolean",
				"default": false,
				"required": false,
				"description": ""
			},
			{
				"displayName": "Paid",
				"name": "paid",
				"type": "boolean",
				"default": false,
				"required": false,
				"description": ""
			},
			{
				"displayName": "Items Input Mode",
				"name": "items__inputMode",
				"type": "options",
				"default": "fields",
				"required": false,
				"description": "How to provide items",
				"options": [
					{
						"name": "Define Below",
						"value": "fields"
					},
					{
						"name": "JSON/Expression",
						"value": "json"
					}
				]
			},
			{
				"displayName": "Items",
				"name": "items",
				"type": "fixedCollection",
				"default": {},
				"required": false,
				"description": "",
				"displayOptions": {
					"show": {
						"items__inputMode": [
							"fields"
						]
					}
				},
				"options": [
					{
						"displayName": "Item",
						"name": "item",
						"values": [
							{
								"displayName": "Product Id",
								"name": "product_id",
								"type": "number",
								"default": 0,
								"required": true,
								"description": "",
								"typeOptions": {
									"numberPrecision": 0
								}
							},
							{
								"displayName": "Quantity",
								"name": "quantity",
								"type": "number",
								"default": 0,
								"required": true,
								"description": "",
								"typeOptions": {
									"numberPrecision": 2
								}
							}
						]
					}
				],
				"typeOptions": {
					"multipleValues": true
				}
			},
			{
				"displayName": "Items JSON",
				"name": "items__json",
				"type": "json",
				"default": "[]",
				"required": false,
				"description": "Array of items to send. This can be an expression that resolves to an array.",
				"displayOptions": {
					"show": {
						"items__inputMode": [
							"json"
						]
					}
				},
				"typeOptions": {
					"rows": 5
				}
			},
			{
				"displayName": "Comment",
				"name": "comment",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Settings",
				"name": "settings",
				"type": "json",
				"default": "{}",
				"required": false,
				"description": "",
				"typeOptions": {
					"rows": 5
				}
			}
		]
	},
	{
		"displayName": "Id",
		"name": "getDocument__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"getDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "cancelDocument__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"cancelDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "createDocumentFromProforma__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"createDocumentFromProforma"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "downloadDocument__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"downloadDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "getOnlineSzamlaStatus__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"getOnlineSzamlaStatus"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "getPayment__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"getPayment"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "updatePayment__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"updatePayment"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Body",
		"name": "updatePayment__body",
		"type": "fixedCollection",
		"default": {},
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"updatePayment"
				]
			}
		},
		"description": "",
		"options": [
			{
				"displayName": "Body",
				"name": "Body",
				"values": [
					{
						"displayName": "Date",
						"name": "date",
						"type": "string",
						"default": "",
						"required": true,
						"description": ""
					},
					{
						"displayName": "Price",
						"name": "price",
						"type": "number",
						"default": 0,
						"required": true,
						"description": "",
						"typeOptions": {
							"numberPrecision": 2
						}
					},
					{
						"displayName": "Payment Method",
						"name": "payment_method",
						"type": "string",
						"default": "",
						"required": true,
						"description": ""
					},
					{
						"displayName": "Voucher Number",
						"name": "voucher_number",
						"type": "string",
						"default": "",
						"required": false,
						"description": ""
					},
					{
						"displayName": "Conversion Rate",
						"name": "conversion_rate",
						"type": "number",
						"default": 0,
						"required": false,
						"description": "",
						"typeOptions": {
							"numberPrecision": 2
						}
					}
				]
			}
		],
		"typeOptions": {
			"multipleValues": true
		}
	},
	{
		"displayName": "Id",
		"name": "deletePayment__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"deletePayment"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "sendDocument__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"sendDocument"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Additional Fields",
		"name": "sendDocument__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"document"
				],
				"operation": [
					"sendDocument"
				]
			}
		},
		"options": [
			{
				"displayName": "Emails",
				"name": "emails",
				"type": "json",
				"default": "[]",
				"required": false,
				"description": "",
				"typeOptions": {
					"rows": 5
				}
			}
		]
	},
	{
		"displayName": "Page",
		"name": "listPartner__query__page",
		"type": "number",
		"default": 1,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"listPartner"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Per Page",
		"name": "listPartner__query__per_page",
		"type": "number",
		"default": 25,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"listPartner"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0,
			"minValue": 1,
			"maxValue": 100
		}
	},
	{
		"displayName": "Name",
		"name": "createPartner__body__name",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"createPartner"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Address",
		"name": "createPartner__body__address",
		"type": "json",
		"default": "{}",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"createPartner"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"rows": 5
		}
	},
	{
		"displayName": "Additional Fields",
		"name": "createPartner__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"createPartner"
				]
			}
		},
		"options": [
			{
				"displayName": "Emails",
				"name": "emails",
				"type": "json",
				"default": "[]",
				"required": false,
				"description": "",
				"typeOptions": {
					"rows": 5
				}
			},
			{
				"displayName": "Taxcode",
				"name": "taxcode",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Iban",
				"name": "iban",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Swift",
				"name": "swift",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Account Number",
				"name": "account_number",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Phone",
				"name": "phone",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			}
		]
	},
	{
		"displayName": "Id",
		"name": "getPartner__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"getPartner"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "updatePartner__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"updatePartner"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Name",
		"name": "updatePartner__body__name",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"updatePartner"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Address",
		"name": "updatePartner__body__address",
		"type": "json",
		"default": "{}",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"updatePartner"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"rows": 5
		}
	},
	{
		"displayName": "Additional Fields",
		"name": "updatePartner__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"updatePartner"
				]
			}
		},
		"options": [
			{
				"displayName": "Emails",
				"name": "emails",
				"type": "json",
				"default": "[]",
				"required": false,
				"description": "",
				"typeOptions": {
					"rows": 5
				}
			},
			{
				"displayName": "Taxcode",
				"name": "taxcode",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Iban",
				"name": "iban",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Swift",
				"name": "swift",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Account Number",
				"name": "account_number",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Phone",
				"name": "phone",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			}
		]
	},
	{
		"displayName": "Id",
		"name": "deletePartner__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"partner"
				],
				"operation": [
					"deletePartner"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Page",
		"name": "listProduct__query__page",
		"type": "number",
		"default": 1,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"listProduct"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Per Page",
		"name": "listProduct__query__per_page",
		"type": "number",
		"default": 25,
		"required": false,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"listProduct"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0,
			"minValue": 1,
			"maxValue": 100
		}
	},
	{
		"displayName": "Name",
		"name": "createProduct__body__name",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"createProduct"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Currency",
		"name": "createProduct__body__currency",
		"type": "options",
		"default": "AUD",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"createProduct"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "AUD",
				"value": "AUD"
			},
			{
				"name": "BGN",
				"value": "BGN"
			},
			{
				"name": "BRL",
				"value": "BRL"
			},
			{
				"name": "CAD",
				"value": "CAD"
			},
			{
				"name": "CHF",
				"value": "CHF"
			},
			{
				"name": "CNY",
				"value": "CNY"
			},
			{
				"name": "CZK",
				"value": "CZK"
			},
			{
				"name": "DKK",
				"value": "DKK"
			},
			{
				"name": "EUR",
				"value": "EUR"
			},
			{
				"name": "GBP",
				"value": "GBP"
			},
			{
				"name": "HKD",
				"value": "HKD"
			},
			{
				"name": "HRK",
				"value": "HRK"
			},
			{
				"name": "HUF",
				"value": "HUF"
			},
			{
				"name": "IDR",
				"value": "IDR"
			},
			{
				"name": "ILS",
				"value": "ILS"
			},
			{
				"name": "INR",
				"value": "INR"
			},
			{
				"name": "ISK",
				"value": "ISK"
			},
			{
				"name": "JPY",
				"value": "JPY"
			},
			{
				"name": "KRW",
				"value": "KRW"
			},
			{
				"name": "LTL",
				"value": "LTL"
			},
			{
				"name": "LVL",
				"value": "LVL"
			},
			{
				"name": "MXN",
				"value": "MXN"
			},
			{
				"name": "MYR",
				"value": "MYR"
			},
			{
				"name": "NOK",
				"value": "NOK"
			},
			{
				"name": "NZD",
				"value": "NZD"
			},
			{
				"name": "PHP",
				"value": "PHP"
			},
			{
				"name": "PLN",
				"value": "PLN"
			},
			{
				"name": "RON",
				"value": "RON"
			},
			{
				"name": "RSD",
				"value": "RSD"
			},
			{
				"name": "RUB",
				"value": "RUB"
			},
			{
				"name": "SEK",
				"value": "SEK"
			},
			{
				"name": "SGD",
				"value": "SGD"
			},
			{
				"name": "THB",
				"value": "THB"
			},
			{
				"name": "TRY",
				"value": "TRY"
			},
			{
				"name": "UAH",
				"value": "UAH"
			},
			{
				"name": "USD",
				"value": "USD"
			},
			{
				"name": "ZAR",
				"value": "ZAR"
			}
		]
	},
	{
		"displayName": "Vat",
		"name": "createProduct__body__vat",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"createProduct"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Unit",
		"name": "createProduct__body__unit",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"createProduct"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Additional Fields",
		"name": "createProduct__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"createProduct"
				]
			}
		},
		"options": [
			{
				"displayName": "Comment",
				"name": "comment",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Net Unit Price",
				"name": "net_unit_price",
				"type": "number",
				"default": "",
				"required": false,
				"description": "",
				"typeOptions": {
					"numberPrecision": 2
				}
			},
			{
				"displayName": "General Ledger Number",
				"name": "general_ledger_number",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "General Ledger Taxcode",
				"name": "general_ledger_taxcode",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			}
		]
	},
	{
		"displayName": "Id",
		"name": "getProduct__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"getProduct"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Id",
		"name": "updateProduct__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"updateProduct"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	},
	{
		"displayName": "Name",
		"name": "updateProduct__body__name",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"updateProduct"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Currency",
		"name": "updateProduct__body__currency",
		"type": "options",
		"default": "AUD",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"updateProduct"
				]
			}
		},
		"description": "",
		"options": [
			{
				"name": "AUD",
				"value": "AUD"
			},
			{
				"name": "BGN",
				"value": "BGN"
			},
			{
				"name": "BRL",
				"value": "BRL"
			},
			{
				"name": "CAD",
				"value": "CAD"
			},
			{
				"name": "CHF",
				"value": "CHF"
			},
			{
				"name": "CNY",
				"value": "CNY"
			},
			{
				"name": "CZK",
				"value": "CZK"
			},
			{
				"name": "DKK",
				"value": "DKK"
			},
			{
				"name": "EUR",
				"value": "EUR"
			},
			{
				"name": "GBP",
				"value": "GBP"
			},
			{
				"name": "HKD",
				"value": "HKD"
			},
			{
				"name": "HRK",
				"value": "HRK"
			},
			{
				"name": "HUF",
				"value": "HUF"
			},
			{
				"name": "IDR",
				"value": "IDR"
			},
			{
				"name": "ILS",
				"value": "ILS"
			},
			{
				"name": "INR",
				"value": "INR"
			},
			{
				"name": "ISK",
				"value": "ISK"
			},
			{
				"name": "JPY",
				"value": "JPY"
			},
			{
				"name": "KRW",
				"value": "KRW"
			},
			{
				"name": "LTL",
				"value": "LTL"
			},
			{
				"name": "LVL",
				"value": "LVL"
			},
			{
				"name": "MXN",
				"value": "MXN"
			},
			{
				"name": "MYR",
				"value": "MYR"
			},
			{
				"name": "NOK",
				"value": "NOK"
			},
			{
				"name": "NZD",
				"value": "NZD"
			},
			{
				"name": "PHP",
				"value": "PHP"
			},
			{
				"name": "PLN",
				"value": "PLN"
			},
			{
				"name": "RON",
				"value": "RON"
			},
			{
				"name": "RSD",
				"value": "RSD"
			},
			{
				"name": "RUB",
				"value": "RUB"
			},
			{
				"name": "SEK",
				"value": "SEK"
			},
			{
				"name": "SGD",
				"value": "SGD"
			},
			{
				"name": "THB",
				"value": "THB"
			},
			{
				"name": "TRY",
				"value": "TRY"
			},
			{
				"name": "UAH",
				"value": "UAH"
			},
			{
				"name": "USD",
				"value": "USD"
			},
			{
				"name": "ZAR",
				"value": "ZAR"
			}
		]
	},
	{
		"displayName": "Vat",
		"name": "updateProduct__body__vat",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"updateProduct"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Unit",
		"name": "updateProduct__body__unit",
		"type": "string",
		"default": "",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"updateProduct"
				]
			}
		},
		"description": ""
	},
	{
		"displayName": "Additional Fields",
		"name": "updateProduct__additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"updateProduct"
				]
			}
		},
		"options": [
			{
				"displayName": "Comment",
				"name": "comment",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "Net Unit Price",
				"name": "net_unit_price",
				"type": "number",
				"default": "",
				"required": false,
				"description": "",
				"typeOptions": {
					"numberPrecision": 2
				}
			},
			{
				"displayName": "General Ledger Number",
				"name": "general_ledger_number",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			},
			{
				"displayName": "General Ledger Taxcode",
				"name": "general_ledger_taxcode",
				"type": "string",
				"default": "",
				"required": false,
				"description": ""
			}
		]
	},
	{
		"displayName": "Id",
		"name": "deleteProduct__path__id",
		"type": "number",
		"default": 0,
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"product"
				],
				"operation": [
					"deleteProduct"
				]
			}
		},
		"description": "",
		"typeOptions": {
			"numberPrecision": 0
		}
	}
] satisfies INodeProperties[];
