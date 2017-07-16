import data from './data'

export default {
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
