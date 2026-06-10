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
    "pnpm/json-enforce-catalog": "off",
    "pnpm/yaml-enforce-settings": "off",
    // Remove this after catalog is fixed.
    "pnpm/yaml-no-unused-catalog-item": "off",
  },
})
