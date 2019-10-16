import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectsContext from './contexts/ProjectsContext'
import config from './config'
import Header from './Header/Header'
import Contact from './Contact/Contact'
import ProjectList from './ProjectList/ProjectList'
import ArchiveList from './ArchiveList/ArchiveList'
import LoginPage from './routes/LoginPage/LoginPage'
import ProjectPage from './routes/ProjectPage/ProjectPage'
import NotFound from './routes/NotFound/NotFound'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import AddProject from './AddProject/AddProject'
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import AuthApiService from './services/auth-api-service'
import IdleService from './services/idle-service'
import TokenService from './services/token-service'


export default class App extends React.Component{
  static contextType = ProjectsContext

  componentDidMount() {


    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    IdleService.setIdleCallback(this.logoutFromIdle)

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /*
        tell the idle service to register event listeners
        the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners,
          the idleCallback (logout) will be invoked
      */
      IdleService.registerIdleTimerResets()

      /*
        Tell the token service to read the JWT, looking at the exp value
        and queue a timeout just before the token expires
      */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
        AuthApiService.postRefreshToken()
      })
    }

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


  login = () => {
    if (TokenService.hasAuthToken) {
      this.setState({
        authenticated: true
      })
    } else {
      this.setState({
        authenticated: false
      })
    }
  }

  componentWillUnmount() {
    /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
    IdleService.unRegisterIdleResets()
    /*
      and remove the refresh endpoint request
    */
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken()
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry()
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets()
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.forceUpdate()
  }
  render() {

    return (
    <>
      <Router>
        <Header/>
          <Switch>
            <PublicOnlyRoute
              exact
              path={'/login'}
              component={LoginPage}
              onLogin={this.login}
            />
            <PublicOnlyRoute
              exact
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              exact
              path={'/new-project'}
              component={AddProject}
            />

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
    </Router>

    </>
  );}
}
