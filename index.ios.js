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


export default class rnTest extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Head />
      </View>
    );
  }
}

const styles = StyleSheet.create({  
    page: {  
        backgroundColor: '#f5f5f5',
    }});  

AppRegistry.registerComponent('rnTest', () => rnTest);
