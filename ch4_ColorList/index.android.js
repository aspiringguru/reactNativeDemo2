/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import ColorButton from './components/ColorButton'


export default class ColorList extends Component {

  constructor(){
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(backgroundColor){
    this.setState({backgroundColor})
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <View style={[styles.container,{backgroundColor}]}>
        <Text>
          ---Welcome to React Native!____
        </Text>
        {/** <ColorButton backgroundColor="red" onSelect={(color) => this.changeColor(color)}/> */}
        <ColorButton backgroundColor="red" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="yellow" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="white" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="black" onSelect={this.changeColor}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});


AppRegistry.registerComponent('ColorList', () => ColorList);
