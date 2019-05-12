import React, { Component } from 'react'
import { Box } from 'grommet';
import { connect } from 'react-redux';

class CartItemList extends Component {
  render() {
    const {
      cartItems,
      totalPrice,
    } = this.props
    return (
      <Box pad="small">
        {cartItems.map(item => (
          <Box pad="small" border="bottom">
            {item.name} x {item.amount}
          </Box>
        ))}
        <Box pad="small" border="bottom">
          {totalPrice} Baht
        </Box>
      </Box>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice
  }
}
export default connect(mapStateToProps)(CartItemList)