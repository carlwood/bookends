import React from 'react'
import { unsetToken } from '../../utils/auth'
import { logout } from '../../utils/auth0'
import Router from 'next/router';

class Logout extends React.Component {
  componentDidMount () {
    unsetToken();
    logout();
    Router.push('/');
  }
  render() {
    return null;
  }
}

export default Logout;
