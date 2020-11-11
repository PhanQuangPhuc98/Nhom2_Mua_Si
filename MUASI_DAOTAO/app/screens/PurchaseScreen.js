import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Navigation from '../components/Navigation';
import NavigationUtil from '@app/navigation/NavigationUtil'
import RNHeader from '../components/WHeader';
import R from '@R';

export default class Purchase extends Component {
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
                    titleHeader="Tin mua của bạn"
                    rightButton={
                        <Image
                            style={styles.ic}
                            source={R.images.ic_add}
                        >
                        </Image>
                    }
                    rightPress={() => {

                    }}
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