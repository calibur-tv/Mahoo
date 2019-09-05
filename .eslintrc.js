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
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
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
    'vue/no-v-html': 'off',
    'import/order': 'off',
    'vue/component-name-in-template-casing': [1, 'PascalCase'],
    'arrow-parens': [1, 'as-needed']
  },
  globals: {
    importScripts: true,
    workbox: true,
    _hmt: true,
    wx: true,
    setShareInfo: true
  }
}
