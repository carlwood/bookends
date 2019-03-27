import React, { Component } from 'react'
import Header from '../layout/Header'
import Page from '../layout/Page'
import Link from 'next/link'
import CurrentlyReading from '../components/CurrentlyReading'
import { getUserFromServerCookie, getUserFromLocalCookie } from '../utils/auth'
import {loadFirebase} from '../lib/db'
import { deepStrictEqual } from 'assert';


class Home extends Component {
  static async getInitialProps(ctx) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    let firebase = await loadFirebase()
    let db = firebase.firestore()
    let result = await new Promise((resolve, reject) => {
      firebase.firestore().collection('books')
        .limit(10)
        .get()
        .then(snapshot => {

          let data = []
          snapshot.forEach((doc) => {
            data.push(Object.assign({
              id: doc.id,
              title: doc.title,
              author: doc.author
            }, doc.data()))
          })
          resolve(data)
        }).catch(error => {
          reject([])
      })
    })
    return {
      books: result,
      currentUrl: ctx.pathname,
      loggedUser,
      isAuthenticated: !!loggedUser
    }
  }


  render() {
    const books = this.props.books;
    const user = this.props.loggedUser;

    return (
      <React.Fragment>
        <Header />
        <Page>
          {!this.props.isAuthenticated && (
            <React.Fragment>
              <h1>Logged out</h1>
              <p><Link href="/auth/login">Log in</Link></p>
            </React.Fragment>
          )}
          {this.props.isAuthenticated && (
            <React.Fragment>
              <h1>Hi {user.given_name}</h1>
              <img src={user.picture} alt={user.given_name} width="80" height="80" />
              <h1>Books</h1>
              {books.map((book) => 
                <div key={book.id}>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              )}
              <p><Link href="/auth/logout">Log out</Link></p>
            </React.Fragment>
          )}
        </Page>
      </React.Fragment>
    )
  }
}

export default Home