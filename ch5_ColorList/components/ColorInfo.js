import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'


const ColorInfo = ({ backgroundColor, onSelect=f=>f }) => {

  return (
    <TouchableHighlight
      style={[styles.container, {backgroundColor}]} >
      <Text style={[styles.text]}>{backgroundColor}</Text>
    </TouchableHighlight>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    margin: 10
  }
})

export default ColorInfo
