# Kalil Aziz Typescript config

## Whats included?

- Standard config base;

## Setup

1. Install the dependencies
```
npm install --save-dev @kalilasc/typescript-config
```

2. Create a `tsconfig.json` file extending the config:
```
{
  "extends": "@kalilasc/typescript-config/react-library.json",
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

