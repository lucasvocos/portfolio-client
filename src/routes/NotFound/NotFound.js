import React from 'react'
import { Link } from 'react-router-dom'

class NotFoundRoute extends React.Component {
  render() {
    return (
      <section>
        <h2>404 - Page not found</h2>
        <Link
        to='/'>
        Go Home
        </Link>
      </section>
    );
  }
}

export default NotFoundRoute
