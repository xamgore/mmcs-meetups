<template>
  <div class="page">

    <section v-if="upcoming" class="news">
      <event v-for="event in upcoming" :e="event"/>
    </section>

    <section v-if="outdated" class="outdated">
      <event v-for="event in outdated" :e="event" isOutdated/>
    </section>
  </div>
</template>

<script>
  import Event from '../event/index'
  import api from '../../api'

  export default {
    name: 'main-page',
    components: { Event },
    data: () => ({ events: [], now: new Date(2017, 2, 30) }),
    computed: {
      upcoming() { return this.events.filter(e => !this.isOutdated(e.date)) },
      outdated() { return this.events.filter(e => this.isOutdated(e.date)) }
    },
    methods: {
      isOutdated(date) {
        let matched = /^(\d\d\d?\d?)[.|-](\d\d?)[.|-](\d\d?)$/.exec(date)
        if (!matched) return ''
        let [_, y, m, d] = matched
        y = +y; m = +m; d = +d

        let ny = this.now.getFullYear(),
            nm = this.now.getMonth() + 1,
            nd = this.now.getDate()

        return (y < ny) || (y === ny && m < nm) || (y === ny && m === nm && d < nd)
      }
    },
    created() {
      api.events.index().then(res => {
        let es = res.data
        this.events = [...es, ...es.reverse(), ...es.reverse()]
      })
    }
  }
</script>

<style scoped>
  .page { margin-left: -5.24% }

  section {
    display: flex;
    flex-wrap: wrap;
    padding-left: 5%;
  }

  section.outdated {
    margin-top: 3em;
    padding-bottom: 2em;
    background-color: #f8f8f8;
  }
</style>
