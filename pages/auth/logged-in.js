import React, { PropTypes } from 'react'
import Router from 'next/router'

import { setToken } from '../../utils/auth'
import { parseHash } from '../../utils/auth0'

export default class SignedIn extends React.Component {
  componentDidMount () {
    parseHash((err, result) => {
      if(err) {
        console.error('Something happened with the Sign In request')
        return;
      }

      setToken(result.idToken, result.accessToken);
      console.log(result);
      Router.push('/')
    })
  }
  render () {
    return null
  }
}