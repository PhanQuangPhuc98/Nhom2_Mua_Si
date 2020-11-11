import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import NavigationUtil from '@app/navigation/NavigationUtil'
import R from '@R';
import RNHeader from '../components/WHeader';
import UpDateInformation from '../components/UpDateInformation'
export default class ChangePasswordScreen extends Component {
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
                    titleHeader="Thay đổi mật khẩu"
                />

                <View style={{
                    flex: 1,
                    margin: 10
                }}>

                    <UpDateInformation
                        label="Mật khẩu hiện tại(*)"
                        value={this.state?.fullname}
                        placeholder="Mật khẩu hiện tại"
                        onChangeText={(newText) => {
                            this.setState({
                                password: newText
                            })
                        }}
                    />
                    <UpDateInformation
                        label="Mật khẩu mới(*)"
                        value={this.state?.fullname}
                        placeholder="Mật khẩu mới"
                        onChangeText={(newText) => {
                            this.setState({
                                fullname: newText
                            })
                        }}
                    />
                    <UpDateInformation
                        label="Xác nhận mật khẩu mới(*)"
                        placeholder="Xác nhận mật khẩu mới"
                        value={this.state?.fullname}
                        onChangeText={(newText) => {
                            this.setState({
                                fullname: newText
                            })
                        }}
                    />
                </View>
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