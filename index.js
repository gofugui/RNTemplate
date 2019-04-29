/**
 * @format
 */

import { AppRegistry, YellowBox  } from 'react-native'

import { name as appName } from './app.json'
import './src/utils/adjustSize'
import './src/utils/deviceInfo'
import './src/common/GlobalContants'

import App from './App'
YellowBox.ignoreWarnings([
  "Warning:"
])
if (!__DEV__) {
  global.console = {
    log: () => {}
  }
}
AppRegistry.registerComponent(appName, () => App)
