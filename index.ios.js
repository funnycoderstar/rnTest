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
    View,
    Image
} from 'react-native';
import Head from './src/home/head.js';
import TabNavigator from 'react-native-tab-navigator';
import Swiper from './src/swiper.js';

export default class rnTest extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }
    render() {
        return (
            <View style={styles.page}>
                <Head />
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={require('./src/images/tabs/home_normal.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./src/images/tabs/home_focus.png')} style={styles.tabIcon} />}
                    >
                        <Swiper />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'category'}
                        onPress={() => this.setState({ selectedTab: 'category' })}
                        renderIcon={() => <Image source={require('./src/images/tabs/category_normal.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./src/images/tabs/category_focus.png')} style={styles.tabIcon} />}
                    >
                        <Text>654</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'faxian'}
                        onPress={() => this.setState({ selectedTab: 'faxian' })}
                        renderIcon={() => <Image source={require('./src/images/tabs/faxian_normal.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./src/images/tabs/faxian_focus.png')} style={styles.tabIcon} />}
                    >
                        <Text>654</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={require('./src/images/tabs/cart_normal.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./src/images/tabs/cart_focus.png')} style={styles.tabIcon} />}
                    >
                        <Text>654</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'personal'}
                        onPress={() => this.setState({ selectedTab: 'personal' })}
                        renderIcon={() => <Image source={require('./src/images/tabs/personal_normal.png')} style={styles.tabIcon} />}
                        renderSelectedIcon={() => <Image source={require('./src/images/tabs/personal_focus.png')} style={styles.tabIcon} />}
                    >
                        <Text>654</Text>
                    </TabNavigator.Item>
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
