import React, { Component } from 'react'
import {
  AppRegistry,
  Alert,
} from 'react-native'

import ColorList from './components/ColorList'

class App extends Component {
  render() {
    return (
       <ColorList onColorSelected={color => Alert.alert(color)} />
       /**  <ColorList onColorSelected={color => console.log("---")} /> */
       /**  NB: was not able to get alert to work as in the video.
       *    
       */
    )
  }
}


AppRegistry.registerComponent('ColorList', () => ColorList)
