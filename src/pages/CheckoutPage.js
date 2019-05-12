import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Box,
    Image,
    Heading,
    Text,
    TextInput,
    Button
} from 'grommet'

class CheckoutPage extends Component {
    componentDidMount() {
        this.props.getCartItems();
    }
    state = {
        email: '',
        first_name: '',
        last_name: '',
        company_name: '',
        line_1: '',
        line_2: '',
        city: '',
        postcode: '',
        county: '',
        country: '',
        phone_number: '',
        instructions: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCheckoutSubmit = (e) => {
        const {
            checkout
        } = this.props;
        checkout(this.state);
    }
    render() {
        const {
            cartItems
        } = this.props
        return (
            <Box direction="row" pad="small">
                <Box width="medium">
                    {
                        cartItems.map((product) => (
                            <Box
                                direction="row"
                                basis="medium"
                                pad="small"
                            >
                                <Box>
                                    <Box>
                                        <Box height="small">
                                            <Image fit="cover" src={product.image} />
                                        </Box>
                                    </Box>
                                    <Box align="center">
                                        <Heading textAlign="center" level={4} margin={{ vertical: 'xsmall' }}>
                                            {product.name}
                                        </Heading>
                                        <Text textAlign="center">
                                            {product.quantity} x {product.amount} = {product.totalPrice}
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box flex>
                    <Box
                        direction="row"
                        pad="medium"
                        fill
                    >
                        <Box width="flex">
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="email"
                                    placeholder="Email"
                                    type="mail"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="first_name"
                                    placeholder="Firstname"
                                    onChange={this.handleChange} />

                                <TextInput
                                    name="last_name"
                                    placeholder="Lastname"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="company_name"
                                    placeholder="Company Name"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="line_1"
                                    placeholder="Address Line 1"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="line_2"
                                    placeholder="Address Line 2"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="city"
                                    placeholder="City"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="postcode"
                                    placeholder="Postcode"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="county"
                                    placeholder="County"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="country"
                                    placeholder="Country"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="phone_number"
                                    placeholder="Phone Number"
                                    onChange={this.handleChange} />
                            </Box>
                            <Box direction="row" margin="xxsmall">
                                <TextInput
                                    name="instructions"
                                    placeholder="Instructions"
                                    onChange={this.handleChange} />
                            </Box>
                            <Button
                                primary
                                onClick={this.handleCheckoutSubmit}
                                label="Submit"
                            />
                        </Box>
                    </Box >
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: dispatch.cart.getCartItemsAsync,
        checkout: dispatch.cart.checkoutAsync
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);