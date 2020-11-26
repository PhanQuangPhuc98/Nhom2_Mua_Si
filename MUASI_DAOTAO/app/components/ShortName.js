import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ShortName extends Component {
    render() {
        const { label } = this.props;
        return (
            <View>
                <Text style={{ fontSize: 12 }}>{_ShortName(label)} </Text>
            </View>
        )
    }
}
_ShortName = (label) => {
    if (label == null) {
        return <Text>
            ?
        </Text>
    }
    else {
        let Test = label.charAt(0);
        for (let i = label.length / 2; i < label.length; i++) {
            if (label.charAt(i) == ' ') {
                Test += label.charAt(i + 1).toUpperCase();
            }
        }
        return <Text>
            {Test}
        </Text>
    }

};