import axios from 'axios'
import data from './data'

let axio = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:3001/api/v17`
})

let dev = {
  events: {
    index: () => new Promise((res, rej) => res({ data })),

    show: (link) => new Promise((res, rej) =>
      res({ data: data.filter(e => e.link === link)[0] || {} }))
  }
}

let prod = window.prod = {
  events: {
    index: () => axio.get('/events'),
    show: link => axio.get(`/events/${link}`)
  }
}

let api = {}

function switchTo(type) {
  for (let resource in api) {
    for (let method in api[resource]) {
      api[resource][method] = type[resource][method]
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  api = prod
} else {
  axio.defaults.timeout = 400

  for (let res in prod) {
    let proxy = {}

    for (let method in prod[res]) {
      proxy[method] = (...args) =>
        // make request to backend server
        prod[res][method](...args)
          .then(res => {
            switchTo(prod)
            console.warn('Backend API server responds, fallback is removed.')
            return res
          })
          .catch(_ => {
            switchTo(dev)
            console.warn('Backend API server doesn\'t respond. ' +
                          'Fallback with data.js content is used.')
            return dev[res][method]()
          })
    }

    api[res] = proxy
  }
}

window.api = api

export default api
