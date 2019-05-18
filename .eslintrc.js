module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-undef': 'error',
    'no-else-return': 'warn',
    'no-unused-vars': 'warn',
    'no-unreachable': 'warn',
    'no-control-regex': 'warn',
    'no-empty': 'off',
    'camelcase': 'off',
    'vue/no-unused-components': 'warn',
    'arrow-parens': [1, 'as-needed']
  },
  globals: {
    workbox: true
  }
}
