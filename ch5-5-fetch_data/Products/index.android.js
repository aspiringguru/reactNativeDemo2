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
  constructor() {
    super()  /** enables setting up state */
    this.state = {
      productImages: [],
      fetching: false
    }
  }

  /*
  *   fetch method returns a promise
  *   https://facebook.github.io/react-native/docs/network.html
  *   https://developer.mozilla.org/en-US/docs/Web/API/Request
  *
  *
  */

  componentDidMount() {
    this.setState({ fetching: true })
    fetch('https://hplussport.com/api/products.php')
      .then(response => response.json())
      .then(products => products.map(product => product.image))
      .then(productImages => this.setState({
        productImages,
        fetching: false
      }))
      .catch(err => console.error('error fetching products', err))
  }


  /**
  *
  *
  *
  */
  render() {
    return (
      <ScrollView horizontal={true}>
        <Text>aaa</Text>
        <ActivityIndicator size="large"
          style={styles.spinner}
          animating={true} />
      </ScrollView>
    )
  }
}

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
