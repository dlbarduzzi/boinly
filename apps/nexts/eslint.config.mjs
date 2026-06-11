import antfu from "@antfu/eslint-config"

export default antfu({
  type: "lib",
  typescript: true,
  formatters: true,
  stylistic: {
    semi: false,
    indent: 2,
    quotes: "double",
  },
  ignores: ["node_modules/**"],
  rules: {
    "antfu/if-newline": "off",
    "no-empty": "error",
    "no-empty-function": "error",
    "node/no-process-env": "error",
    "node/no-process-exit": "error",
    "node/prefer-global/process": "off",
    "prefer-const": "error",
    "perfectionist/sort-imports": "off",
    "pnpm/json-enforce-catalog": "off",
    "style/arrow-parens": "off",
    "style/jsx-curly-newline": "off",
    "style/max-len": ["error", { code: 120 }],
    "style/multiline-ternary": "off",
    "style/operator-linebreak": "off",
    "style/quotes": "error",
    "ts/no-unused-vars": ["error", {
      args: "all",
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    }],
    "ts/no-explicit-any": "error",
    "ts/no-unused-expressions": "off",
    "ts/consistent-type-definitions": "off",
    "ts/explicit-function-return-type": "off",
  },
})
