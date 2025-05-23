import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';

export default [
  {
    plugins: {
      react: eslintReact
    }
  },
  {
    ignores: ['node_modules', 'dist']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: eslintReact.configs.recommended.parserOptions
    }
  },
  {
    files: ['**/**.{js,jsx}']
  }
];
