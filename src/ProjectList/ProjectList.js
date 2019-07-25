import React from 'react'

export default class ProjectList extends React.Component {
  // Provide context

  render() {
    return (

      <ul className='ProjectList' aria-label='Portfolio Projects'>
        {this.state.projects.map(project => {
          const pictures = this.state.pictures.filter(projPicture => projPicture.project_id === project.id)

        })}
      </ul>

    )
  }
}
