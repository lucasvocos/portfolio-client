import React from 'react'
import './Contact.scss'
import Image from './lucas.JPG'

export default class Contact extends React.Component {
  render() {
    return (
      <>
      <section className='intro'>
        <div className='intro-text'>
          <p>Lucas Vocos is a design-oriented full-stack Web Developer based in <span className='serif'>Detroit, Michigan.</span> His work includes designing and delivering elegent, well designed user-friendly solutions.</p>
          <p>His tech stack includes: React, Node, Express, Javascript, Shopify Liquid, Sass, and PostgreSQL. His personal design & development practice is <a href='https://www.buena--suerte.com'>Buena Suerte</a></p>
          <p>When not programming, Lucas likes to listen to music and play soccer</p>
          <div className='contact'>
            <p className='serifItalic'>(Contact)</p>
            <ul className='contact-list'>
              <li>
                <a href="https://github.com/lucasvocos" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lucasvocos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/lucasvocos/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="mailto:lucasvocos@gmail.com">Email</a>
              </li>

            </ul>
          </div>
        </div>
        <div className='intro-image'>
          <img src={Image} alt='Lucas Vocos' className='intro-image-img'/>
        </div>
      </section>
      </>
    )
  }
}
