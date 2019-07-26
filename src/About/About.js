import React from 'react'
import './About.scss'

export default class About extends React.Component {
  render() {
    return (
      <aside className='about'>
        <section className='about-lucas'>
          <h2>About Me</h2>
        </section>
        <section className='tech'>
          <h2>Tech Stack</h2>
        </section>
        <section className='contact'>
          <h2>Contact</h2>
        </section>
      </aside>
    )
  }
}
