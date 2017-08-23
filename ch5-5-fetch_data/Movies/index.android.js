/**
*
*
*
*
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator,
  ListView,
  Text,
  View,
} from 'react-native';




export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
  }
}/* end constructor(props) */


  componentDidMount() {
      return fetch("movies_.json")
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.movies),
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }/* end componentDidMount */

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
          />
        </View>
      );
    }/* end render */


}/* end export default class Movies extends Component */



const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Movies', () => Movies);
