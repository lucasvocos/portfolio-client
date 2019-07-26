import React from 'react'
import config from '../config'
import { Link } from 'react-router-dom'
import ProjectsContext from '../contexts/ProjectsContext'


export default class ProjectList extends React.Component {
  static contextType = ProjectsContext
  state = {
    projects: [],
    images: []
  }

  componentDidMount() {

  }

  render() {
    return (

      <main className='ProjectList' aria-label='Portfolio Projects'>

        {this.context.projects.map(project => {
          const images = this.context.images.filter(projPicture => projPicture.project_id === project.id)
          return (
            <div
              className='project'
              key={project.id}
            >
            <p>PROJECT</p>
            <Link
              to={`/projects/${project.project_name}`}
              project={project}
              images={images}
            >
            {project.title}
            </Link>
            </div>
          )
        })}

      </main>

    )
  }
}
