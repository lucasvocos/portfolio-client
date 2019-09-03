import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectList.scss'
import ProjectsContext from '../contexts/ProjectsContext'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class ProjectList extends React.Component {
  static contextType = ProjectsContext
  state = {
    projects: [],
    images: []
  }

  componentDidMount() {

  }

  render() {
    let techList
    let imageList
    let sliderSettings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };
    return (

      <main className='ProjectList' aria-label='Portfolio Projects'>

        {this.context.projects.map(project => {
          const images = this.context.images.filter(projPicture => projPicture.project_id === project.id)
          console.log(images);
          return (
            <div
              className='project'
              key={project.id}
            >

            <Slider {...sliderSettings}>
              {imageList = images.map(img => {
                return (
                  <img  className='project-image' src={img.image} key={img} alt={project.title}></img>
                )
              })}
            </Slider>
            <header className='project-title'>
              <span className='project-title-text'>{project.title}</span>
              <span className='project-year serif'>({project.date})</span>
            </header>
            <section className='project-content'>
              <aside className='project-description'>
                <p className='description'>{project.description}</p>

                <p className='detail-url'>Live Site: <span className='serifItalic'><a href={project.url} target="_blank" rel="noopener noreferrer">(Visit)</a></span></p>
                <p className='detail-url'>GitHub: <span className='serifItalic'><a href={project.github} target="_blank" rel="noopener noreferrer">(Visit)</a></span></p>

              </aside>
              <aside className='tech-stack'>
                <p className='tech-stack-heading'>Tech Stack:</p>
                <ul className='tech-stack-list'>
                  {techList = project.tech_stack.split(',').map(item => {
                    return (
                      <li key={item}>
                        {item.trim()}
                      </li>
                    )
                  })}
                </ul>
              </aside>

            </section>

            </div>
          )
        })}

      </main>

    )
  }
}
