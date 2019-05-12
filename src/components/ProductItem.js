import React from 'react'
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Button,
} from 'grommet'
import { Shop } from 'grommet-icons'
import { connect } from 'react-redux'

class ProductItem extends React.Component {
  handleAddToCart = async () => {
    console.log('Add to cart')
    const {
      addItem,
      id
    } = this.props;
    await addItem({
      id,
      quantity: 1,
      type: 'cart_item',
    });
  }
  render() {
    const { name, description, image, price } = this.props
    return (
      <Box
        direction="column"
        basis="medium"
        pad="small"
      >
        <Box>
          <Stack fill anchor="top-right">
            <Box height="small">
              <Image fit="cover" src={image} />
            </Box>
            <Box background="brand" pad="xsmall">
              <Text>{price}</Text>
            </Box>
          </Stack>
        </Box>
        <Box align="center">
          <Heading textAlign="center" level={4} margin={{vertical: 'xsmall'}}>
            {name}
          </Heading>
          <Text textAlign="center">
            {description}
          </Text>
          <Button primary pad="small" margin="small" icon={<Shop />} label="Add to cart" onClick={this.handleAddToCart}/>
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: dispatch.cart.addItem
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
