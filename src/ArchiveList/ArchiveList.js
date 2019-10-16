import React from 'react'
import ProjectsContext from '../contexts/ProjectsContext'
import { Player } from 'video-react';
import './ArchiveList.scss'


export default class ArchiveList extends React.Component {
  static contextType = ProjectsContext
  state = {
    previewAsset: null
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  updatePreview = (e) => {
    e.preventDefault()
    let previewAsset = this.context.archiveProjects.filter(proj => proj.title === e.currentTarget.dataset.id)
    previewAsset = previewAsset[0]
    this.setState({
      previewAsset
    },
    () => {
      console.log(this.state.previewAsset.cover.fields.file.url);
    })

  }
  clearPreview = (e) => {
    this.setState({
      previewAsset: null
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
          <tr className='archive-table-project' key={proj.title} onMouseEnter={this.updatePreview} onMouseLeave={this.clearPreview} data-id={proj.title}>

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
    let previewAsset
    if (this.state.previewAsset) {
      if (this.state.previewAsset.cover.fields.file.contentType === 'image/jpeg' || this.state.previewAsset.cover.fields.file.contentType === 'image/png' || this.state.previewAsset.cover.fields.file.contentType === 'image/gif') {
        previewAsset = (<img src={`https:${this.state.previewAsset.cover.fields.file.url}`} className={'preview-img'} alt={'Project Preview'}/>)
      } else {
        previewAsset = (
          <Player
            playsInline
            muted={true}
            loop={true}
            autoPlay={true}
            className={'preview-video'}
            src={this.state.previewAsset.cover.fields.file.url}
            />
        )
      }
    }
  return  (
      <main className='archive-list'>
        <h2>Archive</h2>
        <div id={'preview'}>
          {this.state.previewAsset
          ? (
            <>
            {previewAsset}
            </>
          )
          : ''}
        </div>
        <table className='archive-table'>
          <thead>
            <tr className='archive-table-title'>
              <th className='tech-header'>Technology</th>
              <th className='client-header'>Client</th>
              <th className='year-header'>Year</th>
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
