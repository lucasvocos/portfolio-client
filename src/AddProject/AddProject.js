import React from 'react'
import PostApiService from '../services/post-api-services'
import FileBase64 from 'react-file-base64';
import { Editor, EditorState} from 'draft-js';
import './AddProject.scss'


export default class AddPost extends React.Component {
  state = {
    uploadedFile: null,
    error: null,
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  successfulSubmission = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }
  generateMessage(string) {
    if (this.state.error) {
      return (
        <p className="errorMessage red" aria-label="Error Message" role='alertdialog'>{this.state.error}</p>
      )
    }
    return null

  }
  handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()
    const { title, date, project_name, description, url, github, tech_stack } = ev.target
    let newProject = {
      title: title.value,
      description: description.value,
      project_name: project_name.value,
      url: url.value,
      github: github.value,
      tech_stack: tech_stack.value,
      date: date.value
    }


    PostApiService.addPost(newProject)
      .then(res => {
        if (!res.ok || res.status(400)) {
          this.setState({
            error: res.error
          })
        }
        PostApiService.postImage({
          project_id: res.id,
          images: this.state.uploadedFile
        })


        title.value = ''
        project_name.value = ''
        description.value = ''
        tech_stack.value = ''
        url.value = ''
        date.value =
        github.value = ''

        setTimeout(() => {
          this.successfulSubmission()
        }, 1500)

      })
      .catch(res => {
        this.setState({
          error: res.error.message
        })
      })
  }


  getFile(file){
    this.setState({ uploadedFile: file })
  }


  render() {
    return (
      <form
        className='AddProjectForm'
        onSubmit={this.handleSubmit}
        aria-label="Create new Project"
      >
      <div className='form-title'>
        <h2 className='form-title-header'>Create New Post</h2>
      </div>
      <div className='message'>
        {this.generateMessage()}
      </div>
      <div className='form-fields' aria-label='Post Fields'>
        <label htmlFor='title'>Project Title</label>
        <input type='text' name='title' id='title' placeholder='Enter post title...'></input>
        <label htmlFor='date'>Project Date</label>
        <input type='text' name='date' id='date' placeholder='Year...'></input>
        <label htmlFor='project_name'>Project shortname</label>
        <input type='text' name='project_name' id='project_name' placeholder='shortname...'></input>
        <label htmlFor='url'>Live URL</label>
        <input type='url' name='url' id='url' placeholder='Live URL...'></input>
        <label htmlFor='github'>Github</label>
        <input type='url' name='github' id='github' placeholder='GitHub Link...'></input>
        <label htmlFor='tech_stack'>Tech Stack</label>
        <input type='text' name='tech_stack' id='tech_stack' placeholder='Tech Stack...'></input>

        <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            id='description'
            name='description'
            placeholder="Enter project description"
            aria-label="Project Description"
            ></textarea>



        <label htmlFor='image'>Project Images</label>
        <FileBase64
          id='image'
          name='image'
          accept='image/png, image/jpeg'
          multiple={ true }
          aria-label='Select an image to upload'
          onDone={ this.getFile.bind(this) }
        />


      </div>
      <button
        type='submit'
        className='form-submit'
        >Submit</button>
      </form>
    )
  }
}
