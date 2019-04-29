/**
 * Created by ljunb on 2017/1/7.
 */
import React, { Component } from 'react'
import NetInfo from '@react-native-community/netinfo'

const NetInfoDecorator = WrappedComponent => class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isConnected: true
    }
  }

  componentDidMount () {
    NetInfo.isConnected.addEventListener('connectionChange', this._handleNetworkConnectivityChange)
  }

    _handleNetworkConnectivityChange = isConnected => this.setState({ isConnected })

    render () {
      return <WrappedComponent {...this.props} {...this.state}/>
    }
}

export default NetInfoDecorator
