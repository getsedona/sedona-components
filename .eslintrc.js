module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}
