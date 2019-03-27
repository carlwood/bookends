import React, { Component } from 'react'
import Link from 'next/link';
import StyledLogo from '../styled-components/logo'

export default class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <StyledLogo>Bookends</StyledLogo>
        </Link>{' '}
      </React.Fragment>
    )
  }
}
