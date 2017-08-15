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
  }
  render() {
    return (
      <View style={[
        styles.container,
        {
          backgroundColor: this.state.backgroundColor
        }
      ]}>
      <Text>
        Welcome to React Native!---
      </Text>

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
  }
});

AppRegistry.registerComponent('ColorList', () => ColorList);
