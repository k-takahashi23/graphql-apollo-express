module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    project: ['./tsconfig.eslint.json'],
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
  },
};
