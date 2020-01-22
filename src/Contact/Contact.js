import React, { useEffect } from 'react'
import './Contact.scss'
import Image from './lucas.JPG'
import { Link } from 'react-router-dom'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
<main className='contact' aria-label="Contact Page">
        <section className='contact-details'>
          <aside className='contact-links'>
            <p><a href={`tel:12134228271`}>+1 (213) 422 8271</a></p>
            <p><a href={`mailto:hello@lucasvocos.com`}>hello@lucasvocos.com</a> </p>
            <p><a href="https://github.com/lucasvocos" target="_blank" rel="noopener noreferrer">https://github.com/lucasvocos</a></p>
            <p><a href="https://www.linkedin.com/in/lucasvocos/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/lucasvocos/</a></p>
            <p><a href="https://www.instagram.com/lucasvocos/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/lucasvocos/</a></p>
          </aside>
          <aside className='contact-img'>
            <img src={Image} alt='Lucas Vocos' className='about-image-img'/>
          </aside>
          
        </section>
        <section className='resume'>
          <div className='professional list'>
            <h3>Professional</h3>
            <ul className='work'>
              <li><div className='year'>2018 - Present</div> Freelance Designer / Developer, Buena Suerte Studio</li>
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
              <li>Javascript</li>
              <li>React.js</li>
              <li>Gatsby.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Sanity CMS</li>
              <li>Contentful CMS</li>
              <li>Sass</li>
              <li>PostgreSQL Database</li>
            </ul>
          </div>
        </section>
      </main>
  )
}

export default Contact
