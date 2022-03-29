module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/prefer-default-export": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "function-expression",
      },
    ],
  },
};
