import React, { Component } from 'react';
import Head from './Head';
import Logo from '../components/Logo'
import PrimaryNav from './PrimaryNav'
import StyledHeader from '../styled-components/header'
import StyledContainer from '../styled-components/container'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Head></Head>
        <StyledHeader>
          <StyledContainer className="container">
            <Logo />
            <PrimaryNav />
          </StyledContainer>
        </StyledHeader>
      </React.Fragment>
    )
  }
}
