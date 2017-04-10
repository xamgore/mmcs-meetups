import data from './data'

let api = {
  events: {
    index: () => new Promise((res, rej) => res(data)),

    show: (link) => new Promise((res, rej) =>
      res(data.filter(e => e.link === link)[0] || {}))
  }
}

export default api
