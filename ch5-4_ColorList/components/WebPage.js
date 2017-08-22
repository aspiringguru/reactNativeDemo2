import React from 'react'

import {
  WebView,
  StyleSheet
} from 'react-native'

/*
*   https://facebook.github.io/react-native/docs/webview.html
*   
*   onPress action on Text object styled as button in ColorForm
*   passes value for uri
*   nb: navigation.state.params only contains value for uri
*   so { uri: navigation.state.params.uri } can be contracted to
*   navigation.state.params
*   contentInset={{ top: -500 }} is supposed to position the page 500 pixels down.
*/
const WebPage = ({ navigation }) => (
  <WebView style={styles.container}
          source= { navigation.state.params}
          contentInset={{ top: -500 }}  />
)

WebPage.navigationOptions = {
  title: 'All Colors'
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default WebPage
