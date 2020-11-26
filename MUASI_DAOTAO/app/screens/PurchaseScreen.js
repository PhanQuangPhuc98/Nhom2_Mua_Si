import React, { Component } from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'
import Navigation from '../components/Navigation';
import NavigationUtil from '@app/navigation/NavigationUtil'
import RNHeader from '../components/WHeader';
import R from '@R';
import ImageText from '../components/ImageText';
import { connect } from 'react-redux'
import { getPurchase } from '@action';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import ShortName from '../components/ShortName';
import * as API from "@api";
// const options = [

//     {
//         id: 1,
//         name: <Text style={{ color: '#058B00' }}>Đã mua thành công</Text>
//     }
//     ,
//     {
//         id: 1,
//         name: <Text style={{ color: '#058B00' }}>Tiếp tục hoạt động</Text>,
//     },
//     {
//         id: 2,
//         name: <Text Text style={{ color: '#4DCEFC' }}> Ngừng hoạt động</Text >,
//     },
//     {
//         id: 3,
//         name: <Text style={{ color: 'red' }}>Xóa</Text>
//     },

// ]

class PurchaseScreen extends Component {
    componentDidMount() {
        this.props.getPurchase();

    }
    state = {
        post_id: null,
        status: null,
        options: [],
    }

    render() {
        const c = this.state.options;
        let d;

        if (c) {
            d = Object.values(c);
        }

        const obj = this.props.purchaseState.data;
        let arr;
        if (obj) {
            arr = Object.values(obj);
        }
        let Index = d.map(Item => {
            // alert(Item.id)
            return (
                Item.id
            )

        })
        //alert(JSON.stringify(Index))
        return (

            <View style={styles.container}>
                <RNHeader
                    leftButton={
                        <Image
                            style={styles.ic}
                            source={R.images.ic_arrowback_white}
                        >
                        </Image>
                    }
                    leftPress={() => { NavigationUtil.goBack() }}
                    titleHeader="Tin mua của bạn"
                    rightButton={
                        <Image
                            style={styles.ic}
                            source={R.images.ic_add}
                        >
                        </Image>
                    }
                    rightPress={() => {
                    }}
                />

                {arr?.map(item => {

                    return (
                        <TouchableOpacity onPress={() => {
                            this.ActionSheet.show()
                            this.state.post_id = item.post_id
                            if (item.status == 0) {
                                this.setState({
                                    options: [
                                        {
                                            id: 1,
                                            name: <Text style={{ color: '#058B00' }}>Tiếp tục hoạt động</Text>,
                                        },
                                        {
                                            id: 2,
                                            name: <Text Text style={{ color: '#4DCEFC' }}> Ngừng hoạt động</Text >,
                                        },
                                        {
                                            id: 3,
                                            name: <Text style={{ color: 'red' }}>Xóa</Text>
                                        },
                                    ]
                                })

                            }
                            if (item.status == 1) {
                                this.setState({
                                    options: [
                                        {
                                            id: 0,
                                            name: <Text style={{ color: '#058B00' }}>Đã mua thành công</Text>
                                        }
                                        ,
                                        {
                                            id: 2,
                                            name: <Text Text style={{ color: '#4DCEFC' }}> Ngừng hoạt động</Text >,
                                        },
                                        {
                                            id: 3,
                                            name: <Text style={{ color: 'red' }}>Xóa</Text>
                                        },
                                    ]
                                })

                            }
                            else if (item.status == 2) {
                                this.setState({
                                    options: [
                                        {
                                            id: 1,
                                            name: <Text style={{ color: '#058B00' }}>Tiếp tục hoạt động</Text>,
                                        },
                                        {
                                            id: 3,
                                            name: <Text style={{ color: 'red' }}>Xóa</Text>
                                        },
                                    ]
                                })
                            }
                        }
                        }>
                            <View
                                style={styles.header}>
                                <Text style={styles.nameInfor}>{item.name}</Text>
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <View style={styles.inforUser}>
                                        <View style={styles.sign}>
                                            <ShortName
                                                label={item.username}
                                            >
                                            </ShortName>
                                        </View>
                                        <Text style={styles.Username}>
                                            {item.username}
                                        </Text>
                                        <Text style={styles.Phone}>
                                            {item.phone}
                                        </Text>
                                    </View>
                                    <View style={styles.infor}>

                                        <ImageText
                                            label={item.address}
                                            img={R.images.ic_adress}
                                        >
                                        </ImageText>
                                        <ImageText
                                            label={item.created_date}
                                            img={R.images.ic_oclock}
                                        >
                                        </ImageText>
                                        {_Check(item.status)}
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity >

                    );
                })}
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    onPress={async (number) => {
                        // alert(JSON.stringify(Index))
                        try {
                            await API.UpdateStatus({
                                "post_id": this.state.post_id,
                                "status": Index[number]
                            })
                            this.props.getPurchase()
                        } catch (error) {
                            alert(error)
                        }
                    }}
                    options={d.map(Item => {
                        return (
                            <Text>
                                {Item.name}
                            </Text>
                        )

                    })}
                />
            </View >
        )
    }
}
_Check = (status) => {
    switch (status) {
        case 0:
            return (
                <Text style={{
                    marginTop: 10,
                    marginLeft: 58.8,
                    fontSize: 15,
                    color: '#058B00'
                }}>
                    Đã mua thành công
                </Text>);
        case 1:
            return (
                <Text style={{
                    marginTop: 10,
                    marginLeft: 78.8,
                    color: '#4DCEFC',
                    fontSize: 15,
                }}>
                    Đang hoạt động
                </Text>
            );
        case 2:
            return (
                <Text style={{
                    marginTop: 10,
                    marginLeft: 68.8,
                    color: '#FF0000',
                    fontSize: 15
                }}>
                    Ngừng hoạt động
                </Text>
            );
        default:
            alert("Không nhận");
    }

}

const mapStateToProps = (state) => ({
    purchaseState: state.purchaseReducer,
})

const mapDispatchToProps = {
    getPurchase,

}
const styles = StyleSheet.create({
    ic: {
        height: 18,
        width: 18,
    },
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },
    header: {
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'column',
        padding: 10
    },
    nameInfor: {
        fontSize: 17,
        marginLeft: 5
    },
    inforUser: {
        flex: 1,
        marginLeft: 5
    },
    infor: {
        flex: 1,
        marginTop: 20
    },
    sign: {
        height: 34,
        width: 34,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: '#B7E6E6',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    Username: {
        fontSize: 14,
        marginLeft: 45,
        marginTop: 15
    },
    Phone: {
        fontSize: 12,
        marginLeft: 45
    },

})
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseScreen)
