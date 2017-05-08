import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    PropTypes,
    TouchableWithoutFeedback,
} from 'react-native';
class menuButton extends Component {
    _onclick = () => {
        if(this.props.onClick) {
            this.props.onClick(this.props.showText, this.props.tag);
        }
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onclick}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2,
    },
    showText: {
        fontSize: 12,
    }
})
export default menuButton;