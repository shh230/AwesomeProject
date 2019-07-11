/**
 * @author Si
 * @date 2019-07-03
 * @desc 
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
    render(): React.ReactNode {
        let pic = {
            url : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <Image source={pic} style={{width: 193, height: 110, marginTop: 60,}}/>
        );
    }
}