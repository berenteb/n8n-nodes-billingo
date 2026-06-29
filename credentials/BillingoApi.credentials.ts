import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BillingoApi implements ICredentialType {
	name = 'billingoApi';

	displayName = 'Billingo API';

	icon: Icon = { light: 'file:../icons/billingo.svg', dark: 'file:../icons/billingo.dark.svg' };

	documentationUrl = 'https://www.billingo.hu/api';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Billingo API v3 key sent as the X-API-KEY header',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.billingo.hu/v3',
			url: '/bank-accounts',
			method: 'GET',
			qs: {
				per_page: 1,
			},
		},
	};
}
