import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class User extends Component {
    render() {
        const { img, label, ic, action } = this.props;
        return (
            <TouchableOpacity
                style={styles.heder_info}
                onPress={async () => {
                    await action();
                }}>
                <Image
                    style={styles.img_info}
                    source={img}>
                </Image>
                <Text style={styles.txt_info}>
                    {label}
                </Text>
                <View style={styles.icv_info}>
                    <Image
                        style={styles.ic_info}
                        source={ic}>
                    </Image>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    heder_info: {
        flexDirection: "row",
        height: "7%",
        width: "100%",
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    img_info: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        marginTop: 15,
        marginRight: 15
    },
    icv_info: {
        borderBottomWidth: 0.5,
    },
    ic_info: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        marginTop: 15
    },
    txt_info: {
        width: "70%",
        borderBottomWidth: 0.5,
        paddingTop: 15,
        fontSize: 15
    }
})