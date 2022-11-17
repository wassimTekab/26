/** @type {import('eslint').ESLint} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',

  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
  },
};
