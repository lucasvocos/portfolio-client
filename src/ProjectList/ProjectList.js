import React from 'react'
import './ProjectList.scss'
import ProjectsContext from '../contexts/ProjectsContext'
import { Link } from 'react-router-dom'
import { Player } from 'video-react';
import Masonry from 'react-masonry-css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
                  <p className='project-title serif'>{project.fields.title}</p>
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
         {this.props.location.pathname !== '/work'
          ? (
            <div className='intro-paragraph serif'>
              <p>Hello, I'm Lucas. I'm a design-oriented full-stack Web Developer based in Detroit, Michigan currently looking for opportunities. My work includes front and back end web development, Shopify-backed eCommerce shops, as well as user interface design.</p>
              <p>Over the last few years, I've freelanced design/development under my personal practice (<a href='https://www.buena--suerte.com' target="_blank" rel='noreferrer noopener'>Buena Suerte</a>). When not programming, I like to make playlists, watch the Argentinean national futbol team and play (poorly) as a midfielder in pub leagues.</p>
              <p>If you think I'd be a good fit for your team, please <Link to={'/contact'}>get in touch</Link> and we can chat.</p>
            </div>
          )
          : ''}

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
