import React, { Component } from 'react'
import StyledPage from '../styled-components/page'
import StyledContainer from '../styled-components/container'

export default class Page extends Component {
  render() {
    return (
      <StyledPage>
        <StyledContainer>
          {this.props.children}
        </StyledContainer>
      </StyledPage>
    )
  }
}
