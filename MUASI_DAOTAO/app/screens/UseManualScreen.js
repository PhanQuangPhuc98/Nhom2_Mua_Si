import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Navigation from '../components/Navigation';
import NavigationUtil from '@app/navigation/NavigationUtil'
import R from '@R';
import RNHeader from '../components/WHeader';
export default class UseManual extends Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <RNHeader
                    leftButton={
                        <Image
                            style={styles.ic}
                            source={R.images.ic_arrowback_white}
                        >
                        </Image>
                    }
                    leftPress={() => { NavigationUtil.goBack() }}
                    titleHeader="Hướng dẫn sử dụng"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    ic: {
        height: 18,
        width: 18,
    },
})