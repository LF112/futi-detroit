import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      'src/routeTree.gen.ts',
      '**/vite.config.ts',
      '**/tailwind.config.ts',
      '**/public',
      '**/.next',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'plugin:react/recommended',
      'plugin:unicorn/recommended',
    ),
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'react-hooks': fixupPluginRules(reactHooks),
      'simple-import-sort': simpleImportSort,
      prettier: fixupPluginRules(prettier),
      'unused-imports': unusedImports,
      unicorn: fixupPluginRules(unicorn),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'func-names': 0,
      'no-shadow': 0,
      'linebreak-style': 'off',
      '@typescript-eslint/no-shadow': 0,

      '@typescript-eslint/no-unused-vars': [
        1,
        {
          argsIgnorePattern: '^_',
        },
      ],

      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/ban-types': 0,
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 'off',
      'testing-library/no-unnecessary-act': 0,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',

      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['server-only', 'client-only'],
            ['^react$', 'react-dom'],
            ['next'],
            ['normalize.css', '(.*).scss'],
            [String.raw`^@?\w`],
            ['@/(.*)'],
            ['^[./]'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',
      'unicorn/catch-error-name': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/import-style': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-event-target': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
];
