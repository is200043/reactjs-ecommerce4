import React from 'react'
import { withRouter } from 'react-router-dom'
import { Box, Heading, Button } from 'grommet';
import ShoppingCartButton from './ShoppingCartButton';
import { connect } from 'react-redux';
import store from '../store';

class AppBar extends React.Component {
  render() {
    const {
      isAuthenticated
    } = this.props;
    return (
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{
          left: 'medium',
          right: 'medium',
          vertical: 'small'
        }}
        elevation='medium'
        style={{ zIndex: '1' }}
      >
        <Heading
          level="4"
          margin="xsmall"
        >
          Devincube store
        </Heading>
        <Box style={{ width: 300 }} direction="row">
          <ShoppingCartButton />
          {
            !isAuthenticated ? <Button label="Login" onClick={() => this.props.login()} /> :
              <Button label="Logout" onClick={() => this.props.logout()} />
          }
          {
            isAuthenticated && <Button label="My Profile" onClick={() => this.props.history.push('/profile')} />
          }
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  const isAuthenticated = store.select.user.isAuthenticated
  return {
    isAuthenticated: isAuthenticated(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: dispatch.user.login,
    logout: dispatch.user.logout,
    profile: dispatch.user.profile
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppBar))
