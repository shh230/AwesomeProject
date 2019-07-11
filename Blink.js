/**
 * @author Si
 * @date 2019-07-03
 * @desc
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingText : true
        }

        setInterval(()=>{
            this.setState(preState => {
                return {isShowingText: !preState.isShowingText};
            });
        },1000);
    }


    render() {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{this.props.text}</Text>
        );
    }

}
export default class BlinkApp1 extends Component {
    render() {
        return(
            <View style={{marginTop: 60}}>
                <Blink text='I love you!!!' />
            </View>
        );
    }
}