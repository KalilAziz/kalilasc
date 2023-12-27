# Kalil Aziz ESLint config

## Whats included?

- Standard config base;

## Setup

1. Install the dependencies
```
npm i eslint @kalilasc/typescript-config -D
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "root": true,
  "extends": "@kalilasc/eslint-config/next.js",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true
  }
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

```
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

```