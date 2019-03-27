import React, { Component } from 'react'
import Link from 'next/link';
import StyledPrimaryNav from '../styled-components/primaryNav'

export default class NavLinks extends Component {
  render() {
    return (
      <StyledPrimaryNav>
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
      </StyledPrimaryNav>
    )
  }
}
