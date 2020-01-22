import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectsContext from './contexts/ProjectsContext'
import config from './config'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
import ProjectList from './ProjectList/ProjectList'
import ArchiveList from './ArchiveList/ArchiveList'
import ProjectPage from './routes/ProjectPage/ProjectPage'
import NotFound from './routes/NotFound/NotFound'



export default class App extends React.Component{
  static contextType = ProjectsContext

  componentDidMount() {




    return fetch(`${config.API_ENDPOINT}`)
      .then(res => {
        return res.json()
      })
      .then(response => {

        let projects = response.filter(project => project.fields.archive === false)
        let archive = response.map(project => project.fields)
        archive.sort((a, b) => {
          if (a.year > b.year) {
            return -1
          }
          if (a.year < b.year) {
            return 1
          }
          if (a.title[0] > b.title[0]) {
            return 1
          }
          if (a.title[0] < b.title[0]) {
            return -1
          }
          return 0
        })
        this.context.setArchiveProjects(archive)
        this.context.setProjects(projects)
      })

  }




  componentWillUnmount() {

  }


  render() {

    return (
    <>
      <Router>
        <Header/>
          <Switch>

            <Route
              exact
              path={'/'}
              component={ProjectList}
            />
            <Route
              exact
              path={'/work'}
              component={ProjectList}
            />
            <Route
              exact
              path={'/archive'}
              component={ArchiveList}
            />
            <Route
              exact
              path={'/work/:project_name'}
              component={ProjectPage}
            />
            <Route
              exact
              path={'/contact'}
              component={Contact}
            />
            <Route
              component={NotFound} />
          </Switch>
        <Footer/>
    </Router>

    </>
  );}
}
