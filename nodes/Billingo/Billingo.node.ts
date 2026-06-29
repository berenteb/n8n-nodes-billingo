import type {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
} from 'n8n-workflow';
import { jsonParse, NodeApiError, NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';
import {
	billingoGeneratedProperties,
	billingoOperations,
	type BillingoArgumentMetadata,
	type BillingoOperationMetadata,
} from './generated/metadata';

const BILLINGO_BASE_URL = 'https://api.billingo.hu/v3';

function isEmptyValue(value: unknown): boolean {
	return (
		value === undefined ||
		value === null ||
		value === '' ||
		(Array.isArray(value) && value.length === 0)
	);
}

function parseJsonParameter(value: unknown, fieldName: string): unknown {
	if (typeof value !== 'string') return value;

	return jsonParse(value, {
		acceptJSObject: true,
		errorMessage: `${fieldName} must contain valid JSON.`,
	});
}

function normalizeValue(
	value: unknown,
	valueType: string,
	fieldName: string,
	fixedCollectionOptionName?: string,
): unknown {
	if (isEmptyValue(value)) return undefined;
	if (valueType === 'json') return parseJsonParameter(value, fieldName);
	if (valueType === 'fixedCollection') {
		const collection = value as Record<string, unknown>;
		const optionValue = fixedCollectionOptionName ? collection[fixedCollectionOptionName] : undefined;
		return Array.isArray(optionValue) ? optionValue : [];
	}

	return value;
}

function normalizeArrayObjectValue(
	inputMode: unknown,
	fieldsValue: unknown,
	jsonValue: unknown,
	fieldName: string,
	fixedCollectionOptionName?: string,
): unknown {
	if (inputMode === 'json') {
		return normalizeValue(jsonValue, 'json', fieldName);
	}

	return normalizeValue(fieldsValue, 'fixedCollection', fieldName, fixedCollectionOptionName);
}

function findOperation(resource: string, operation: string): BillingoOperationMetadata | undefined {
	return billingoOperations.find(
		(candidate) => candidate.resource === resource && candidate.operation === operation,
	);
}

function isListResponse(value: unknown): value is { data: IDataObject[] } {
	return (
		typeof value === 'object' &&
		value !== null &&
		Array.isArray((value as { data?: unknown }).data)
	);
}

function getArgumentValue(
	executeFunctions: IExecuteFunctions,
	argument: BillingoArgumentMetadata,
	itemIndex: number,
): unknown {
	if (argument.kind === 'parameter') {
		const rawValue = executeFunctions.getNodeParameter(argument.propertyName, itemIndex, undefined);
		return normalizeValue(rawValue, argument.valueType, argument.apiName);
	}

	if (argument.kind === 'jsonBody') {
		const rawValue = executeFunctions.getNodeParameter(argument.propertyName, itemIndex);
		return normalizeValue(
			rawValue,
			argument.valueType ?? 'json',
			'Body',
			argument.fixedCollectionOptionName,
		);
	}

	const body: IDataObject = {};

	for (const field of argument.requiredFields) {
		const value = getRequiredBodyFieldValue(executeFunctions, field, itemIndex);
		body[field.apiName] = value as IDataObject[string];
	}

	const optionalValues = argument.optionalCollection
		? (executeFunctions.getNodeParameter(argument.optionalCollection, itemIndex, {}) as IDataObject)
		: {};

	for (const field of argument.optionalFields) {
		const hasFieldValue =
			Object.prototype.hasOwnProperty.call(optionalValues, field.propertyName) ||
			(field.inputModePropertyName !== undefined &&
				Object.prototype.hasOwnProperty.call(optionalValues, field.inputModePropertyName)) ||
			(field.jsonPropertyName !== undefined &&
				Object.prototype.hasOwnProperty.call(optionalValues, field.jsonPropertyName));
		if (!hasFieldValue) continue;

		const value = getOptionalBodyFieldValue(optionalValues, field);
		if (!isEmptyValue(value)) {
			body[field.apiName] = value as IDataObject[string];
		}
	}

	return body;
}

function getRequiredBodyFieldValue(
	executeFunctions: IExecuteFunctions,
	field: {
		apiName: string;
		propertyName: string;
		valueType: string;
		fixedCollectionOptionName?: string;
		inputModePropertyName?: string;
		jsonPropertyName?: string;
	},
	itemIndex: number,
): unknown {
	if (field.valueType === 'arrayObject') {
		const inputMode = executeFunctions.getNodeParameter(
			field.inputModePropertyName ?? `${field.propertyName}__inputMode`,
			itemIndex,
			'fields',
		);
		const fieldsValue = executeFunctions.getNodeParameter(field.propertyName, itemIndex, {});
		const jsonValue = executeFunctions.getNodeParameter(
			field.jsonPropertyName ?? `${field.propertyName}__json`,
			itemIndex,
			'[]',
		);

		return normalizeArrayObjectValue(
			inputMode,
			fieldsValue,
			jsonValue,
			field.apiName,
			field.fixedCollectionOptionName,
		);
	}

	const rawValue = executeFunctions.getNodeParameter(field.propertyName, itemIndex);
	return normalizeValue(rawValue, field.valueType, field.apiName, field.fixedCollectionOptionName);
}

function getOptionalBodyFieldValue(
	optionalValues: IDataObject,
	field: {
		apiName: string;
		propertyName: string;
		valueType: string;
		fixedCollectionOptionName?: string;
		inputModePropertyName?: string;
		jsonPropertyName?: string;
	},
): unknown {
	if (field.valueType === 'arrayObject') {
		const inputMode = optionalValues[field.inputModePropertyName ?? `${field.propertyName}__inputMode`];
		const fieldsValue = optionalValues[field.propertyName];
		const jsonValue = optionalValues[field.jsonPropertyName ?? `${field.propertyName}__json`];

		return normalizeArrayObjectValue(
			inputMode,
			fieldsValue,
			jsonValue,
			field.apiName,
			field.fixedCollectionOptionName,
		);
	}

	const value = normalizeValue(
		optionalValues[field.propertyName],
		field.valueType,
		field.apiName,
		field.fixedCollectionOptionName,
	);
	return value;
}

export class Billingo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Billingo',
		name: 'billingo',
		icon: { light: 'file:../../icons/billingo.svg', dark: 'file:../../icons/billingo.dark.svg' },
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Billingo API',
		defaults: {
			name: 'Billingo',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'billingoApi',
				required: true,
			},
		],
		properties: billingoGeneratedProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const resource = this.getNodeParameter('resource', itemIndex) as string;
				const operationName = this.getNodeParameter('operation', itemIndex) as string;
				const operation = findOperation(resource, operationName);

				if (!operation) {
					throw new NodeOperationError(
						this.getNode(),
						`Unsupported Billingo operation: ${resource}.${operationName}`,
						{ itemIndex },
					);
				}

				let endpoint = operation.path;
				let body: unknown;
				const qs: IDataObject = {};
				const headers: IDataObject = {};

				for (const argument of operation.arguments) {
					const value = getArgumentValue(this, argument, itemIndex);
					if (argument.kind !== 'parameter') {
						body = value;
						continue;
					}

					if (isEmptyValue(value)) continue;

					if (argument.location === 'path') {
						endpoint = endpoint.replace(
							`{${argument.apiName}}`,
							encodeURIComponent(String(value)),
						);
					} else if (argument.location === 'query') {
						qs[argument.apiName] = value as IDataObject[string];
					} else if (argument.location === 'header') {
						headers[argument.apiName] = value as IDataObject[string];
					}
				}

				const requestOptions: IHttpRequestOptions = {
					method: operation.httpMethod as IHttpRequestMethods,
					url: `${BILLINGO_BASE_URL}${endpoint}`,
					qs,
					headers,
					json: true,
				};

				if (body !== undefined) {
					requestOptions.body = body;
				}

				const responseData = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'billingoApi',
					requestOptions,
				);

				if (operation.operation.startsWith('list') && isListResponse(responseData)) {
					for (const entry of responseData.data) {
						returnData.push({
							json: entry as IDataObject,
							pairedItem: { item: itemIndex },
						});
					}
				} else {
					returnData.push({
						json: responseData as IDataObject,
						pairedItem: { item: itemIndex },
					});
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error instanceof Error ? error.message : String(error),
						},
						pairedItem: { item: itemIndex },
					});
					continue;
				}

				if (error instanceof NodeOperationError) {
					throw new NodeOperationError(this.getNode(), error.message, { itemIndex });
				}

				throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex });
			}
		}

		return [returnData];
	}
}
