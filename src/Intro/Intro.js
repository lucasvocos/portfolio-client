import React from 'react'
import ProjectList from '../ProjectList/ProjectList'
import './Intro.scss'

export default class Intro extends React.Component {
  render() {
    return (
      <>
      <div className='intro'>
        <p className='intro-text'>Lucas Vocos is a design-oriented full-stack Web Developer based in <span className='serif'>Detroit, Michigan.</span> His work includes designing and delivering elegent, well designed user-friendly solutions.</p>
        <p className='intro-text'>His tech stack includes: React, Node, Express, Javascript, Shopify Liquid, Sass, and PostgreSQL. His design & development practice is <a href='https://www.buena--suerte.com'>Buena Suerte</a></p>
      </div>
      <ProjectList></ProjectList>
    </>
    )
  }
}
