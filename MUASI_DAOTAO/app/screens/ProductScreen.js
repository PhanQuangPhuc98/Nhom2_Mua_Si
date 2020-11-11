import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProduct } from "@action";

export class ProductScreen extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() { }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text> {JSON.stringify(this.props.productState)} </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    productState: state.productReducer,
})

const mapDispatchToProps = {
    getProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
