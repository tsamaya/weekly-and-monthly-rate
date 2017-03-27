module.exports = {
  plugins: [
    'standard',
    'promise',
//    'es-beautifier'
  ],
  extends: ['standard'], // 'plugin:es-beautifier/standard'],
  rules: {
    'camelcase': 0,
    'quotes': [1, 'single'],
    'semi': [1, 'always']
  },
  env: {
    browser: true,
    jquery: true,
    node: true,
    mocha: true
  }
};
