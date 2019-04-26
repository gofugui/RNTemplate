/* *
 * Created by render on 2018/5/9
 * */
import {
  Dimensions,
  StyleSheet,
  PixelRatio

} from 'react-native'

const device = Dimensions.get('window') // 设备的物理像素宽高
const design = { // 设计稿的宽高
  width: 750,
  height: 1334
}
const oneLogicPixel = 1 / PixelRatio.get() // 逻辑像素1px对应的物理像素

/**
   * @function adjust
   * @desc 根据设计稿宽度和设备实际宽度进行适配
   * @param {Number}px 设计稿宽的
   * @return {Number}adjustedSize 调整后的大小
   * */
const adjust = px => {
  const adjustedPX = px * device.width / design.width

  // 四舍五入取逻辑像素1px的整数倍
  return Math.round(adjustedPX / oneLogicPixel) * oneLogicPixel
}

// 定义全局的像素转换方法
global.adjust = adjust

// 跳过下述像素无关项
const filterArr = ['zIndex', 'flex', 'opacity', 'shadowOffset', 'elevation']

/**
   * @function adjust
   * @desc 调整样式表，根据上述adjust函数进行适配，对于复杂样式可用create+adjust
   * @param {Object}styles 样式表
   * @return {Object}SheetSheet 调整后的样式表
   * */
StyleSheet.adjust = styles => {
  for (let style of Object.values(styles)) {
    for (let [key, value] of Object.entries(style)) {
      if (
        typeof value === 'string' ||
                  filterArr.includes(key)
      ) continue // 跳过无需转换的项

      style[key] = adjust(value)
    }
  }

  return StyleSheet.create(styles)
}
