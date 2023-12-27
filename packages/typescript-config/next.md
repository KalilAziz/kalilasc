# Kalil Aziz Typescript config

## Whats included?

- Standard config base;

## Setup

1. Install the dependencies
```
npm i eslint @kalilasc/typescript-config -D
```

2. Create a `tsconfig.json` file extending the config:
```
{
  "extends": "@kalilasc/typescript-config/nextjs.json",
  "compilerOptions": {
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": "."
  },
  "include": [
    "next-env.d.ts",
    "next.config.js",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

