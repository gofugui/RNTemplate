import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>LinksScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
