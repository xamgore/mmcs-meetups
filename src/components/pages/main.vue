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
      <event v-for="event in outdated" :e="event" :no-time="true"/>
    </section>
  </div>
</template>

<script>
  import Event from '@/components/event/index'
  import store from '@/store'

  export default {
    name: 'main-page',
    components: { Event },
    computed: {
      loaded: () => !!store.events,
      events: () => store.events || [],
      upcoming() { return this.events.filter(e => !e.isOutdated) },
      outdated() { return this.events.filter(e => e.isOutdated) }
    },
    methods: {
    },
    created() { store.fetchAll() }
  }
</script>

<style scoped>
  .page {
    margin-left: -2.4em;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2.4em;
    margin-right: -2.4em;
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
    section { margin-right: 0 }

    section.more {
      margin-left: 1.4em;
      margin-right: 1.4em;
    }
  }
</style>
