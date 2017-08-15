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
  View
} from 'react-native';

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
      <Text style={[styles.button, {color:'green'}]}
        onPress={() => this.changeColor('green')}>green</Text>
      <Text style={[styles.button, {color:'red'}]}
        onPress={() => this.changeColor('red')}>red</Text>
      <Text style={[styles.button, {color:'yellow'}]}
        onPress={() => this.changeColor('yellow')}>yellow</Text>
      <Text style={[styles.button, {color:'white'}]}
        onPress={() => this.changeColor('white')}>white</Text>

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
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('ColorList', () => ColorList);
