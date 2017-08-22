import React, { Component } from 'react'
import {
  StyleSheet,
  ListView,
  AsyncStorage
} from 'react-native'

import ColorButton from './ColorButton'
import ColorForm from './ColorForm'

export default class ColorList extends Component {

  constructor() {
    super()

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableColors = ['red', 'blue']
    /* NB: availableColors can start from empty */
    this.state = {
      /* removed setting backgroundColor will be nevigating to diff screen.  */
      /* this.changeColor = this.changeColor.bind(this) */
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    /* deleted changeColor */
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

  /**
  *     removed in ch 5-2
  *
  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }
  */

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
            onSelect={this.props.onColorSelected}/>
            /** onColorSelected is two way function binding.
            *   color selected passed to parent component
            *   via props.onColorSelected
            */
        )}
        renderHeader={() => (
          <ColorForm onNewColor={this.newColor}/>
        )}>

      </ListView>
    )
  }
}


/**
*     default allows this to be optional
*
*/
ColorList.defaultProps = {
  onColorSelected: f=>f
}

/**
*
*
*/
ColorList.propTypes = {
  onColorSelected: React.PropTypes.func
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
