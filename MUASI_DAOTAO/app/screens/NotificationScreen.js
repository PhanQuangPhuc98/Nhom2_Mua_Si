import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { notifyData } from '@api'
import reactotron from 'reactotron-react-native'
export default class NotificationScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: {},
  }
  componentDidMount = async () => {
    try {
      const response = await notifyData()
      reactotron.log('API', response)
      const jsonResponse = response.data
      // alert(JSON.stringify(response.data))
      this.setState({
        isLoading: false,
        isError: false,
        data: jsonResponse
      }, () => {
        reactotron.log("API2", this.state.data);
      })
    } catch (error) {
      reactotron.log(error)
      this.setState({
        isLoading: false,
        isError: false,
        data: {}
      })
    }
  }
  _Notify() {

  }
  render() {
    const { isLoading, isError, data } = this.state
    return (
      
      <View style={styles.container}>
        <View style={{ height: 55, backgroundColor: '#69AAFF' }}>
          <Text style={{ fontSize: 20, fontWeight: 'Medium', color: '#FFFFFF', padding: 15 }}>Thông báo</Text>
        </View>
        <FlatList
          data={this.state.data.listpost}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.v_view}>
                <View style={styles.v_round} />
                <View style={{ marginLeft: 18, borderBottomWidth: 0.2, }}>
                  <Text style={{
                    fontSize: 17,
                    marginLeft: 10
                  }}>Yêu cầu tham gia nhóm của bạn đã được phê duyệt</Text>
                  <View>
                    <Text style={{ marginLeft: 160 }}>{item.modified_date}</Text>
                  </View>
                  {_funtionNotify(true)}
                </View>
              </View>
            )
          }} 
          keyExtractor={item => item.id}
          ListFooterComponent= {this.renderFooter}
          onEndReached={this.props.handleLoadMore}
          onEndReachedThreshold={0}
          />
      </View>
    )
  }
}
_funtionNotify = (isWarnig = false) => {
  return (
    <View>
      {isWarnig ? <View style={styles.isWarning}></View> : null}
    </View>
  )
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  v_view: {
    flexDirection: 'row',
    padding: 25
  },
  v_round: {
    width: 50,
    height: 50,
    backgroundColor: '#8B9DFF',
    borderRadius: 50 / 2,
  },
  isWarning: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 10,
    backgroundColor: 'red',
    top: -30,
    left: 285
  }
})
{/* <View style={styles.v_view}>
          <View style={{ width: 50, height: 50, backgroundColor: '#4AD1C7', borderRadius: 50 / 2, }}>
          </View>
          {_funtionMessage(true)}

        </View>
        <View style={styles.v_view}>
          <View style={{ width: 50, height: 50, backgroundColor: '#FFCB52', borderRadius: 50 / 2, }}>
          </View>
          {_funtionMessage(true)}
        </View>
        <View style={styles.v_view}>
          <View style={{ width: 50, height: 50, backgroundColor: 'green', borderRadius: 50 / 2, }}>
          </View>
          {_funtionMessage(true)}
        </View> */}