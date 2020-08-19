/* eslint-disable import/no-extraneous-dependencies */
const { prettierConfig } = require('@episclera/toolkit')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.d.ts'],
      },
    },
  },
}
