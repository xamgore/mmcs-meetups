import Vue from 'vue'
import api from './index'

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

      return this.raw_events.map(e => {
        let date = { year: 0, month: 0, day: 0, isOutdated: false }

        let matched = /^(\d\d\d?\d?)[.|-](\d\d?)[.|-](\d\d?)$/.exec(e.date)
        if (!matched) return { ...e, ...date }

        let [_, y, m, d] = matched

        date.day = d = +d
        date.year = y = +y
        date.month = m = +m

        let ny = this.now.getFullYear(),
            nm = this.now.getMonth() + 1,
            nd = this.now.getDate()

        date.isOutdated = (y < ny) || (y === ny && m < nm) || (y === ny && m === nm && d < nd)

        return { ...e, ...date }
      })
    }
  }
})

export default store
