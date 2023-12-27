# Kalil Aziz ESLint config

## Whats included?

- Standard config base;

## Setup

1. Install the dependencies
```
npm install --save-dev @kalilasc/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "root": true,
  "extends": "@kalilasc/eslint-config/react-internal.js",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

```
module.exports = {
  root: true,
  extends: ["@kalilasc/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};

```