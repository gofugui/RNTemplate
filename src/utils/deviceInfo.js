/* *
 * Created by render on 2018/5/10
 * */
import {
  Dimensions,
  StatusBar,
  Platform,
  PixelRatio
} from 'react-native'

const {
  width,
  height
} = Dimensions.get('window')

const X_WIDTH = 375
const X_HEIGHT = 812

const __IOS__ = Platform.OS === 'ios'

const isIphoneX = __IOS__ && ((height === X_HEIGHT && width === X_WIDTH) || (height === X_WIDTH && width === X_HEIGHT))

const minSize = 1 / PixelRatio.get()

const barHeight = __IOS__ ? (isIphoneX ? 44 : 20) : StatusBar.currentHeight

const headerBarHeight = __IOS__ ? 0 : StatusBar.currentHeight

const viewHeight = height - adjust(88) - barHeight - (isIphoneX ? 34 : 0)

const isSmallDevice = width < 375

global.DeviceInfo = {
  width,
  height,
  minSize,
  barHeight,
  isIphoneX,
  headerBarHeight,
  viewHeight,
  __IOS__,
  isSmallDevice
}
