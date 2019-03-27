import React from 'react'
import Router from 'next/router'
import Cookie from 'js-cookie'

import { authorize } from '../../utils/auth0'

class SignIn extends React.Component {
  componentDidMount () {
    if(!Cookie.get('user')) {
      authorize()
    } else {
      Router.push('/')
    }

  }
  render () {
    return null
  }
}

export default SignIn;
