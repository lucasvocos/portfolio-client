import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-navigation'>
        <h2 className='footer-title'>Lucas Vocos</h2>
        <nav className='footer-links'>
          <a href={'tel:12134228271'}>+1 213 422 8271</a>
          <a href={'mailto:hello@lucasvocos.com'} target="_blank" rel="noopener noreferrer">hello@lucasvocos.com</a>
          <a href={'https://www.github.com/lucasvocos'} target="_blank" rel="noopener noreferrer">Github</a>
        </nav>
      </div>
      <small>© {(new Date().getFullYear())} Lucas Vocos</small>
    </footer>
  )
}
