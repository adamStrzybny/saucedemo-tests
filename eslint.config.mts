import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    ignores: [
      "dist/",
      "build/",
      "cypress/reports/",
      "cypress/videos/",
      "cypress/screenshots/",
      "cypress/downloads/",
      "node_modules/",
      "package-lock.json",
      "cypress.config.ts",
      "eslint.config.mjs",
    ],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
rules: {
  "semi": ["error", "always"],
  "no-multiple-empty-lines": ["error", { max: 1 }],
  "eol-last": ["error", "always"],
  "indent": ["error", 2],
  "space-before-function-paren": ["error", "never"],
  "keyword-spacing": ["error", { before: true }],
  "object-curly-spacing": ["error", "always"],
  "comma-dangle": ["error", "always-multiline"],

    }
  },
  tseslint.configs.recommended,
]);