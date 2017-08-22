/*
*
*     in project directory
*     Install the latest version of react-navigation from npm
*     npm install --save react-navigation
*     https://reactnavigation.org/docs/intro/
*/

import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy', age: '100' })}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => navigate('Chat', { user: 'Katy', age: '90' })}
          title="Chat with Katy"
        />
        <Button
          onPress={() => navigate('Chat', { user: 'Sarah', age: '80' })}
          title="Chat with Sarah"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user} age {params.age}</Text>
      </View>
    );
  }
}


const demoNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});



AppRegistry.registerComponent('demoNavigation', () => demoNavigation);
