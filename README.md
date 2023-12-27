# Monorepo for Eslint and Typescript Base Configuration

This monorepo contains packages that offer base configurations for Eslint and Typescript in different contexts: `React`, `Next.js` and `Node.js` applications. Use these settings to ensure consistency and good code practices across your projects.

## Packages

1. eslint-config
- [eslint-config/react](packages/eslint-config/react.md)
- [eslint-config/next](packages/eslint-config/next.md)
- [eslint-config/node](packages/eslint-config/node.md)

2. typescript-config
- [typescript-config/react](packages/typescript-config/react.md)
- [typescript-config/next](packages/typescript-config/next.md)
- [typescript-config/node](packages/typescript-config/node.md)

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `@kalilasc/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@kalilasc/typescript-config`: `tsconfig.json`s used by the `eslint` configurations

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
