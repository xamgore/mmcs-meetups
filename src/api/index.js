import axios from 'axios'
import data from './data'

let axio = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:3001/api/v17`
})

let api = {
  events: {
    index: () => new Promise((res, rej) => res({ data })),

    show: (link) => new Promise((res, rej) =>
      res({ data: data.filter(e => e.link === link)[0] || {} }))
  }
}

let api2 = {
  events: {
    index: () => axio.get('/events'),
    show: link => axio.get(`/events/${link}`)
  }
}

export default api2
