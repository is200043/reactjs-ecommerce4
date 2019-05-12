import React, { Component } from 'react'
import { Box, TextInput, Button } from 'grommet'
import { connect } from 'react-redux';

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleLogin = async () => {
        const {
            login
        } = this.props;
        try {
            await login(this.state);
            alert("Login Success");
        } catch (error) {
            alert("Login Fail");
        }
    }
    render() {
        return (
            <Box width="medium"
                justify='between'>
                <TextInput
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange} />
                <TextInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange} />
                <Button label="Sign in"
                    onClick={(e) => this.handleLogin()} />
            </Box>
        )
    }
}
const mapStateToProps = state => {
}
const mapDispatchToProps = dispatch => {
    return {
        login: dispatch.user.login
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
