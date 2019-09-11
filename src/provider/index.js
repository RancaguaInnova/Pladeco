import { fetchUtils } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import url from './url'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }
  const token = localStorage.getItem('token')
  options.headers.set('Authorization', `Bearer ${token}`)
  options.headers.set('X-Origin', 'backoffice')

  // add your own headers here
  return fetchUtils.fetchJson(url, options)
}
const dataProvider = jsonServerProvider(url, httpClient)
export default dataProvider
