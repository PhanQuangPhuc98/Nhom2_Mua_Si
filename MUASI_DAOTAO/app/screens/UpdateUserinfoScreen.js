import { SCREEN_ROUTER } from '@app/constants/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import { getUserInfo } from '@action'
import * as API from '@api';
import R from '@R';
import UpDateInformation from '../components/UpDateInformation'
import RNHeader from '../components/WHeader';
export class UpdateUserinfoScreen extends Component {
    state = this.props.navigation.getParam('data');
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
                    titleHeader="Cập nhật thông tin"
                />
                <View style={{
                    flex: 1,
                    margin: 10
                }}>
                    <UpDateInformation
                        label="Họ tên(*)"
                        value={this.state?.fullname}
                        onChangeText={(newText) => {
                            this.setState({
                                fullname: newText
                            })
                        }}
                    />
                    <UpDateInformation
                        label="Giới tính(*)"
                        value={this.state?.sex}
                        onChangeText={(newText) => {
                            this.setState({
                                sex: newText
                            })
                        }}
                    />
                    <UpDateInformation
                        label="Tỉnh/Thành phố(*)"
                        value={this.state?.province_id}
                        onChangeText={(newText) => {
                            this.setState({
                                province_id: newText
                            })
                        }}
                    />
                    <UpDateInformation
                        label="Địa chỉ(*)"
                        value={this.state?.address}
                        onChangeText={(newText) => {
                            this.setState({
                                address: newText
                            })
                        }}
                    />
                    <UpDateInformation
                        label="Email"
                        value={this.state?.email}
                        onChangeText={(newText) => {
                            this.setState({
                                email: newText
                            })
                        }}
                    />
                    <TouchableOpacity
                        onPress={async () => {
                            try {
                                await API.UpdateUser(this.state);
                                NavigationUtil.navigate(SCREEN_ROUTER.MAIN);
                                this.props.getUserInfo();
                            } catch (error) {
                                alert(error.message);
                            }
                        }}
                        style={styles.update}>
                        <Text
                            style={styles.txt}
                        > CẬP NHẬT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    update: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 13,
        color: 'white',
        height: "20%",
        width: "70%",
        borderRadius: 5,
        backgroundColor: '#69AAFF',
        marginTop: 100,
        padding: 15,
        paddingLeft: 90
    },
    ic: {
        height: 18,
        width: 18,
    },
})
const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUserInfo,

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserinfoScreen)