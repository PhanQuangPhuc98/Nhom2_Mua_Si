import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Image, Text } from 'react-native'

export default class Information extends Component {
    render() {
        const { img, label, onChangeText, value, placeholder } = this.props;
        return (
            <View>
                <Text style={styles.txt}>
                    {label}
                </Text>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.txt_input}
                />
                <Image
                    source={img}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    txt: {
        fontSize: 14,
    },
    txt_input: {
        backgroundColor: '#F5F6F8',
        borderRadius: 10
    },
})