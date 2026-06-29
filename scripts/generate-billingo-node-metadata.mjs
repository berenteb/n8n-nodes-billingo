import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const openApiPath = resolve(root, 'openapi.yml');
const outputPath = resolve(root, 'nodes/Billingo/generated/metadata.ts');

const spec = parse(readFileSync(openApiPath, 'utf8'));
const schemas = spec.components?.schemas ?? {};

const methodOrder = ['get', 'post', 'put', 'patch', 'delete'];
const resourceNameOverrides = {
	Document: 'Invoice',
};

function lowerFirst(value) {
	return value.charAt(0).toLowerCase() + value.slice(1);
}

function displayName(value) {
	return value
		.replace(/[_-]+/g, ' ')
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.replace(/\s+/g, ' ')
		.trim()
		.replace(/\b\w/g, (character) => character.toUpperCase());
}

function singularName(value) {
	if (value.endsWith('ies')) return `${value.slice(0, -3)}y`;
	if (value.endsWith('s') && value.length > 1) return value.slice(0, -1);
	return value;
}

function schemaNameFromRef(ref) {
	return ref.split('/').pop();
}

function resolveSchema(schema) {
	if (!schema) return {};
	if (schema.$ref) return schemas[schemaNameFromRef(schema.$ref)] ?? {};
	if (schema.allOf?.length) return Object.assign({}, ...schema.allOf.map(resolveSchema));
	return schema;
}

function schemaDescription(schema, fallback = '') {
	return schema.description ?? fallback;
}

function resourceDisplayName(tag) {
	return resourceNameOverrides[tag] ?? displayName(tag);
}

function operationDisplayName(tag, summary, operationId) {
	const name = summary ?? displayName(operationId);

	if (tag !== 'Document') return name;

	return name
		.replace(/\bdocuments\b/g, 'invoices')
		.replace(/\bDocuments\b/g, 'Invoices')
		.replace(/\bdocument\b/g, 'invoice')
		.replace(/\bDocument\b/g, 'Invoice')
		.replace(/\ba invoice\b/g, 'an invoice')
		.replace(/\bA invoice\b/g, 'An invoice')
		.replace(/\bhistroy\b/g, 'history')
		.replace(/\badresses\b/g, 'addresses');
}

function collectionField(schema, apiName, required = false) {
	const typed = propertyType(schema, apiName);
	const resolved = resolveSchema(schema);

	return {
		displayName: displayName(apiName),
		name: apiName,
		type: typed.type,
		default: typed.default,
		required,
		description: schemaDescription(resolved),
		...(typed.options ? { options: typed.options } : {}),
		...(typed.typeOptions ? { typeOptions: typed.typeOptions } : {}),
		...(typed.placeholder ? { placeholder: typed.placeholder } : {}),
	};
}

function mergeDisplayOptions(displayOptions, parameterName, values) {
	return {
		...displayOptions,
		show: {
			...(displayOptions?.show ?? {}),
			[parameterName]: values,
		},
	};
}

function fixedCollectionType(schema, apiName) {
	const resolved = resolveSchema(schema);
	const itemSchema = resolveSchema(resolved.items);

	if (itemSchema.type !== 'object' || !itemSchema.properties) return undefined;

	const itemOptionName = singularName(apiName);
	const requiredNames = new Set(itemSchema.required ?? []);
	const values = [];

	for (const [fieldName, fieldSchema] of Object.entries(itemSchema.properties)) {
		const field = resolveSchema(fieldSchema);
		if (field.readOnly) continue;
		values.push(collectionField(fieldSchema, fieldName, requiredNames.has(fieldName)));
	}

	if (!values.length) return undefined;

	return {
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				displayName: displayName(itemOptionName),
				name: itemOptionName,
				values,
			},
		],
		fixedCollectionOptionName: itemOptionName,
	};
}

function arrayObjectFieldProperties({
	displayOptions,
	propertyName,
	apiName,
	schema,
	required,
	includeResourceDisplayOptions,
}) {
	const typed = propertyType(schema, apiName);
	const resolved = resolveSchema(schema);
	const modePropertyName = `${propertyName}__inputMode`;
	const jsonPropertyName = `${propertyName}__json`;
	const baseDisplayOptions = includeResourceDisplayOptions ? displayOptions : undefined;

	return {
		properties: [
			{
				displayName: `${displayName(apiName)} Input Mode`,
				name: modePropertyName,
				type: 'options',
				default: 'fields',
				required,
				description: `How to provide ${displayName(apiName).toLowerCase()}`,
				...(baseDisplayOptions ? { displayOptions: baseDisplayOptions } : {}),
				options: [
					{
						name: 'Define Below',
						value: 'fields',
					},
					{
						name: 'JSON/Expression',
						value: 'json',
					},
				],
			},
			{
				displayName: displayName(apiName),
				name: propertyName,
				type: typed.type,
				default: typed.default,
				required,
				description: schemaDescription(resolved),
				displayOptions: mergeDisplayOptions(baseDisplayOptions, modePropertyName, ['fields']),
				...(typed.options ? { options: typed.options } : {}),
				...(typed.typeOptions ? { typeOptions: typed.typeOptions } : {}),
			},
			{
				displayName: `${displayName(apiName)} JSON`,
				name: jsonPropertyName,
				type: 'json',
				default: '[]',
				required,
				description: `Array of ${displayName(apiName).toLowerCase()} to send. This can be an expression that resolves to an array.`,
				displayOptions: mergeDisplayOptions(baseDisplayOptions, modePropertyName, ['json']),
				typeOptions: {
					rows: 5,
				},
			},
		],
		metadata: {
			apiName,
			propertyName,
			valueType: 'arrayObject',
			fixedCollectionOptionName: typed.fixedCollectionOptionName,
			inputModePropertyName: modePropertyName,
			jsonPropertyName,
		},
	};
}

function propertyType(schema, apiName = '') {
	const resolved = resolveSchema(schema);
	const enumValues = resolved.enum;
	const type = resolved.type;

	if (enumValues?.length && enumValues.length <= 120) {
		return {
			type: 'options',
			default: resolved.default ?? enumValues[0] ?? '',
			options: enumValues.map((value) => ({
				name: String(value || 'Empty'),
				value,
			})),
		};
	}

	if (type === 'integer' || type === 'number') {
		return {
			type: 'number',
			default: resolved.default === undefined ? 0 : Number(resolved.default),
			typeOptions: {
				numberPrecision: type === 'integer' ? 0 : 2,
				...(resolved.minimum !== undefined ? { minValue: resolved.minimum } : {}),
				...(resolved.maximum !== undefined ? { maxValue: resolved.maximum } : {}),
			},
		};
	}

	if (type === 'boolean') {
		return {
			type: 'boolean',
			default: resolved.default === undefined ? false : resolved.default === 'true' || resolved.default === true,
		};
	}

	if (type === 'array') {
		const fixedCollection = fixedCollectionType(schema, apiName);
		if (fixedCollection) return fixedCollection;

		return {
			type: 'json',
			default: '[]',
			typeOptions: {
				rows: 5,
			},
		};
	}

	if (type === 'object' || schema.$ref) {
		return {
			type: 'json',
			default: '{}',
			typeOptions: {
				rows: 5,
			},
		};
	}

	return {
		type: 'string',
		default: resolved.default ?? '',
		...(resolved.format === 'date' ? { placeholder: 'YYYY-MM-DD' } : {}),
	};
}

function nodeProperty({ displayOptions, propertyName, apiName, schema, required }) {
	const typed = propertyType(schema, apiName);
	const resolved = resolveSchema(schema);
	const defaultValue =
		!required && typed.type === 'number' && resolved.default === undefined ? '' : typed.default;

	return {
		displayName: displayName(apiName),
		name: propertyName,
		type: typed.type,
		default: defaultValue,
		required,
		displayOptions,
		description: schemaDescription(resolved),
		...(typed.options ? { options: typed.options } : {}),
		...(typed.typeOptions ? { typeOptions: typed.typeOptions } : {}),
		...(typed.placeholder ? { placeholder: typed.placeholder } : {}),
	};
}

function bodyFieldsForSchema(operationId, schema, displayOptions) {
	const resolved = resolveSchema(schema);

	if (resolved.type !== 'object' || !resolved.properties) {
		const propertyName = `${operationId}__body`;
		const typed = propertyType(schema, 'Body');
		return {
			properties: [
				nodeProperty({
					displayOptions,
					propertyName,
					apiName: 'Body',
					schema,
					required: true,
				}),
			],
			argument: {
				kind: 'jsonBody',
				propertyName,
				valueType: typed.type,
				...(typed.fixedCollectionOptionName
					? {
							fixedCollectionOptionName: typed.fixedCollectionOptionName,
						}
					: {}),
			},
		};
	}

	const requiredNames = new Set(resolved.required ?? []);
	const requiredProperties = [];
	const optionalOptions = [];
	const requiredFields = [];
	const optionalFields = [];

	for (const [apiName, fieldSchema] of Object.entries(resolved.properties)) {
		const field = resolveSchema(fieldSchema);
		if (field.readOnly) continue;

		const isRequired = requiredNames.has(apiName);
		const propertyName = `${operationId}__body__${apiName}`;
		const target = isRequired ? requiredFields : optionalFields;
		const generatedPropertyName = isRequired ? propertyName : apiName;
		const typed = propertyType(fieldSchema, apiName);

		if (typed.fixedCollectionOptionName) {
			const arrayObjectField = arrayObjectFieldProperties({
				displayOptions,
				propertyName: generatedPropertyName,
				apiName,
				schema: fieldSchema,
				required: isRequired,
				includeResourceDisplayOptions: isRequired,
			});

			target.push(arrayObjectField.metadata);

			if (isRequired) {
				requiredProperties.push(...arrayObjectField.properties);
			} else {
				optionalOptions.push(...arrayObjectField.properties);
			}
			continue;
		}

		target.push({
			apiName,
			propertyName: generatedPropertyName,
			valueType: typed.type,
		});

		const property = nodeProperty({
			displayOptions,
			propertyName: generatedPropertyName,
			apiName,
			schema: fieldSchema,
			required: isRequired,
		});

		if (isRequired) {
			requiredProperties.push(property);
		} else {
			delete property.displayOptions;
			optionalOptions.push(property);
		}
	}

	const properties = [...requiredProperties];
	let optionalCollection;

	if (optionalOptions.length) {
		optionalCollection = `${operationId}__additionalFields`;
		properties.push({
			displayName: 'Additional Fields',
			name: optionalCollection,
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: optionalOptions,
		});
	}

	return {
		properties,
		argument: {
			kind: 'objectBody',
			requiredFields,
			optionalCollection,
			optionalFields,
		},
	};
}

function requestBodySchema(operation) {
	return operation.requestBody?.content?.['application/json']?.schema;
}

function operationToMetadata(path, method, operation) {
	const tag = operation.tags?.[0];
	const operationId = lowerFirst(operation.operationId);
	const resource = lowerFirst(tag);
	const displayOptions = {
		show: {
			resource: [resource],
			operation: [operationId],
		},
	};

	const properties = [];
	const argumentsMetadata = [];

	for (const parameter of operation.parameters ?? []) {
		const apiName = parameter.name;
		const propertyName = `${operationId}__${parameter.in}__${apiName}`;
		properties.push(
			nodeProperty({
				displayOptions,
				propertyName,
				apiName,
				schema: parameter.schema,
				required: parameter.required ?? false,
			}),
		);
		argumentsMetadata.push({
			kind: 'parameter',
			apiName,
			location: parameter.in,
			propertyName,
			required: parameter.required ?? false,
			valueType: propertyType(parameter.schema, apiName).type,
		});
	}

	const bodySchema = requestBodySchema(operation);
	if (bodySchema) {
		const body = bodyFieldsForSchema(operationId, bodySchema, displayOptions);
		properties.push(...body.properties);
		argumentsMetadata.push(body.argument);
	}

	return {
		metadata: {
			resource,
			resourceName: resourceDisplayName(tag),
			operation: operationId,
			operationName: operationDisplayName(tag, operation.summary, operationId),
			httpMethod: method.toUpperCase(),
			path,
			description: operation.description ?? operation.summary ?? '',
			arguments: argumentsMetadata,
		},
		properties,
	};
}

const operations = [];
const generatedProperties = [];
const resources = new Map();

for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
	for (const method of methodOrder) {
		if (!pathItem[method]?.operationId) continue;
		const operation = operationToMetadata(path, method, pathItem[method]);
		operations.push(operation.metadata);
		generatedProperties.push(...operation.properties);
		resources.set(operation.metadata.resource, operation.metadata.resourceName);
	}
}

const resourceProperties = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [...resources.entries()].map(([value, name]) => ({ name, value })),
		default: operations[0]?.resource,
	},
];

for (const [resource, resourceName] of resources.entries()) {
	resourceProperties.push({
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [resource],
			},
		},
		options: operations
			.filter((operation) => operation.resource === resource)
			.map((operation) => ({
				name: operation.operationName,
				value: operation.operation,
				description: operation.description,
				action: operation.operationName,
			})),
		default: operations.find((operation) => operation.resource === resource)?.operation,
	});
}

const output = `import type { INodeProperties } from 'n8n-workflow';

export type BillingoArgumentMetadata =
\t| {
\t\t\tkind: 'parameter';
\t\t\tapiName: string;
\t\t\tlocation: 'path' | 'query' | 'header' | 'cookie';
\t\t\tpropertyName: string;
\t\t\trequired: boolean;
\t\t\tvalueType: string;
\t\t}
\t| {
\t\t\tkind: 'objectBody';
\t\t\trequiredFields: Array<{
\t\t\t\tapiName: string;
\t\t\t\tpropertyName: string;
\t\t\t\tvalueType: string;
\t\t\t\tfixedCollectionOptionName?: string;
\t\t\t\tinputModePropertyName?: string;
\t\t\t\tjsonPropertyName?: string;
\t\t\t}>;
\t\t\toptionalCollection?: string;
\t\t\toptionalFields: Array<{
\t\t\t\tapiName: string;
\t\t\t\tpropertyName: string;
\t\t\t\tvalueType: string;
\t\t\t\tfixedCollectionOptionName?: string;
\t\t\t\tinputModePropertyName?: string;
\t\t\t\tjsonPropertyName?: string;
\t\t\t}>;
\t\t}
\t| {
\t\t\tkind: 'jsonBody';
\t\t\tpropertyName: string;
\t\t\tvalueType?: string;
\t\t\tfixedCollectionOptionName?: string;
\t\t};

export interface BillingoOperationMetadata {
\tresource: string;
\tresourceName: string;
\toperation: string;
\toperationName: string;
\thttpMethod: string;
\tpath: string;
\tdescription: string;
\targuments: BillingoArgumentMetadata[];
}

export const billingoOperations = ${JSON.stringify(operations, null, '\t')} satisfies BillingoOperationMetadata[];

export const billingoGeneratedProperties = ${JSON.stringify(
	[...resourceProperties, ...generatedProperties],
	null,
	'\t',
)} satisfies INodeProperties[];
`;

writeFileSync(outputPath, output);
