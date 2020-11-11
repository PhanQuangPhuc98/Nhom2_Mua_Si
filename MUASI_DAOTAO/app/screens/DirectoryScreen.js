import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Navigation from '../components/Navigation';
import R from '@R';
import RNHeader from '../components/WHeader';
import NavigationUtil from '@app/navigation/NavigationUtil';
export default class DirectoryScreen extends Component {
    render() {
        return (
            <View>
                <RNHeader
                    leftButton={
                        <Image
                            style={styles.ic}
                            source={R.images.ic_arrowback_white}
                        >

                        </Image>

                    }
                    leftPress={() => { NavigationUtil.goBack() }}
                    titleHeader="Danh mục của bạn"
                />
                {/* <Navigation
                    img={R.images.ic_arrowback_white}
                    ic={R.images.ic_add}
                    label="Danh mục của tôi"
                >
                </Navigation> */}

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