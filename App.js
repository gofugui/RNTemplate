/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Animated } from 'react-native'
// eslint-disable-next-line no-unused-vars
import { Button, Toast } from 'antd-mobile-rn'
import { observable, computed, configure, action } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import NetInfoDecorator from './src/common/NetInfoDecorator'

import AppNavigator from './src/navigation/AppNavigator'

type Props = {};
configure({ enforceActions: 'always' })

@NetInfoDecorator
@observer
class App extends Component<Props> {
   state = { loading: true, promptPosition: new Animated.Value(0) }

  // 显示
  loadingToast = () => {
    Toast.loading('Loading...', 1, () => {
      // console.log('Load complete !!!')
      this.setState({
        loading: false
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    const { isConnected } = nextProps
    // 无网络
    if (!isConnected) {
      Animated.timing(this.state.promptPosition, {
        toValue: 1,
        duration: 200
      }).start()
    } else {
      Animated.timing(this.state.promptPosition, {
        toValue: 0,
        duration: 200
      }).start()
    }
  }

  render () {
    let positionY = this.state.promptPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, DeviceInfo.__IOS__ ? 20 : 0]
    })
    return (
      <View style={styles.container}>
        <AppNavigator />
        <Animated.View style={[styles.netInfoView, { top: positionY }]}>
          <Text style={styles.netInfoPrompt}>网络异常，请检查网络稍后重试~</Text>
        </Animated.View>
      </View>
    )
  }
}
export default App
const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  netInfoPrompt: {
    color: Colors.white,
    fontWeight: 'bold'
  },
  netInfoView: {
    alignItems: 'center',
    backgroundColor: Colors.theme,
    height: 30,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0
  }
})
