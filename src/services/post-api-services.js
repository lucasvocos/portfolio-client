import config from '../config'
import TokenService from './token-service'

const PostApiService = {
  getPosts() {
    return fetch(config.API_ENDPOINT, {
      headers: {
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getByName(project_name) {
    return fetch(`${config.API_ENDPOINT}/projects/${project_name}`)
      .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },
  addPost(post){
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(post)
    })
    .then(res => {
     if (!res.ok) {
       return res.json().then(e => Promise.reject(e)) //Notice the return
     }
     return res.json()
   })
  },
  updatePost(post) {
    const { id } = post
    return fetch(`${config.API_ENDPOINT}/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(post)
    })
  },
  deletePost(id) {
    return fetch(`${config.API_ENDPOINT}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
  },
  postImage(post) {
    return fetch(`${config.API_ENDPOINT}/images`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(post)
    })
    .then(res => {
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()

    })
  },
  saveImage(images) {
    const { post } = images
    return fetch(`${config.API_ENDPOINT}/images/${post}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(images)
    })
  },
  deleteImage(id) {
    return fetch(`${config.API_ENDPOINT}/images/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
  },
}

export default PostApiService
