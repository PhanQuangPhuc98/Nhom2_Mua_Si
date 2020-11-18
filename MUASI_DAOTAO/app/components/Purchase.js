import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import * as API from '@api';
import { connect } from 'react-redux'
import { getPurchase, getUserInfo } from '@action';
import Loading from '@app/components/Loading'
class Purchase extends PureComponent {
    componentDidMount() {
        this.props.getPurchase();

    }

    render() {
        if (this.props.purchaseState.isLoading) return <Loading />;
        return (
            <View style={styles.container}>

                <View style={{
                    backgroundColor: 'white'
                }}>
                    <Text style={{
                        fontSize: 17,
                        resizeMode: 'contain',
                        borderBottomWidth: 0.5,

                    }}> {JSON.stringify(this.props.purchaseState.data)} </Text>

                    <View style={styles.sign}>
                        <Text style={{ fontSize: 12 }}>
                            MC
                    </Text>
                    </View>
                    <Text style={{ fontSize: 14 }}>
                        Nguyễn minh châu
                </Text>
                    <Text style={{ fontSize: 12 }}>
                        096358712
                </Text>
                    <Image style={{
                        width: 7.38,
                        height: 10.55,
                        backgroundColor: 'red',
                        resizeMode: 'contain',
                    }}>

                    </Image>
                    <Image style={{
                        width: 10.52,
                        height: 10.52,
                        backgroundColor: 'pink',
                        resizeMode: 'contain',
                    }}>

                    </Image>
                    <Text style={{ fontSize: 12 }}>
                        25/06/2020
                </Text>
                    <Image>

                    </Image>
                    <Text>

                    </Text>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    purchaseState: state.purchaseReducer,
})

const mapDispatchToProps = {
    getPurchase,

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },
    sign: {
        height: 34,
        width: 34,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: '#B7E6E6',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(Purchase)