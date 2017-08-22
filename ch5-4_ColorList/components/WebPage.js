import React from 'react'

import {
  WebView,
  StyleSheet
} from 'react-native'


const WebPage = () => (
  <WebView style={styles.container}
           source= {{uri: "https://www.github.com"}}  />
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
