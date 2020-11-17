import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigation from '../components/Navigation';
import R from '@R';
export default class LogoutScreen extends Component {
    render() {
        return (
            <View>
                <Navigation
                    img={R.images.ic_arrowback_white}
                    ic={R.images.ic_add}
                    label="Tin mua của bạn"
                >
                </Navigation>
            </View>
        )
    }
}
