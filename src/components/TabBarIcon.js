import React from 'react'
import { IconFill, IconOutline } from "@ant-design/icons-react-native"

export default class TabBarIcon extends React.Component {
  render () {
    return (
      <IconFill 
        name={this.props.name}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        size={26}
      />
    )
  }
}
