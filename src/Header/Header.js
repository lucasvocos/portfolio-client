import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'
import './Header.scss'

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
          className='serif'
          to='/new-project'>
          New Project
        </Link>
        {' '}
        <Link
          className='serif'
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
        <h1>
          <Link
            to='/'
          >
          Lucas Vocos
          </Link>
        </h1>
        <p>Full Stack Creative Developer</p>
        <Link
          to='/projects'
        >
        Portfolio
        </Link>
        <Link
          to='/about'
        >
        About
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    )
  }
}
