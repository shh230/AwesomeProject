/**
 * @author Si
 * @date 2019-07-03
 * @desc
 * @flow
 */

import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props){
        super(props);
        this.state = {text: ' '};
    }

    render() {
        return (
            <View>
                <TextInput style={{width: 200, height: 40, marginTop: 60}} placeholder='Please input text' onChangeText={(text)=> this.setState({text})} />
                <Text style={{padding: 10, marginTop: 60}}>
                    {this.state.text.split(' ').map((word)=> word && '😄').join(' ')}
                </Text>
            </View>
        )
    }
}