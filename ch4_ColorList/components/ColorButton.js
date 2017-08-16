import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native'

const ColorButton = ({ backgroundColor, onSelect=f=>f }) => (
  /**
  *   backgroundColor is passed from the calling object, used to set color
  *   ES6 notation used.
  *   onSelect=f=>f sets onSelect to a default function.
  *
  */
  <TouchableHighlight style={styles.button}
    onPress={() => onSelect(backgroundColor)}
    underlayColor="orange">

    <View style={styles.row}>
      <View style={[styles.sample,{backgroundColor}]} />
      {/** want to set text to color - need to insert something here? */}
      <Text style={[styles.text,  {}]}>{backgroundColor}</Text>
    </View>

  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.1)'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30,
    margin: 5
  }
})

export default ColorButton
