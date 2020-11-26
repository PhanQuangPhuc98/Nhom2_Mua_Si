import React, { Component } from 'react'
import { Text, View, StyleSheet,FlatList,SafeAreaView,Image } from 'react-native'
import { notifyData, requestHomeData } from '@api'
import reactotron from 'reactotron-react-native'
import R from '@R'
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
  render() {
    const { isLoading, isError, data } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.v_header}>
          <Text style={styles.t_notify}>Thông báo</Text>
        </View>
        <FlatList
          data={this.state.data.data}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.v_flatlist}>
                <View style={styles.v_round}/>
                <View style={styles.v_text}>
                  <Text style={styles.t_text}>{item.content}</Text>
                  <View>
                    <Text style={styles.created_date}>{item.created_date}</Text>
                  </View>
                </View>
              </View>
            )
          }}
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
  v_header: {
    height: 55,
    backgroundColor: '#69AAFF'
  },
  t_notify: {
    fontSize: 20,
    // fontWeight: 'Medium', 
    color: '#FFFFFF',
    padding: 15
  },
  v_flatlist: {
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 20,
    marginRight: 37
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
    top: -35,
    left: 285
  },
  v_text: {
    marginLeft: 18,
    borderBottomWidth: 0.5,
    marginRight: 20
  },
  t_text: {
    fontSize: 17,
    marginLeft: 7
  },
  created_date: {
    marginLeft: 160,
    marginTop: 8,
    marginBottom: 10
  }
})
