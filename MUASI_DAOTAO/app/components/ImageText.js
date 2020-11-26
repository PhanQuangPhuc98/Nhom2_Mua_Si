import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class ImageText extends Component {
    render() {
        const { label, img } = this.props;
        return (

            <View style={styles.header}>
                <Text style={styles.txt}>{label}</Text>
                <Image
                    source={img}
                    style={styles.imgOclock}></Image>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row-reverse',
    },
    imgAddree: {
        margin: 2,
        width: 7.38,
        height: 10.55,
        resizeMode: 'contain',

    },
    txt: {
        fontSize: 12,
    },
    imgOclock: {
        margin: 2,
        width: 10.52,
        height: 10.52,
        resizeMode: 'contain',
    },
})