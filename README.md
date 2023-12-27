# Monorepo for Eslint and Typescript Base Configuration

This monorepo contains packages that offer base configurations for Eslint and Typescript in different contexts: `Next.js` and `Node.js` applications. Use these settings to ensure consistency and good code practices across your projects.

## Packages

1. eslint-config
- [eslint-config/nextjs](https://github.com/KalilAziz/kalilasc/blob/main/packages/eslint-config/nextjs.md)
- [eslint-config/nodejs](https://github.com/KalilAziz/kalilasc/blob/main/packages/eslint-config/nodejs.md)


2. typescript-config
- [typescript-config/nextjs](https://github.com/KalilAziz/kalilasc/blob/main/packages/typescript-config/nextjs.md)
- [typescript-config/nodejs](https://github.com/KalilAziz/kalilasc/blob/main/packages/typescript-config/nodejs.md)

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
