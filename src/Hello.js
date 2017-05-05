import {
    Text,
    Image,
    View,
} from 'react-native';
import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        console.log(this);
        return (
            <Text>Hello,{this.props.name}</Text>
        )
    }
}
class Hello extends Component {
    render() {
        console.log(111);
        return (
            <View>
                <Greeting name="王亚星" age={10} sex={{sex: 'girl'}} />
                {/*<Greeting name="尹鑫"/>*/}
            </View>
        );
    }
}

export default Hello;