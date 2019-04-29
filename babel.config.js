module.exports = {
  plugins: [
    ['import', { 'libraryName': 'antd-mobile-rn' }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }]
  ],
  presets: ['module:metro-react-native-babel-preset']
}
