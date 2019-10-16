import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-navigation'>
        <h2 className='footer-title'>Lucas Vocos</h2>
        <nav className='footer-links'>
          <a href={'tel:12134228271'} target="_blank" rel="noopener noreferrer">+1 213 422 8271</a>
          <a href={'mailto:hello@lucasvocos.com'} target="_blank" rel="noopener noreferrer">hello@lucasvocos.com</a>
          <a href={'https://www.instagram.com/lucasvocos'} target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
      <small>© {(new Date().getFullYear())} Lucas Vocos</small>
    </footer>
  )
}
