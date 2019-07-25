import React from 'react'
import AuthApiService from '../services/auth-api-service'

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error:null })
    const { username, password } = ev.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
    .then(res => {
      username.value = ''
      password.value = ''
      this.props.onLoginSuccess()
    })
    .catch(res => {
      debugger;
      this.setState({ error: res.error })
    })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
        aria-label="Login Form"
      >
        <div role='alert' >
          {error && <p className='red' role='alertdialog' aria-label="Error Message">{error}</p>}
        </div>
        <div className='username'>
          <label htmlFor='LoginForm_username'>
            User name
          </label>
          <input
            required
            name='username'
            aria-label="username field"
            id='LoginForm_username'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm_password'>
            Password
          </label>
          <input
            required
            name='password'
            aria-label="password field"
            type='password'
            id='LoginForm_password'>
          </input>
        </div>
        <button
          type='submit'
          >
          Login
        </button>
      </form>
    )
  }
}
