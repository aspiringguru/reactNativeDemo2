import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  ListView,
  AsyncStorage
} from 'react-native'

import ColorButton from './components/ColorButton'
import ColorForm from './components/ColorForm'

export default class ColorList extends Component {

  constructor() {
    super()

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableColors = ['red', 'blue']
    /* NB: availableColors can start from empty */
    this.state = {
      backgroundColor: 'blue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this)
    this.newColor = this.newColor.bind(this)
  }

  /**
  *     adding persistent storage
  *     https://facebook.github.io/react-native/docs/asyncstorage.html
  *     static getItem(key: string, callback?: ?(error: ?Error, result: ?string) => void)
  *     NB: is this method is loaded outside the tutorial error results.
  *     requested keys of a value that is not an object.
  */
  componentDidMount() {
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err, data) => {
        if (err) {
          console.error('Error loading colors', err)
        } else {
          const availableColors = JSON.parse(data)
          this.setState({
            availableColors,
            dataSource: this.ds.cloneWithRows(availableColors)
          })
        }
      }
    )
  }





  /**
  *     static setItem(key: string, value: string, callback?: ?(error: ?Error) => void)
  *     https://facebook.github.io/react-native/docs/asyncstorage.html
  */
  saveColors(colors) {
    AsyncStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
    )
  }


  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  newColor(color) {
    const availableColors = [
      ...this.state.availableColors,
      color
    ]
    this.setState({
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    })
    /** save colors */
    this.saveColors(availableColors)
  }

  render() {
    const { backgroundColor, dataSource } = this.state
    return (
      <ListView style={[styles.container,{backgroundColor}]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton backgroundColor={color}
            onSelect={this.changeColor}/>
        )}
        renderHeader={() => (
          <ColorForm onNewColor={this.newColor}/>
        )}>

      </ListView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'lightgrey',
    padding: 10,
    paddingTop: 20,
    fontSize: 30,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('ColorList', () => ColorList)
