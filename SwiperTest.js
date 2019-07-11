import React, {Component} from 'react';
import {ScrollView, Image, Text, StyleSheet, ToastAndroid, Dimensions, View} from 'react-native';
import Swiper from "react-native-swiper";

const WIDTH = Dimensions.get('window').width;

/**
 * Created by marno on 2017/1/17
 * Desc:ScrollView的使用
 */
export default class SwiperTest extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    render() {
        let items = ['red', 'green', 'blue'];
        return (
            <View style={{height: WIDTH * 210 / 375, marginTop: 100}}>
                <Swiper
                    style={{width: WIDTH}}
                    height={WIDTH * 210 / 375}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={4}
                    loop={true}
                    removeClippedSubviews={false}
                    horizontal ={true}
                    index={this.state.index}
                    onMomentumScrollEnd={(e, state, context) => {
                        console.log('event' + e + 'state' + state.index + 'context' + context);
                        // renderPagination
                    }}
                    onIndexChanged={(index) => {
                        console.log('index' + index);
                        // this.setState({index})
                    }}
                    //不显示圆点了
                    // renderPagination={(index, total, context) => {
                    //     console.log('index' + index + 'total' + total + 'context' + context);
                    // }}
                    paginationStyle={{bottom: 10}} //距离底部的距离
                    autoplayDirection={true}
                    pagingEnabled={true}
                >
                    {items.map(item => {
                        return(
                            <View style={{height:WIDTH * 210 / 375, width: WIDTH, backgroundColor: item}}></View>
                        );
                    })}
                </Swiper>
            </View>
        )
    }
}

const ScrollViewTestStyle = StyleSheet.create({
    scroll_item: {
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        elevation: 3,
        overflow: 'hidden',
        width: WIDTH,
    },
})
