import axios from 'axios'
import data from './data'

let axio = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}/api/v17`
})

let dev = {}

if (process.env.NODE_ENV === 'development') {
  axio = axios.create({
    baseURL: `${window.location.protocol}//${window.location.hostname}:3001/api/v17`
  })

  dev = {
    events: {
      index: () => new Promise((res, rej) => res({
        data: [...data, ...data.reverse(), ...data.reverse()]
      })),

      show: (link) => new Promise((res, rej) =>
        res({ data: data.find(e => e.link === link) || {} })),

      create: (event, pass) => new Promise((res, rej) =>
        res(data.push(event)))
    },

    admin: {
      auth: pass => new Promise((res, rej) =>
        pass === 'mmcs' ? res() : rej())
    }
  }
}

let prod = {
  events: {
    index: () => axio.get('/events'),
    show: link => axio.get(`/events/${link}`),
    create: (event, pass) => axio.post(`/events`, { event, pass })
  },

  admin: {
    auth: pass => axio.get(`/auth`, { pass })
  }
}

let api = window.api = {}

if (process.env.NODE_ENV !== 'development') {
  api = prod
}

if (process.env.NODE_ENV === 'development') {
  axio.defaults.timeout = 400

  const switchTo = type => {
    for (let resource in api) {
      for (let method in api[resource]) {
        api[resource][method] = type[resource][method]
      }
    }
  }

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
            return dev[res][method](...args)
          })
    }

    api[res] = proxy
  }
}

window.api = api

export default api
