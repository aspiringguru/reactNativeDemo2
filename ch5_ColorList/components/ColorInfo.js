import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import ColorTools from 'color'
/** requires installation of color package in project directory
*   npm install color --save
*   nb: global installation did not appear to work.
*   nbb: reboot of react-native server was used when it worked.
*/


const ColorInfo = ({ backgroundColor, onSelect=f=>f }) => {
  const color = ColorTools(backgroundColor).negate()

  return (
    <TouchableHighlight
      style={[styles.container, {backgroundColor}]}
      onPress={onSelect}>
      <Text style={[styles.text, {color}]}>{backgroundColor}</Text>
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
