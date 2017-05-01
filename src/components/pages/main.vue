<template>
  <div class="page">

    <section v-if="upcoming" class="news">
      <event v-for="event in upcoming" :e="event"/>
    </section>

    <section v-if="loaded" class="more">
      {{ upcoming.length ? 'Ещё' : 'Никаких' }}
      митапов не предвидится, но ты можешь
      <router-link :to="{name:'new'}">организовать свой</router-link>
      или попробовать
      <a href="https://stepik.org" style="color:#5fbc5f">пройти курс на степике</a>.
    </section>

    <section v-if="outdated" class="outdated">
      <event v-for="event in outdated" :e="event" isOutdated/>
    </section>
  </div>
</template>

<script>
  import Event from '../event/index'
  import store from '../../api/store'

  export default {
    name: 'main-page',
    components: { Event },
    data: () => ({ now: new Date(2017, 2, 30) }),
    computed: {
      loaded: () => !!store.events,
      events: () => store.events || [],
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
    created() { store.fetchAll() }
  }
</script>

<style scoped>
  .page {
    margin-left: -5.24%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    padding-left: 5%;
    flex: none;
  }

  section.news {
    margin-bottom: 2em;
  }

  section.outdated {
    margin-top: 3em;
    padding-bottom: 2em;
    background-color: #f8f8f8;
    flex: 1 0 auto;
  }

  section.outdated:empty { display: none }

  section.more {
    display: inline-block;
    margin-top: 3em;
    margin-right: 17%;
  }

  @media screen and (max-width: 500px) {
    section.more {
      margin-left: 5%;
      margin-right: 1em;
    }
  }
</style>
