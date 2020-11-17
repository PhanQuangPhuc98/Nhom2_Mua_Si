import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import API from '@api'
import Loading from '../components/Loading'
export class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: {},
  }
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://3.0.209.176/api/GetHome');
      const jsonResponse = response
      // alert(JSON.stringify(jsonResponse))
      this.setState({
        isLoading: false,
        isError: false,
        data: jsonResponse.data
      })
    } catch (error) {
      setTimeout(() => {
        this.setState({
          isLoading: false,
          isError: false,
          data: {}
        })
      }, 5000)
    }
  }
  render() {
    const { isLoading, isError, data } = this.state
    if (isLoading) {
      return (
        <Loading />
      );
    }
    if (isError) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Đã có lỗi xảy ra</Text>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/images/homeAssets/quan_ly_ton_kho.png')} 
          style={styles.image}>
          <Text style={styles.txtHeader}> Tôi muốn mua sỉ </Text>
          <View style={styles.searchKey}>
            <TextInput style={styles.TextInput}
              placeholder=' Danh mục sản phẩm '
            />
            <TouchableOpacity style={styles.dropBox}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                <Text >Toàn quốc</Text>
                <Image source={require('../assets/images/homeAssets/Icon-arrow-back.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, color: 'white' }}>Để tìm kiếm được khách hàng tốt nhất bạn nên đăng ký đúng danh mục sản phẩm !</Text>
          <TouchableOpacity>
            <View style={styles.push}>
              <View style={styles.TextPush}>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: '500' }}>Đăng tin</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground >

        <View style={{ backgroundColor: '##F5F6F8', height: 50, justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', marginLeft: 15 }}> Từ khoá tìm kiếm</Text>
        </View>
        <View style={{ height: 200, backgroundColor: '#fff' }}>


        </View>
      </SafeAreaView >
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  image: {
    height: 200,
    width: '100%',
  },
  txtHeader: {
    marginTop: 15,
    marginLeft: 13,
    color: '#FFFFFF',
    fontSize: 20,
  },
  searchKey: {
    flexDirection: 'row',
    marginVertical: 10
  },
  TextInput: {
    height: 40,
    width: '70%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginLeft: 5
  },
  dropBox: {
    height: 40,
    width: '27%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  push: {
    marginTop: 14,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  TextPush: {
    backgroundColor: '#69AAFF',
    height: 40,
    width: 90,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  }

})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
