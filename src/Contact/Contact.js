import React from 'react'
import './Contact.scss'
import Image from './lucas.JPG'

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
            <p>Lucas Vocos is a design-oriented full-stack Web Developer based in Detroit, Michigan. His work includes designing and delivering elegent, well designed user-friendly solutions.</p>
            <p>When not programming, Lucas likes to listen to music and play soccer</p>
          </div>
          <div className='professional list'>
            <h3>Professional</h3>
            <ul className='work'>
              <li><div className='year'>2016 - Present</div> Freelance Designer / Developer, Buena Suerte Studio</li>
              <li><div className='year'>2013 - 2019</div> Director of Product Support, Brand Networks</li>
              <li><div className='year'>2008 - 2013</div> Mac Genius, Apple</li>
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
