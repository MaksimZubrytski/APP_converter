module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['warn', 'single'],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'class-methods-use-this': ['off'],
    'import/prefer-default-export': ['off'],
  },
};
