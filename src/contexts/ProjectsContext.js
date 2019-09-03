import React, { Component } from 'react'

const ProjectsContext = React.createContext({
  projectList: [],
  imagesList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setProjectsList: () => {},
  setImagesList: () => {}
})
export default ProjectsContext

export class ProjectsListProvider extends Component {
  constructor(props){
    super(props)
    const state = {
      projectsList: [],
      imagesList: [],
      error: null,
    };
  }


  setProjectsList = projectsList => {
    this.setState({ projectsList })
  }

  setImagesList = imagesList => {
    this.setState({ imagesList })
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
      projectsList: this.state.projectsList,
      imagesList: this.state.imagesList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProjectsList: this.setProjectsList,
      setImagesList: this.setImagesList
    }
    return (
      <ProjectsListProvider.Provider value={value}>
        {this.props.children}
      </ProjectsListProvider.Provider>
    )
  }
}
