import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'


const ColorInfo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>TODO: Display Color</Text>
  </View>
)


/*
*     
*     NB: this is a stateless functional component
*/
ColorInfo.navigationOptions = {
  title: "Color Details"
}


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
