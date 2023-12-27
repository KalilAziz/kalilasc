const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    "only-warn",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "eslint-plugin-import-helpers"
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    ".next/",
    ".*css",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-console": "warn",
    "no-undef": "off",
    "import-helpers/order-imports": [
        "warn",
        {
          "newlinesBetween": "always",
          "groups": [
            ["/^react/", "/^next/", "/^@next/"],
            "/components/",
            "module",
            "/^@shared/",
            "/absolute/",
            ["parent", "sibling", "index"]
          ],
          "alphabetize": { "order": "asc", "ignoreCase": true }
        }
      ]  
  }
};
