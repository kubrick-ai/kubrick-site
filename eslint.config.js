import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        // Additional TypeScript/Astro globals
        IdleRequestCallback: 'readonly',
        IntersectionObserverCallback: 'readonly',
        NodeJS: 'readonly',
        ImageMetadata: 'readonly',
        DOMStringMap: 'readonly',
        StarlightThemeProvider: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off',
      'no-empty': 'warn',
    },
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Additional TypeScript/Astro globals
        IdleRequestCallback: 'readonly',
        IntersectionObserverCallback: 'readonly',
        NodeJS: 'readonly',
        ImageMetadata: 'readonly',
        DOMStringMap: 'readonly',
        StarlightThemeProvider: 'readonly',
      },
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '.astro/', '**/*.d.ts'],
  },
];