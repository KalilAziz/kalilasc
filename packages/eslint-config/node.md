# Kalil Aziz ESLint config

## Whats included?

- Standard config base;

## Setup

1. Install the dependencies
```
npm i eslint @kalilasc/eslint-config -D
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@kalilasc/eslint-config/node.js"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

```
module.exports = {
  extends: '@kalilasc/eslint-config/node.js',
};
```