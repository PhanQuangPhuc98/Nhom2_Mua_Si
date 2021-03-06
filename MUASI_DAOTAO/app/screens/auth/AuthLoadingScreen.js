import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ActivityIndicator
} from 'react-native'
import NavigationUtil from '../../navigation/NavigationUtil'
import i18 from '@i18';
import AsyncStorage from '@react-native-community/async-storage';//lưu dữ liệu xuống ổ cứng
import { SCREEN_ROUTER } from '@app/constants/Constant';


export default class AuthLoadingScreen extends Component {

    componentDidMount = async () => {
        try {
            const b = "$2y$10$9DMee4cyH6nLwf9qp2wX6.9b7/R4s3x/KhzFiVCB8Iu37B3HHDkYm"
            await AsyncStorage.setItem("token", b)
            const token = await AsyncStorage.getItem("token")
            if (token && token.length > 0) {
                setTimeout(() => {
                    NavigationUtil.navigate(SCREEN_ROUTER.HOME);
                }, 200);

            } else {
                NavigationUtil.navigate(SCREEN_ROUTER.LOGIN);
            }
        } catch (error) {
            NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
        }



    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <ActivityIndicator />
                    <Text>{i18.t('user')}</Text>
                </View>
            </SafeAreaView>
        )
    }



}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
