/**
 * @author Si
 * @date 2019-07-03
 * @desc
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Greeting extends Component {
    render() {
        return(
            <View style={{ alignItems: 'center', marginTop: 60 }} >
                <Text>{ this.props.name }</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View>
                <Greeting name='Rexxar1'/>
                <Greeting name='Rexxar2'/>
                <Greeting name='Rexxar3'/>
            </View>
        );
    }
}