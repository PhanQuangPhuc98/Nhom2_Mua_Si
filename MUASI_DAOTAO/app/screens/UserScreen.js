import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getUserInfo } from '@action'
import User from '../components/User';
import R from '@R';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import * as API from '@api';
import NavigationUtil from '@app/navigation/NavigationUtil'
export class UserScreen extends Component {
    componentDidMount() {
        this.props.getUserInfo();

    }

    render() {
        if (this.props.isLoading) {
            return (
                <Text>dang load</Text>
            )
        }
        return (
            <View
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={styles.sign}>
                        {_hello(this.props.userState.data.fullname)}
                    </View>
                    <Text style={styles.txt_name}>
                        {this.props.userState.data.fullname}
                    </Text>
                    <Text style={styles.txt_phone}>
                        {this.props.userState.data.phone}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {

                            NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO, { data: this.props.userState.data })
                        }}
                    >
                        <Text style={styles.txt_edit}>
                            chỉnh sửa
                    </Text>
                    </TouchableOpacity>
                </View>
                <User
                    img={R.images.ic_recipecreate}
                    label='Tin mua của bạn'
                    ic={R.images.img_arrow}
                    action={_PURCHASE}

                />
                <User
                    img={R.images.ic_single}
                    label='Thông tin cá nhân'
                    ic={R.images.img_arrow}
                    action={_INFO}
                />
                <User
                    img={R.images.ic_awesome}
                    label='Danh mục của tôi'
                    ic={R.images.img_arrow}
                    action={_DIRECTORY}
                />
                <User
                    img={R.images.ic_feather}
                    label='Đổi mật khẩu'
                    ic={R.images.img_arrow}
                    action={_CHANGE_PASSWORD}
                />
                <User
                    img={R.images.ic_recipe}
                    label='Hướng dẫn sử dụng'
                    ic={R.images.img_arrow}
                    action={_USEMANMUAL}
                />
                <User
                    img={R.images.ic_log}
                    label='Đăng xuất'
                    action={_LOGOUT}
                />
            </View>
        );
    }
};
_hello = (label) => {
    if (label == null) {
        return <Text style={styles.txt_sign}>
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
        return <Text style={styles.txt_sign}>
            {Test}
        </Text>
    }

};
_PURCHASE = () => {
    NavigationUtil.navigate(SCREEN_ROUTER.PURCHASE_SCREEN)
};
_INFO = () => {
    NavigationUtil.navigate(SCREEN_ROUTER.INFORMATION_SCREEN)
};
_DIRECTORY = () => {
    NavigationUtil.navigate(SCREEN_ROUTER.DIRECTORY_SCREEN)
};
_CHANGE_PASSWORD = () => {
    NavigationUtil.navigate(SCREEN_ROUTER.CHANGE_PASSWORD)
};
_USEMANMUAL = () => {
    NavigationUtil.navigate(SCREEN_ROUTER.USE_MANUAL_SCREEN)
};
_LOGOUT = () => {
    API.Logout();
    NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
}


const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUserInfo
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F3F3F3'
    },
    header: {
        marginBottom: 5,
        backgroundColor: 'white',
        width: "100%",
        height: "17%",
        justifyContent: 'center',
    },
    sign: {
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: '#E2E6B7',
        marginTop: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt_sign: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#B8CB85'
    },
    txt_name: {
        marginTop: 10,
        marginLeft: 130,
        fontSize: 21,
        fontWeight: 'bold'
    },
    txt_phone: {
        marginTop: 5,
        marginLeft: 130,
        fontSize: 15
    },
    txt_edit: {
        width: '20%',
        height: 25,
        marginTop: 5,
        marginLeft: 130,
        fontSize: 12,
        borderRadius: 20,
        borderWidth: 0.5,
        padding: 4,
        paddingLeft: 14
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)
