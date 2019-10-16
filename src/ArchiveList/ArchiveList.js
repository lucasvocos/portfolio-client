import React from 'react'
import ProjectsContext from '../contexts/ProjectsContext'
import './ArchiveList.scss'


export default class ArchiveList extends React.Component {
  static contextType = ProjectsContext
  state = {
    previewImage: null
  }

  updateImage = (e) => {
    e.preventDefault()

    let previewImage = this.context.archiveProjects.filter(proj => proj.title === e.currentTarget.dataset.id)

    this.setState({
      previewImage: `https:${previewImage[0].cover.fields.file.url}`
    })
  }
  clearImage = (e) => {
    this.setState({
      previewImage: null
    })
  }
  render() {
    let archiveList = []
    if (this.context.archiveProjects) {
      archiveList = this.context.archiveProjects.map(proj => {
        let technologyList = proj.technology.map(tech => {
          return (
            <li className='stack' key={tech}>{tech}</li>
          )
        })
        return (
          <tr className='archive-table-project' key={proj.title} onMouseEnter={this.updateImage} onMouseLeave={this.clearImage} data-id={proj.title}>

              <td>
                <a href={proj.url} target={'_blank'} rel={'noreferrer noopener'}>
                  <ul className='tech-stack'>
                    {technologyList}
                  </ul>

                </a>
              </td>
              <td>
                <a href={proj.url} target={'_blank'} rel={'noreferrer noopener'}>
                  {proj.title}
                </a>
              </td>
              <td>
                <a href={proj.url} target={'_blank'} rel={'noreferrer noopener'}>
                  {proj.year}
                </a>
              </td>

          </tr>
        )
      })
      
    }
  return  (
      <main className='archive-list'>
        <h2>Archive</h2>
        <div id={'preview'}>
          {this.state.previewImage
          ? (<img src={this.state.previewImage} className={'preview-img'} alt={'Project Preview'}/>)
          : ""}
        </div>
        <table className='archive-table'>
          <thead>
            <tr className='archive-table-title'>
              <th>Technology</th>
              <th>Client</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {archiveList}
          </tbody>
        </table>
      </main>
    )
  }
}
