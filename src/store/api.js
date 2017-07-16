import original from './original'

let api = {}

if (process.env.NODE_ENV !== 'development') {
  api = original
}

if (process.env.NODE_ENV === 'development') {
  api = require('./original/fallback').default
}

window.api = api

export default api
