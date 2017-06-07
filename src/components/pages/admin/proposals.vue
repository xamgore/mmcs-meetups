<template>
  <div>

    <section v-if="headers" class="news">
      <event v-for="event in headers" :e="event"/>
    </section>

    <!-- TODO redirect to /admin -->
    <section v-if="loaded && !headers.length" class="more">
      Новых семинаров нет.

      <p>Может, о ресурсе знает мало людей?

      <p>Всегда можно
        <router-link :to="{name:'new'}">запланировать свой</router-link>.

    </section>

  </div>
</template>

<script>
  import Event from '@/components/event/index'
  import store from '@/store'

  export default {
    name: 'proposals-page',
    components: { Event },
    computed: {
      loaded: () => !!store.proposed_events,
      proposed: () => store.proposed_events || [],
      headers() {
        return this.proposed.map(e => ({
          theme: e.theme, link: `/admin/edit/${e.link}`, title: e.title, date: e.date, time: e.time
        }))
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
