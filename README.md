# rzx Stack App Template

*rely on DX, not on AI.*

## What is it?

This is a monorepo template for building full-stack applications with **high DX**, by embracing **TypeScript** and thoughtfully **combining excellent tools** rather than relying on the often opaque abstractions of a single large framework. Pre-configured for **Netlify deployment**.

## List of tools

Because of modular approach, you can expand from this template in any way you want. These packages will provide all the basic functionality and DX, that's probably needed in common project:

### Frontend (client)

- **Vite:** Base of the frontend package.
- **React + TypeScript:** UI layer library.
- **TanStack Router:** Routing.
- **TanStack Query:** Data fetching, caching, and state management for client-side data.
- **Tailwind CSS:** CSS framework.

### Backend (server-api)

Designed for Serverless deployment. For traditional server needs, a separate server package can be added.

- **Fastify:** Base of the backend package.
- **tRPC:** API layer for communication between frontend and backend.

## Getting Started

### Install dependencies

Ensure you have [pnpm](https://pnpm.io/) installed.

```sh
pnpm install
```

### Run development servers

```sh
pnpm dev                    # Start all development servers (frontend and backend)

pnpm --filter client dev    # Start only client
pnpm --filter server dev    # Start only server
```

### Build for production

```sh
pnpm build
```

### Deployment

This template is pre-configured for Netlify deployment. If you choose a different platform, you will need to configure it manually.

1. Add your repo to Netlify.
2. When asked what project to deploy, choose **Other (configure manually)**.
3. Add build command and publish directory from netlify.toml file (or paste from here).

Build command:

```text
pnpm install && pnpm run build
```

Publish directory:

```text
packages/client/dist
```
