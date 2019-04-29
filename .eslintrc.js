module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'react-native/react-native': true
  },
  'extends': ['standard','plugin:react-native/all'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'adjust':'readonly',
    'DeviceInfo':'readonly',
    'Images':'readonly',
    'Colors':'readonly',
    'Contants':'readonly'
  },
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-native'
  ],
  'rules': {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react/prefer-stateless-function': [0],
    'consistent-return': [0],
    // 禁止用console
    "no-console":1,
    // 禁止用分号
    "semi":[2,'never'],
    // 在同一个作用域中禁止多次重复定义
    "no-redeclare":1
  }
}
