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
  ScrollView,
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
      <ScrollView style={[styles.container,{backgroundColor}]}>
        <ColorButton backgroundColor="red" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="yellow" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="white" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="black" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="silver" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="gray" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="maroon" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="purple" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="green" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="lime" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="olive" onSelect={this.changeColor}/>
        <ColorButton backgroundColor="yellow" onSelect={this.changeColor}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },

});


AppRegistry.registerComponent('ColorList', () => ColorList);
