import React, { Component } from 'react';
import {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'


export default class HelloWorld extends Component {
  render() {
      console.log("__________hello__________")
    return (
      /** <View style={styles.container}> **/
      /** <Text style={styles.welcome}> **/
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Sierra</Text>
        <Text style={[styles.defaultText,styles.selectedText]}>
          Tanner
        </Text>
        <Text style={styles.defaultText}>Travis</Text>
        <Image style={styles.pic} source={picSierra}>
          <Text style={styles.userName}>Sierra Spencer</Text>
        </Image>
        <Image style={styles.pic} source={picTanner}>
          <Text style={styles.userName}>Tanner McTab</Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    /** justifyContent: 'space-around' || 'space-between' */
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#DDD'
  },
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    /** StyleSheet.hairlineWidth is supposed to give sharper border than 1 */
    /** borderWidth: 1,*/
    color: 'black'
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
});




AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
