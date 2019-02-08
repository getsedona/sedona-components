"use strict";

module.exports = {
  "rules": {
    "color-hex-case": "lower",
    "color-no-invalid-hex": true,
    "color-named": "never",

    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,

    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-url-no-scheme-relative": true,

    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "number-max-precision": [2, {
      "ignoreUnits": [
        "%",
        "rem"
      ]
    }],
    "length-zero-no-unit": true,

    "string-no-newline": true,
    "string-quotes": "double",

    "unit-case": "lower",
    "unit-no-unknown": true,

    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true,

    "property-case": "lower",
    "property-no-vendor-prefix": true,
    "property-no-unknown": true,

    "keyframe-declaration-no-important": true,

    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",

    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-after": "always-single-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-max-attribute": 2,
    "selector-max-id": 0,
    "selector-max-class": 2,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "selector-max-empty-lines": 0,
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute"]
    }],

    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",

    "rule-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],

    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never-single-line",

    "at-rule-empty-line-before": ["always", {
      "except": [
        "first-nested",
        "blockless-after-blockless"
      ],
      "ignore": ["after-comment"]
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": [
        "mixin",
        "define-mixin",
        "include",
        "content",
        "rules"
      ]
    }],
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",

    "comment-no-empty": true,

    "indentation": null,

    "max-empty-lines": 2,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-duplicate-at-import-rules": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,

    "shorthand-property-no-redundant-values": true
  },
}
