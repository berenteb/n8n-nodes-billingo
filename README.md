# n8n-nodes-billingo

This is an n8n community node package for using the [Billingo](https://www.billingo.hu/) API in n8n workflows.

[n8n](https://n8n.io/) is a workflow automation platform. Community nodes let you add integrations that are not bundled with n8n itself.

## Disclaimer

This package is developed for personal use and is shared publicly as-is. Use it at your own risk.

This is not an official Billingo product, and it is not the official Billingo n8n implementation. It is not endorsed, maintained, reviewed, or supported by Billingo. Verify the generated requests and responses against Billingo's current API documentation before using this package in production or for business-critical invoicing workflows.

## How This Node Was Generated

The node metadata is generated from Billingo's official OpenAPI descriptor. The repository keeps that descriptor as `openapi.yml`, then uses generation scripts to create the Billingo API client and n8n node metadata.

The generated metadata lives in `nodes/Billingo/generated/metadata.ts`. The generator script is `scripts/generate-billingo-node-metadata.mjs`.

To regenerate the generated files after updating the OpenAPI descriptor:

```sh
npm run generate-billingo
```

Always review the generated changes before publishing or upgrading a production workflow. OpenAPI descriptors can describe the API surface, but they do not replace manual validation of workflow behavior, edge cases, or Billingo account-specific configuration.

## Installation

Follow the [n8n community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) and install this package by its npm package name:

```sh
n8n-nodes-billingo
```

For self-hosted n8n instances, you can also install community nodes from the n8n UI under **Settings > Community Nodes**, if community nodes are enabled for your instance.

## Credentials

This node uses a Billingo API key.

1. Create or copy an API key from your Billingo account.
2. In n8n, create a new **Billingo API** credential.
3. Paste the API key into the **API Key** field.
4. Save and test the credential.

The credential sends the API key to Billingo using the `X-API-KEY` header.

## Operations

This package exposes operations generated from Billingo API v3 endpoints described in the OpenAPI descriptor. The available resources and operations may change when the descriptor is updated and the node metadata is regenerated.

Because the node is generated, broad API coverage is prioritized over hand-written, workflow-specific UX. Some operations may require JSON input for complex request bodies.

## Compatibility

This package is built as an n8n community node and declares `n8n-workflow` as a peer dependency. Use it with an n8n version that supports community nodes and the current n8n node API used by this package.

## Development

Install dependencies:

```sh
npm install
```

Build the package:

```sh
npm run build
```

Run linting:

```sh
npm run lint
```

Run n8n in development mode with this node linked:

```sh
npm run dev
```

## Resources

- [Billingo API documentation](https://www.billingo.hu/api)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [n8n creating nodes documentation](https://docs.n8n.io/integrations/creating-nodes/)
