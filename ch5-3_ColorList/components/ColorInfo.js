import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

/*
*   the entire props is passed to the stateless functional component as an argument
*
*/
const ColorInfo = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{ navigation.state.params.color }</Text>
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
