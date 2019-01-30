"use strict"

module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  env: {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": "eslint:recommended",
  rules: {
    // "indent": ["error", "tab"],
    "quotes": ["error", "double"]
  }
}
