/**
 *
 * @format
 * @date 2019-02-24
 * @author Si
 */
import React, {Component} from 'react';
import { Text, View} from 'react-native';

class Blink extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShowingText : true
        }
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText : !previousState.isShowingText }
            });
        },1000)
    }


    render(): React.ReactNode {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{ this.props.text }</Text>
        )
    }
}

export class BlinkApp extends Component{
    render() {
        return (
        <View>
            <Text>sdkh</Text>
            {/*<Blink text='11111111111111' ></Blink>*/}
            {/*<Blink text='11111111111111' ></Blink>*/}
            {/*<Blink text='11111111111111' ></Blink>*/}
            {/*<Blink text='11111111111111' ></Blink>*/}
        </View>
        )
    }
}