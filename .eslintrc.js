module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-param-reassign': 0,
    'import/no-unresolved': [2, { ignore: ['@frctl/fractal'] }]
  }
};
