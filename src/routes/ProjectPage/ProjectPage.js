import React, { Component } from 'react'
import ProjectsContext from '../../contexts/ProjectsContext'
import './ProjectPage.scss'

export default class ProjectPage extends Component {
  static contextType = ProjectsContext
  state = {
    name: '',
    project: {},
    images: []
  }


  componentDidMount() {
    // const name = this.props.match.params.project_name
    // const proj = this.context.projects.find(project => project.project_name === name)
    // const images = this.context.images.filter(image => image.project_id === proj.id)
    // if (this.state.project !== proj) {
    //   this.setState({
    //     name: name,
    //     project: proj,
    //     images: images
    //   });
    // }



  }

  componentDidUpdate(prevProps) {
    const name = this.props.match.params.project_name
    const proj = this.context.projects.find(project => project.project_name === name)
    const images = this.context.images.filter(image => image.project_id === proj.id)
    if (this.state.project !== proj) {
      this.setState({
        name: name,
        project: proj,
        images: images
      });
    }

  }

  componentWillUnmount() {

  }



  render() {
    const project = this.state.project
    const project_images = this.state.images
    return (
      <main>
        <header className='project-header'>
          <h1>{project.title}</h1>
        </header>
        <div className='project-details'>
          <div className='description'>
            <p>{project.description}</p>
          </div>
          <div className='details'>
            <p><span className='detail-title'>Url:</span> <a href={project.url}>{project.url}</a> </p>
            <p><span className='detail-title'>Github:</span> <a href={project.github}>{project.github}</a> </p>
            <p><span className='detail-title'>Tech Stack:</span> <a href={project.tech_stack}>{project.tech_stack}</a> </p>
          </div>
        </div>
        <div className='project-images'>
          {project_images.map(img => {
            return (
              <div
                className='img'
                key={img.id}
                >
                <img src={img.image}/>
              </div>
            )
          })}
        </div>
      </main>
    )
  }
}
