/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Head from './src/home/head.js';
import TabNavigator from 'react-native-tab-navigator';

export default class rnTest extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Head />
        <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
          
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  tab: {
    height: 52,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 35,
    resizeMode: 'stretch',
    marginTop: 12.5
  }
});

AppRegistry.registerComponent('rnTest', () => rnTest);
