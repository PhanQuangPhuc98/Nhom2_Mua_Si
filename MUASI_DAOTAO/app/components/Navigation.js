import NavigationUtil from '@app/navigation/NavigationUtil'
import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class Navigation extends Component {
    render() {
        const { img, ic, onPress, label } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.goBack();
                    }}>
                    <Image
                        source={img}
                        style={styles.ic}>

                    </Image>
                </TouchableOpacity>
                <Text style={styles.txt}>
                    {label}
                </Text>
                <TouchableOpacity
                    onPress={onPress}>
                    <Image
                        source={ic}
                        style={styles.img}
                    >
                    </Image>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        height: "27%",
        flexDirection: 'row',
        backgroundColor: '#69AAFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ic: {
        height: 18,
        width: 18,
    },
    img: {
        marginLeft: 80,
        height: 18,
        width: 18,
    },
    txt: {
        width: '65%',
        fontSize: 20,
        color: 'white',
    }


})