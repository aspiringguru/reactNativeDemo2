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
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => navigate('Chat2')}
          title="Chat with 2"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

class ChatScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Chat with 22222',
  };
  render() {
    return (
      <View>
        <Text>Chat with 22222</Text>
      </View>
    );
  }
}


const demoNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Chat2: { screen: ChatScreen2 },
});



AppRegistry.registerComponent('demoNavigation', () => demoNavigation);
