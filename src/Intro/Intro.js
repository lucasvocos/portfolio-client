import React from 'react'
import './Intro.scss'

export default class Intro extends React.Component {
  render() {
    return (
      <div className='intro'>
        <p className='intro-text'>Lucas Vocos is a design-oriented full-stack Web Developer based in <span className='serif'>Detroit, Michigan.</span> His work includes designing and delivering elegent, well designed user-friendly solutions. </p>
        <p className='intro-text'>Track record includes developing and designing numerous e-commerce shops and an interactive, multimedia blog leveraging a headless CMS.</p>
      </div>
    )
  }
}
