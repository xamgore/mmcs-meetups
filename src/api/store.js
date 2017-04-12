import Vue from 'vue'
import api from './index'

let store = window.store = new Vue({
  data: { events: [] },
  methods: {
    fetchEvents() {
      api.events.index().then(res => {
        this.events = [...res.data.reverse(), ...res.data.reverse(), ...res.data]
      })
    }
  }
})

export default store
