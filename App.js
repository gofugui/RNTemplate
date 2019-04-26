/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
// eslint-disable-next-line no-unused-vars
import { Button, Toast } from 'antd-mobile-rn'
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import request from './src/utils/request'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {};

@observer
class App extends Component<Props> {
   @observable price = 0
   @observable amount = 1;

   @computed get total () {
     return this.price * this.amount
   }

  loadingToast = () => {
    Toast.loading('Loading...', 1, () => {
      // console.log('Load complete !!!')
    })
  }

  async componentDidMount () {
    const res = await request.get('https://api.ttt.sh/ip/qqwry/')// .then(data => console.log(JSON.parse(data)))

    console.log(res)
    // console.log(error, data)
  }

  render () {
    return (
      <View style={styles.container}>
        <Button onClick={() => this.loadingToast()}>Loading toast</Button>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}
export default App
const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  // eslint-disable-next-line react-native/no-color-literals
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  }
})
