module.exports = {
  extends: ['eslint:recommended', 'react-app', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        "paths": [{
          "name": "styled-components",
          "message": "Please import from styled-components/macro."
        }],
        "patterns": [
          "!styled-components/macro"
        ]
      }
    ]
  },
};
