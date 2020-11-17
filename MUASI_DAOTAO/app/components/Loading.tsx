import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
// BallIndicator,
//   BarIndicator,
//   DotIndicator,
//   MaterialIndicator,
//   PacmanIndicator,
//   PulseIndicator,
//   SkypeIndicator,
//   UIActivityIndicator,
//   WaveIndicator,
export default class Loading extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                <UIActivityIndicator color="red" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textLoading: {
        fontSize: 20
    }
});
