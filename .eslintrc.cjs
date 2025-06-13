module.exports = {
  "env": {
    "browser": true,
      "es2021": true,
        "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sort-export-all/recommended"
  ],
    "parser": "@typescript-eslint/parser",
      "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "import-helpers",
    "import"
  ],
    "rules": {
    "import/newline-after-import": [
      "warn"
    ],
      "padding-line-between-statements": [
        "warn",
        {
          "blankLine": "always",
          "prev": "multiline-const",
          "next": "export"
        }
      ],
        "prettier/prettier": [
          "error",
          {
            "printWidth": 80,
            "tabWidth": 2,
            "singleQuote": true,
            "trailingComma": "all",
            "arrowParens": "always",
            "endOfLine": "auto"
          }
        ],
          "react/prop-types": "off",
            "@typescript-eslint/no-unused-vars": [
              "warn",
              {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
              }
            ],
              "import-helpers/order-imports": [
                "warn",
                {
                  "newlinesBetween": "always",
                  "groups": [
                    "/^react/",
                    "module",
                    "/^@//",
                    [
                      "parent",
                      "sibling",
                      "index"
                    ]
                  ],
                  "alphabetize": {
                    "order": "asc",
                    "ignoreCase": true
                  }
                }
              ],
                "sort-imports": [
                  "error",
                  {
                    "ignoreCase": true,
                    "ignoreDeclarationSort": true
                  }
                ],
                  "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
        ".d.ts"
      ]
    }
  },
  "ignorePatterns": [
    "node_modules"
  ]
};