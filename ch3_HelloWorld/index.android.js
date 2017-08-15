import React, { Component } from 'react';
import {
  Dimensions,
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
      console.log("==============")
    return (
      /** <View style={styles.container}> **/
      /** <Text style={styles.welcome}> **/
      <View style={styles.container}>
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
    alignItems: 'center',
    justifyContent: 'space-around',
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
  },
  pic: {
    /**borderRadius: 50,*/
    flex:1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover'
  },
  userName: {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontSize: 30,
    padding: 10,
    color: 'white'
  }


});




AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
