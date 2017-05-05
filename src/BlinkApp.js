import {
    Text,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: false };
    }
    handelToggle = () => {
        this.setState(previousState => {
            return { showText: !previousState.showText };
        });
    }
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.blueColor}>
                    {this.state.showText ? this.props.text : ''}
                </Text>
                <TouchableOpacity onPress={this.handelToggle} style={styles.wrap}>
                    <Text style={styles.btnText}>这是按钮</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text="I love to blink" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blueColor: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 2,
    },
    btnText: {
        textAlign:'center',
        color: '#fff',
    },
    wrap: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        backgroundColor: 'red',
    },
});

export default BlinkApp;
