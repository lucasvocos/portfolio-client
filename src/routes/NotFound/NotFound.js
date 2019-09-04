import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'

class NotFoundRoute extends React.Component {
  render() {
    return (
      <section>
        <h2>404 — Sorry, this page isn't found</h2>
        <Link
          className='serif'
        to='/'>
        Back to homepage
        </Link>
      </section>
    );
  }
}

export default NotFoundRoute
