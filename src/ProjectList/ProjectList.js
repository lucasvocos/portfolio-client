import React from 'react'
import './ProjectList.scss'
import ProjectsContext from '../contexts/ProjectsContext'
import { Link } from 'react-router-dom'
import { Player } from 'video-react';
import Masonry from 'react-masonry-css'


export default class ProjectList extends React.Component {
  static contextType = ProjectsContext


  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    let projectList
    if (this.context.projects.length > 0) {
      projectList = this.context.projects.map(project => {
        if (project.fields.archive === false) {
          if (project.fields.cover.fields.file.contentType === 'image/png' || project.fields.cover.fields.file.contentType === 'image/jpeg' || project.fields.cover.fields.file.contentType === 'image/gif') {
            return (
              <section className='project' key={project.fields.slug}>
                <Link
                  to={`/work/${project.fields.slug}`}>
                  <img src={`https:${project.fields.cover.fields.file.url}`} alt={project.fields.title} className='project-preview'/>
                  <p className='project-title'>{project.fields.title}</p>
                </Link>
              </section>
            )
          } else {
            return (
              <section className='project'>
                <Link
                  to={`/work/${project.fields.slug}`}>
                  <Player
                    playsInline
                    muted={true}
                    loop={true}
                    autoPlay={true}
                    src={project.fields.cover.fields.file.url}
                    />
                  <p className='project-title serif'>{project.fields.title}</p>
                </Link>
              </section>
            )
          }

        } else {
          return
        }

      })
    } else {
      projectList = (
        <h1>Loading</h1>
      )
    }
    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      1024: 2,
      768: 1
    };

    return (

       <main className='ProjectList' aria-label='Portfolio Projects'>
         
              <div className='intro-paragraph'>
                <p>I'm a design-oriented freelance full-stack web developer working with agencies, brands, creatives, and small businesses to produce beautiful, elegant websites and web apps.</p>
                <p><Link to={'/contact'}>Let's work together.</Link></p>
                <br/>
                <p>Featured work:</p>
              </div>

              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="projects"
                columnClassName="projects-column">
                {projectList}
              </Masonry>
       </main>

     )
   }

}
