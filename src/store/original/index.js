import axio from './axio'

export default {
  events: {
    index: () => axio.get('/events'),
    show: link => axio.get(`/events/${link}`),
    create: (event, pass) => axio.post(`/events`, { event, pass })
  },

  admin: {
    auth: pass => axio.get(`/auth`, { pass })
  }
}
