import React from 'react'
import './ProjectList.scss'
import ProjectsContext from '../contexts/ProjectsContext'
import Slider from "react-slick";
import MediaQuery from 'react-responsive'
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
     easing: 'easeInOutQuint',
     slidesToShow: 1,
     slidesToScroll: 1
   };
   if (!this.state.projects) {
     return (
       <h1>Loading</h1>
     )
   } else {
     return (

       <main className='ProjectList' aria-label='Portfolio Projects'>
         {this.context.projects.map(project => {
           const images = this.context.images.filter(projPicture => projPicture.project_id === project.id)
           images.sort((a, b) => {
             if(a.name < b.name) { return -1; }
             if(a.name > b.name) { return 1; }
             return 0;
           })
           return (
             <div
               className='project'
               key={project.id}
             >

             <MediaQuery minWidth={768}>
               <Slider {...sliderSettings}>
                 {imageList = images.map(img => {
                   return (
                     <img  className='project-image' src={img.image} key={img} alt={project.title}></img>
                   )
                 })}
               </Slider>
             </MediaQuery>
             <MediaQuery maxWidth={768}>
               <Slider {...{dots: true,
               infinite: true,
               speed: 500,
               easing: 'easeInOutQuint',
               slidesToShow: 1,
               slidesToScroll: 1}}>
                 {imageList = images.map(img => {
                   return (
                     <img  className='project-image' src={img.image} key={img} alt={project.title}></img>
                   )
                 })}
               </Slider>
             </MediaQuery>

             <header className='project-title'>
               <span className='project-title-text'>{project.title}</span>
               <span className='project-year serif'>({project.date})</span>
             </header>
             <section className='project-content'>
               <aside className='project-description'>
                 <p className='description'><span className='serifItalic'>(Description)</span>{project.description}</p>
               </aside>
               <aside className='tech-stack-links'>
                 <div className='tech-stack'>
                   <p className='tech-stack-heading serifItalic'>(Technology)</p>
                   <ul className='tech-stack-list'>
                     {techList = project.tech_stack.split(',').map(item => {
                       return (
                         <li key={item}>
                           {item.trim()}
                         </li>
                       )
                     })}
                   </ul>
                 </div>
                 <div className='links'>
                   <p className='serifItalic'>(Links)</p>
                   <ul className='links-list'>
                     <li className='detail-url'>
                       <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Site</a>
                     </li>
                     <li className='detail-url'>
                       <a href={project.github} target="_blank" rel="noopener noreferrer">View Github</a>
                     </li>
                   </ul>

                 </div>


               </aside>

             </section>

             </div>
           )
         })}

       </main>

     )
   }

  }
}
