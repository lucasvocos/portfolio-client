import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

export default class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  renderLogoutLink() {
    return (
      <div className='logged-in' role='navigation' aria-label="Authenticated User Actions">

        <Link
          to='/new-project'>
          New Project
        </Link>
        {' '}
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <>
      </>
    )
  }


  render() {
    return (
      <header className="portfolio-header">
        <h1>Lucas Vocos</h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    )
  }
}
