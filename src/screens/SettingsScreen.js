import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json'
  };

  render () {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
