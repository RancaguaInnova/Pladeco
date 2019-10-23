import getEnv from './getEnv'

const urls = {
  local: `http://25.45.109.225:3200/api`,
  //local: `http://25.46.100.64:3500/api`, joaco
  dev: `https://services.smartrancagua.com`,
  prod: 'https://services.smartrancagua.com'
}

const env = getEnv()

if (env !== 'local' && window.location.protocol !== 'https:') {
  window.location.protocol = 'https:'
}

export default urls[env]
