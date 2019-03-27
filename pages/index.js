import React, { Component } from 'react'
import Header from '../layout/Header'
import Page from '../layout/Page'
import Link from 'next/link'
import CurrentlyReading from '../components/CurrentlyReading'
import { getUserFromServerCookie, getUserFromLocalCookie } from '../utils/auth'


class Home extends Component {
  static getInitialProps(ctx) {
    // const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    // const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    // return {
    //   ...pageProps,
    //   loggedUser,
    //   currentUrl: ctx.pathname,
    //   isAuthenticated: !!loggedUser
    // }
    console.log(ctx);
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    return {
      loggedUser,
      isAuthenticated: !!loggedUser
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <Page>
          {!this.props.isAuthenticated && (
            <React.Fragment>
              <h1>Not authed</h1>
              <p><Link href="/auth/login">Log in</Link></p>
            </React.Fragment>
          )}
          {this.props.isAuthenticated && (
            <React.Fragment>
              <h1>Hi {this.props.loggedUser.given_name}</h1>
              <p><Link href="/auth/logout">Log out</Link></p>
            </React.Fragment>
          )}
        </Page>
      </div>
    )
  }
}

export default Home