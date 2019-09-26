import url from '../provider/url'

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin'

export default async (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params
    let email = username
    const request = new Request(url + '/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    request.headers.set('X-Origin', 'pladeco')

    const response = await fetch(request)
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
    const { id, identifier, email: email_1, services, role } = await response.json()
    localStorage.setItem('id', id)
    localStorage.setItem('token', services.authToken)
    localStorage.setItem('role', role)
    localStorage.setItem('identifier', identifier)
    localStorage.setItem('email', email_1.address)
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('identifier')
    localStorage.removeItem('email')
    localStorage.removeItem('id')

    return Promise.resolve()
  }
  if (type === AUTH_ERROR) {
    const status = params.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('identifier')
      localStorage.removeItem('email')
      localStorage.removeItem('id')

      return Promise.reject()
    }
    return Promise.resolve()
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem('role')
    const per = await permissions(role)
    return Promise.resolve(per)
  }
  return Promise.resolve()
}
async function permissions(role) {
  const token = localStorage.getItem('token')
  const request = new Request(url + '/auth/permission', {
    method: 'POST',
    body: JSON.stringify({ role }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
  request.headers.set('Authorization', `Bearer ${token}`)
  request.headers.set('X-Origin', 'pladeco')

  const response = await fetch(request)
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }


}
