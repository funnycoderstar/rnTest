import React, { Component } from 'react';
import { Text,View,TextInput } from 'react-native';
class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text:''};
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{height: 30}}
                    placeholder="Type here to translate"
                    onChangeText={(text) => {
                        this.setState({text});
                    }}
                >
                </TextInput>
                <Text>
                    {this.state.text.split('').map((word) => word && '啦啦').join('')}
                </Text>
            </View>
        );
    }
}

export default PizzaTranslator;