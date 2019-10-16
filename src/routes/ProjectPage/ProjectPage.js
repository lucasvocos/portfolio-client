import React, { Component } from 'react'
import ProjectsContext from '../../contexts/ProjectsContext'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Masonry from 'react-masonry-css'
import './ProjectPage.scss'

export default class ProjectPage extends Component {
  static contextType = ProjectsContext
  state = {
    name: '',
    project: {}
  }


  componentDidMount() {
    let name = this.props.match.params.project_name
    let proj = this.context.projects.find(project => project.fields.slug === name)
    if (proj && proj.fields) {
      proj = proj.fields
    }
    if (this.state.project !== proj) {
      this.setState({
        name: name,
        project: proj,
      });
    }
  }

  componentDidUpdate(prevProps) {
    let name = this.props.match.params.project_name
    let proj = this.context.projects.find(project => project.fields.slug === name)
    if (proj && proj.fields) {
      proj = proj.fields
    }
    if (this.state.project !== proj) {
      this.setState({
        name: name,
        project: proj,

      });
    }

  }

  componentWillUnmount() {
    this.setState({
      name: '',
      project: {}
    })
  }



  render = () => {
    let techSection
    let techList
    if (this.state.project && this.state.project.technology) {
      techList = this.state.project.technology.map(stack => {
        return (
          <li className='stack' key={stack}>{stack}</li>
        )
      })
      techSection = (
        <div className='details-section'>
          <h3>Technology:</h3>
          <ul className='links serif'>
            {techList}
          </ul>
        </div>

      )
    }
    let assetsList
    if (this.state.project && this.state.project.assets) {
      assetsList = this.state.project.assets.map(asset => {
        if (asset.fields.file.contentType === 'image/png' || asset.fields.file.contentType === 'image/jpeg') {
          return (
            <li className='project-asset'><img src={`http:${asset.fields.file.url}`} alt={this.state.project.title} className='asset img' key={asset.fields.file.url}/></li>
          )
        } else {
          return
        }
      })
    }
    return (
      <main className='project-page'>

        {this.state.project && this.state.project.hasOwnProperty('cover')
        ? (<img src={`https:${this.state.project.cover.fields.file.url}`} className='project-cover' alt={this.state.project.title}/>)
        : ''
        }

        {this.state.project && this.state.project.hasOwnProperty('description')
        ? (
          <section className='project-info'>
            <header className='project-header'>
              <h2>{this.state.project.title}</h2>
            </header>

              {this.state.project.description
              ? (
                <section className='project-description'>
                  {documentToReactComponents(this.state.project.description)}
                </section>
              )
              : ''}

            <section className='project-details'>
              <div className='details-section'>
                <h3>Links:</h3>
                <ul className='links'>
                {this.state.project.url
                ? (
                  <li className='link serif'>
                    <a href={this.state.project.url} target={'_blank'} rel={'noreferrer noopener'}>{this.state.project.title}</a>
                  </li>
                )
                : ''}
                {this.state.project.githubFrontend
                ? (
                  <li className='link serif'>
                    <a href={this.state.project.githubFrontend} target={'_blank'} rel={'noreferrer noopener'}>Github (Front End)</a>
                  </li>
                )
                : ''}
                {this.state.project.githubBackend
                ? (
                  <li className='link serif'>
                    <a href={this.state.project.githubBackend} target={'_blank'} rel={'noreferrer noopener'}>Github (Back End)</a>
                  </li>
                )
                : ''}
                </ul>
              </div>
              {techSection}

            </section>
          </section>
        )
        : ''
        }
        <ul className='assets'>
          {assetsList}
        </ul>
      </main>
    )
  }
}
