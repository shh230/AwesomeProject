/**
 *
 * @format
 * @date 2019-02-24
 * @author Si
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class FlexDirectionBasice extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5'}}>
                <Text>sdk</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});