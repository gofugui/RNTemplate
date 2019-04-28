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

const OS = Platform.OS

const isIphoneX = OS === 'ios' && ((height === X_HEIGHT && width === X_WIDTH) || (height === X_WIDTH && width === X_HEIGHT))

const minSize = 1 / PixelRatio.get()

const barHeight = OS === 'ios' ? (isIphoneX ? 44 : 20) : StatusBar.currentHeight

const headerBarHeight = OS === 'ios' ? 0 : StatusBar.currentHeight

const viewHeight = height - adjust(88) - barHeight - (isIphoneX ? 34 : 0)

export {
  OS,
  width,
  height,
  minSize,
  barHeight,
  isIphoneX,
  headerBarHeight,
  viewHeight
}
