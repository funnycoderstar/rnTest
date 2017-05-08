import React, { Component } from 'react';
import {
    View,
    Alert,
    StyleSheet,
} from 'react-native';
import MenuButton from './menuButton.js';
class menuView extends Component {
    _onMenuClick = (title, tag) => {
        Alert.alert('提示', '你点击了:' + title + 'tag:' + tag);
    }
    render() {
        return (
            <View style={{marginTop: 130}}>
            <View style={styles.menuView}>
                <MenuButton renderIcon={require('./images/home_icons/wdgz.png')}
                    showText={'我的关注'} tag={'wdgz'}
                    onClick={this._onMenuClick} />
                <MenuButton renderIcon={require('./images/home_icons/wlcx.png')}
                    showText={'物流查询'} tag={'wlcx'}
                    onClick={this._onMenuClick} />
                <MenuButton renderIcon={require('./images/home_icons/cz.png')}
                    showText={'充值'} tag={'cz'}
                    onClick={this._onMenuClick} />
                <MenuButton renderIcon={require('./images/home_icons/dyp.png')}
                    showText={'电影票'} tag={'dyp'}
                    onClick={this._onMenuClick} />
            </View>
            <View style={styles.menuView}>
                <MenuButton renderIcon={require('./images/home_icons/yxcz.png')}
                    showText={'游戏充值'} tag={'yxcz'}
                    onClick={this._onMenuClick} />
                <MenuButton renderIcon={require('./images/home_icons/xjk.png')}
                    showText={'小金库'} tag={'xjk'}
                    onClick={this._onMenuClick} />
                <MenuButton renderIcon={require('./images/home_icons/ljd.png')}
                    showText={'领京豆'} tag={'ljd'}
                    onClick={this._onMenuClick} />
                <MenuButton renderIcon={require('./images/home_icons/gd.png')}
                    showText={'更多'} tag={'gd'}
                    onClick={this._onMenuClick} />
            </View>
            <View style={{ marginTop: 15, borderWidth: 0.5, borderColor: '#ccc' }} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    menuView: {
        flexDirection: 'row',
        marginTop: 10,
    }
})
export default menuView;