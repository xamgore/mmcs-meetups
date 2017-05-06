import Vue from 'vue'
import api from './api'
import extractAll from '@/utils/date'

let store = window.store = new Vue({
  data: { now: new Date(2017, 2, 30), raw_events: null },
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
          : this.$set(this.raw_events, idx, res.data)
      })
    }
  },
  computed: {
    events() {
      if (this.raw_events === null) return null

      return this.raw_events.map(e =>
        ({ ...e, ...extractAll(e.date, this.now) }))
    }
  }
})

export default store
