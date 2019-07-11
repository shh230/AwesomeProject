/**
 * @author Si
 * @date 2019-07-04
 * @desc
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert } from 'react-native';

export default class FetchExample extends React.Component {
    constructor(props){
        super(props)
        this.state = {isLoading: true}
    }
    componentDidMount(): void {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                })
            },function () {

            })
            .catch(error => {
                Alert.alert(error)
            })
    }
    render(){
        if (this.state.isLoading) {
            <View style={{flex:1, padding: 20, marginTop: 100}}>
                <ActivityIndicator/>
            </View>
        }
        return(
            <View style={{marginTop: 60}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={{margin: 15, fontSize: 17}}>{item.title}: {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}