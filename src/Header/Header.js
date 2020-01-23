import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
      <header className="portfolio-header">
        <Link
          to={'/'}>
          <h1>Lucas Vocos</h1>
        </Link>
        <Link
          to='/contact'>
          Info
        </Link>
      </header>
    )
}
export default Header

