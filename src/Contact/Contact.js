import React from 'react'
import './Contact.scss'
import Image from './lucas.JPG'
import { Link } from 'react-router-dom'

export default class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (



      <main className='contact' aria-label="Contact Page">
        <section className='contact-details'>
          <h3>Lucas Vocos</h3>
          <p>Detroit, MI</p>
          <p><a href={`mailto:hello@lucasvocos.com`}>hello@lucasvocos.com</a> </p>
          <p><a href={`tel:12134228271`}>+1 (213) 422 8271</a></p>
          <p><a href="https://github.com/lucasvocos" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><a href="https://www.linkedin.com/in/lucasvocos/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <img src={Image} alt='Lucas Vocos' className='about-image-img'/>
        </section>
        <section className='resume'>
          <div className='about-paragraph'>
            <p>Hello, I'm Lucas. I'm a design-oriented full-stack Web Developer based in Detroit, Michigan currently looking for opportunities. My work includes front and back end web development, Shopify-backed eCommerce shops, as well as user interface design.</p>
            <p>Over the last few years, I've freelanced design/development under my personal practice (<a href='https://www.buena--suerte.com' target="_blank" rel='noreferrer noopener'>Buena Suerte</a>). When not programming, I like to make playlists, watch the Argentinean national futbol team and play (poorly) as a midfielder in pub leagues.</p>
            <p>If you think I'd be a good fit for your team, please <Link to={'/contact'}>get in touch.</Link></p>
          </div>
          <div className='professional list'>
            <h3>Professional</h3>
            <ul className='work'>
              <li><div className='year'>2016 - Present</div> Freelance Designer / Developer, Buena Suerte Studio</li>
              <li><div className='year'>2013 - 2019</div> Director of Product Support, Brand Networks</li>
              <li><div className='year'>2008 - 2013</div> Mac Genius, Apple</li>
            </ul>
          </div>
          <div className='press list'>
            <h3>Press</h3>
            <ul className='work'>
              <li><a href="https://www.fastcompany.com/90435036/this-site-generates-trump-notes-so-you-can-look-like-a-very-stable-genius-too" target="_blank" rel='noreferrer noopener'>Fast Company</a></li>
              <li><a href='https://www.itsnicethat.com/news/quid-pro-sans-rick-banks-jkr-trump-typeface-graphic-design-261119' target='_blank' rel='noopener noreferrer'>It's Nice That</a></li>
              <li><a href='https://lifehacker.com/write-a-note-in-trumps-handwriting-with-this-font-gener-1840035875' target='_blank' rel='noreferrer noopener'>Lifehacker</a></li>
            </ul>
          </div>
          <div className='education list'>
            <h3>Education</h3>
            <ul className='ed'>
              <li><div className='year'>2019</div> Full-Stack Engineering Immersion, Thinkful</li>
            </ul>
          </div>
          <div className='technology'>
            <h3>Tech Stack</h3>
            <ul className='tech-stack'>
              <li>React</li>
              <li>React Native</li>
              <li>Node</li>
              <li>Express</li>
              <li>Javascript</li>
              <li>Shopify Liquid</li>
              <li>Sass</li>
              <li>PostgreSQL Database</li>
            </ul>
          </div>
        </section>
      </main>

    )
  }
}
