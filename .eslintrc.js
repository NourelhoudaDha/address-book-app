module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  parserOptions: {
    ecmaVersion: "2017",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["babel", "react", "import", "prettier","react-hooks", "jest"],
  rules: {
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "prettier/prettier": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-bind": "error",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "array-callback-return": "error",
    "consistent-return": "error",
    "babel/no-invalid-this": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
      flowVersion: "0.63.1",
    },
  },
};
