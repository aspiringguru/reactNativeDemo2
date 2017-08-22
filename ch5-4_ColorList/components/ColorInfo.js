import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import ColorTools from 'color'

/*
*   the entire props is passed to the stateless functional component as an argument
*
*/
const ColorInfo = ({ navigation }) => {
  const color = ColorTools(navigation.state.params.color)


  return (
    <View style={ [styles.container, { backgroundColor: color }] }>
      <Text style={ [styles.text, { color: color.negate()}] }>
        { color.hex() }
      </Text>
      <Text style={ [styles.text, { color: color.negate()}] }>
        { color.rgb().string() }
      </Text>
      <Text style={ [styles.text, { color: color.negate()}] }>
        { color.hsl().string() }
      </Text>
    </View>
  )
}

/*
*
*     NB: this is a stateless functional component
*/
/*
*     old method: set ColorInfo.navigationOptions to an object
ColorInfo.navigationOptions = {
  title: "Color Details"
}
*     new method: set ColorInfo.navigationOptions to a function
*     the function gets the navigation object
*     once the function has the navigation object it extracts the value for color
*/
ColorInfo.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.color
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    margin: 10
  }
})


export default ColorInfo
