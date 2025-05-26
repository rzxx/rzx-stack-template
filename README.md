# rzx Stack App Template

*totally opinionated. deal with it.*

This is a monorepo template for building full-stack applications using:

- **Vite + React + TypeScript + SWC** in `packages/client`
- **Fastify + TSX** in `packages/server`
- **tRPC** for end-to-end typesafe APIs

## Getting Started

### Install dependencies

```sh
pnpm install
```

### Run development servers

```sh
pnpm dev                    # Start both (default)

pnpm --filter client dev    # Start only client
pnpm --filter server dev    # Start only server
```

### Build for production

```sh
pnpm build
```

---

- Client: `packages/client`
- Server: `packages/server`
- Shared types and tRPC API
