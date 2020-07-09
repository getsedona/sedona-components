module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "parser": "babel-eslint",
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "extends": [
    "eslint:recommended",
  ],
  "rules": {
    "no-console": "off",
    "no-debugger": "off",
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always",
    }],
  },
};
