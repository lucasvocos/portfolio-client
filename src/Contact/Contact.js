import React, { useEffect } from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import './Contact.scss'
import Image from './lucas.JPG'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className='contact-page' aria-label="Contact Page">
      <section className='contact-details'>
        <MediaQuery maxWidth={1023}>
          <aside className='bio'>
            <h2 className='title'>About</h2>
            <p>I'm a design-oriented full-stack web developer currently based in Detroit, MI. I specialize in developing elegant front-end experiences using React & Gatsby.</p>
            <p>Please get in touch to collaborate on a project together</p>
          </aside>
        </MediaQuery>
        
        <aside className='contact-links'>
          <h2 className='title'>Contact</h2>
          <ul className='links'>
            <li><a href={`tel:12134228271`}>+1 (213) 422 8271</a></li>
            <li><a href={`mailto:hello@lucasvocos.com`}>hello@lucasvocos.com</a> </li>
            <li><a href="https://github.com/lucasvocos" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/lucasvocos/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/lucasvocos/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </aside>
        <aside className='tech-stack'>
          <h2 className='title'>Technology</h2>
          <ul>
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
        </aside>
      </section>
      <section className='contact-bio'>
        <MediaQuery minWidth={1024}>
          <aside className='bio'>
            <p>I'm a design-oriented full-stack web developer currently based in Detroit, MI. I specialize in developing elegant front-end experiences using React & Gatsby.</p>
            <p>Please get in touch to collaborate on a project together</p>
          </aside>
        </MediaQuery>
        
        <aside className='experience'>
          <h2 className='title'>Experience</h2>
          <ul className='work'>
            <li>Currently — Freelance Designer / Developer, Buena Suerte Studio</li>
            <li><div className='year'>2020</div> Design/development for Detroit-based photographer & artist  <Link to="work/james-adams"> James Adams.</Link></li>
            <li><div className='year'>2019</div> Freelance design/development for <Link to="work/evelyn-crowley-portfolio"> Evelyn Crowley's Portfolio.</Link></li>
            <li><div className='year'>2019</div> Development in collaboration with JKR on viral anti-Trump app <a href='https://www.finalwordfromthepres.com'>Final Word From the Pres</a> </li>
            <li><div className='year'>2019</div> Design/development for Oakland-based DIY Punk label <a href='https://www.uncoolrecords.com'>Uncool Records</a> </li>
            <li><div className='year'>2019</div> Freelance development for NY-based agency <a href='https://www.generalidea.agency'>General Idea</a> </li>
            <li><div className='year'>2019</div> Design/development for Detroit-based boutique magazine shop <a href='https://www.bkst.co'>B_KS@</a> </li>
            <li><div className='year'>2019</div> Development in collaboration with Hobbes on an interactive web app <a href='https://www.opal.work'>OP/AL</a> </li>
            <li><div className='year'>2019</div> Design/development for <a href='https://www.articleoneeyewear.com'>Article One Eyewear</a> </li>
            <li><div className='year'>2013 - 2019</div> Director of Product Support, Brand Networks</li>
            <li><div className='year'>2008 - 2013</div> Mac Genius, Apple</li>
          </ul>
        </aside>
        <aside className='clients'>
          <h2 className='title'>Clients, Collaborators, & Friends</h2>
          <ul className='clients-collabs'>
            <li><a href="https://www.articleoneeyewear.com">Article One Eyewear</a></li>
            <li><a href="https://www.hobbes.work">Hobbes</a></li>
            <li><a href="https://www.instagram.com/washandfoldnyc">Wash & Fold NYC</a></li>
            <li><a href="https://www.human.nyc">Human NYC</a></li>
            <li><a href="https://www.jkrglobal.com/">Jones Knowles Ritchie</a></li>
            <li><a href="https://www.uncoolrecords.com">Uncool Records</a></li>
            <li><a href="https://www.monochrome.red">Monochrome.Red</a></li>
          </ul>
        </aside>
      </section>
      <section className='contact-press-ed'>
        <aside className='press list'>
          <h2 className='title'>Press</h2>
          <ul className='work'>
            <li><a href="https://www.fastcompany.com/90435036/this-site-generates-trump-notes-so-you-can-look-like-a-very-stable-genius-too" target="_blank" rel='noreferrer noopener'>Fast Company</a></li>
            <li><a href='https://www.itsnicethat.com/news/quid-pro-sans-rick-banks-jkr-trump-typeface-graphic-design-261119' target='_blank' rel='noopener noreferrer'>It's Nice That</a></li>
            <li><a href='https://lifehacker.com/write-a-note-in-trumps-handwriting-with-this-font-gener-1840035875' target='_blank' rel='noreferrer noopener'>Lifehacker</a></li>
          </ul>
        </aside>
        <aside className='education list'>
          <h2 className='title'>Education</h2>
          <ul className='ed'>
            <li><div className='year'>2019</div> Full-Stack Engineering Immersion, Thinkful</li>
          </ul>
        </aside>
      </section>
    </main>
    
  )
}

export default Contact