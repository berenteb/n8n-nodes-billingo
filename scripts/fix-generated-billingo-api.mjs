import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const generatedRoot = resolve(root, 'generated/billingo/api');

const legacyAxiosConfigurationPath = resolve(generatedRoot, 'configuration.ts');
if (existsSync(legacyAxiosConfigurationPath)) {
	let configuration = readFileSync(legacyAxiosConfigurationPath, 'utf8');
	configuration = configuration
		.replaceAll('baseOptions?: any;', 'baseOptions?: Record<string, unknown>;')
		.replaceAll('formDataCtor?: new () => any;', 'formDataCtor?: new () => unknown;');
	writeFileSync(legacyAxiosConfigurationPath, configuration);
}

for (const indexPath of [
	resolve(generatedRoot, 'index.ts'),
	resolve(generatedRoot, 'apis/index.ts'),
	resolve(generatedRoot, 'models/index.ts'),
]) {
	if (!existsSync(indexPath)) continue;

	const index = readFileSync(indexPath, 'utf8').replace('/* eslint-disable */\n', '');
	writeFileSync(indexPath, index);
}
