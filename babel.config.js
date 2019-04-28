module.exports = {
  plugins: [
    ['import', { 'libraryName': 'antd-mobile-rn' }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['transform-remove-console']
  ],
  presets: ['module:metro-react-native-babel-preset']
}
