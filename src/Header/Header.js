import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import './Header.scss'

export default class Header extends React.Component {
  state = {
    expanded: false
  }
  expandMenu = (e) => {
    this.setState({
      expanded: true
    })
  }
  closeMenu = (e) => {
    this.setState({
      expanded: false
    })
  }

  render() {
    return (
      <header className="portfolio-header">
        <Link
          to={'/'}>
          <h1>Lucas Vocos</h1>
        </Link>
        <MediaQuery maxWidth={1023}>
          <button className='mobile-menu-trigger' onClick={this.expandMenu}>Menu</button>
        </MediaQuery>
        <MediaQuery minWidth={1024}>
          <nav className='links'>
            <Link
              to={`/archive`}>
              Archive
            </Link>
            <Link
              to='/contact'>
              Contact
            </Link>
          </nav>
        </MediaQuery>
        {this.state.expanded
        ? (
          <aside className='mobile-menu'>
            <header className='mobile-menu-header'>
              <Link
                onClick={this.closeMenu}
                to={'/'}>
                <h1>Lucas Vocos</h1>
              </Link>
              <button className='mobile-menu-trigger' onClick={this.closeMenu}>Close</button>
            </header>
            <nav className='mobile-menu-links'>
              <Link
                onClick={this.closeMenu}
                to={`/archive`}>
                Archive
              </Link>
              <Link
                onClick={this.closeMenu}
                to='/contact'>
                Contact
              </Link>
            </nav>
          </aside>
        )
        : ''}
      </header>
    )
  }
}
