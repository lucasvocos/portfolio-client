import React, { Component } from 'react'

const ProjectsContext = React.createContext({
  projects: [],
  archiveProjects: [],
  error: null,
  darkMode: false,
  setError: () => {},
  clearError: () => {},
  setProjects: () => {},
  setArchiveProjects: () => {}
})
export default ProjectsContext

export class ProjectsProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
        projects: [],
        darkMode: false,
        error: null,
    };
    this.state = state
  }


  setProjects = projects => {
    this.setState({ projects })
  }

  setArchiveProjects = archiveProjects => {
    this.setState({ archiveProjects})
  }

  setDarkMode = boolean => {
    this.setState({ darkMode: boolean })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      // values
      projects: this.state.projects,
      archiveProjects: this.state.archiveProjects,
      darkMode: this.state.darkMode,
      error: this.state.error,
      // methods
      setError: this.setError,
      clearError: this.clearError,
      setProjects: this.setProjects,
      setArchiveProjects: this.setArchiveProjects,
      setDarkMode: this.setDarkMode
    }
    return (
      <ProjectsContext.Provider value={value}>
        {this.props.children}
      </ProjectsContext.Provider>
    )
  }
}
