import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jestDom from 'eslint-plugin-jest-dom';
import jestFormatting from 'eslint-plugin-jest-formatting';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';
import tailwindcss from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import unusedImports from 'eslint-plugin-unused-imports';
import vitestPlugin from 'eslint-plugin-vitest';

const prettierRules = {
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      endOfLine: 'auto',
    },
  ],
};

const config = [
  // Base configuration for JavaScript files
  {
    files: ['**/*.js', '**/*.mjs'],
    ...js.configs.recommended,
    rules: {
      ...prettierRules,
    },
  },

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'unused-imports': unusedImports,
      tailwindcss: tailwindcss,
      react: react,
      '@next/next': nextPlugin,
      prettier: prettier,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...prettierRules,
      'import/extensions': 'off',
      'react/function-component-definition': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'import/prefer-default-export': 'off',
      'import/order': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'jsx-a11y/label-has-associated-control': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'react/no-danger': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',
    },
  },

  // Test files configuration
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: {
      vitest: vitestPlugin,
      'jest-formatting': jestFormatting,
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
    },
  },

  // Playwright E2E tests configuration
  {
    files: ['**/*.spec.ts'],
    plugins: {
      playwright: playwright,
    },
  },

  // Storybook configuration
  {
    files: ['*.stories.*'],
    plugins: {
      storybook: storybook,
    },
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
];

export default config;
