module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-airbnb-base",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "arrow-parens": ["error", "as-needed"],
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
};
