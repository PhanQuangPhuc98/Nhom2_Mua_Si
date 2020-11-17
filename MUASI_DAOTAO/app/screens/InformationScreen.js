import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Navigation from '../components/Navigation';
import R from '@R';
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserInfo } from '@action'
import RNHeader from '../components/WHeader';
export class InformationScreen extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }
    render() {
        return (
            <View>
                <RNHeader
                    leftButton={
                        <Image
                            style={styles.ic}
                            source={R.images.ic_arrowback_white}
                        >
                        </Image>
                    }
                    leftPress={() => { NavigationUtil.goBack() }}
                    titleHeader="Thông tin cá nhân"
                    rightButton={
                        <Image
                            style={styles.ic}
                            source={R.images.ic_featheredit}
                        >
                        </Image>
                    }
                    rightPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO, { data: this.props.userState.data })
                    }}
                />
                {/* <Navigation
                    img={R.images.ic_arrowback_white}
                    ic={R.images.ic_featheredit}
                    label="Thông tin cá nhân"
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO, { data: this.props.userState.data })
                    }}
                >
                </Navigation> */}

                <View>
                    <Text>
                        {this.props.userState.data.fullname}
                    </Text>

                    <Text>
                        {this.props.userState.data.sex}
                    </Text>

                    <Text>
                        {this.props.userState.data.province_id}
                    </Text>
                    <Text>
                        {this.props.userState.data.address}
                    </Text>
                    <Text>
                        {this.props.userState.data.email}
                    </Text>
                    <Text>
                        {this.props.userState.data.phone}
                    </Text>
                </View>
            </View>
        );
    }
};

const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUserInfo
}
const styles = StyleSheet.create({
    ic: {
        height: 18,
        width: 18,
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(InformationScreen)