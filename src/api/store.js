import Vue from 'vue'
import api from './index'

let store = window.store = new Vue({
  data: { raw_events: null },
  methods: {
    fetchAll() {
      api.events.index().then(res => { this.raw_events = res.data })
    },

    fetchOnly(link) {
      api.events.show(link).then(res => {
        if (this.raw_events === null) this.raw_events = []
        let idx = this.raw_events.findIndex(e => e.link === link)

        idx === -1
          ? this.raw_events.push(res.data)
          : this.raw_events[idx] = res.data
      })
    }
  },
  computed: {
    events() { return this.raw_events }
  }
})

export default store
