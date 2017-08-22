import React, { Component } from 'react'
import {
  AppRegistry,
  Alert,
} from 'react-native'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'


class App extends Component {
  render() {
    return (
       /** <ColorList onColorSelected={color => Alert.alert(color)} /> */
       <ColorInfo backgroundColor = "white"
        onSelect = {() => Alert.alert('Screen touched')}/>
    )
  }
}

AppRegistry.registerComponent('ColorList', () => App)
