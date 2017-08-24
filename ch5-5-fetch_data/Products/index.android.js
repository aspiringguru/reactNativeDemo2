/*
*   http://hplussport.com/api/products.php
*   https://wwwlyndacom.ezproxy.slq.qld.gov.au/React-js-tutorials/Fetch-data/577374/648308-4.html?autoplay=true
*/

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  Dimensions
} from 'react-native'


export default class Products extends Component {
  /*
  *   constructor invokes super to enable setting up
  *   state variables to hold data.
  *
  */

  /*
  *   fetch method returns a promise
  *   https://facebook.github.io/react-native/docs/network.html
  *   https://developer.mozilla.org/en-US/docs/Web/API/Request
  *   can chain as man .then functions on as desired.
  *   first .then function parse the response as json
  *   next .then function outputs to console.log to make results visible.
  *   product is an array and arrays have map functions.
  *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  *
  */
  /* .then(products => products.map(product => product.image)) */

  /**
  *   ActivityIndicator animating does not work in android.
  *
  *
  */
  render() {
    return (
      <ScrollView horizontal={true}>
        <Text>ggg</Text>
      </ScrollView>
    )
  }
}

/*
*   spinner should set
*
*/
const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  thumb: {
    width: 375,
    resizeMode: 'cover'
  }
})

AppRegistry.registerComponent('Products', () => Products)
