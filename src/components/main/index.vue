<template>
  <div>

    <section class="news">
      <event v-for="event in events" :e="event"/>
    </section>

    <section class="outdated">
      <event v-for="event in outdated" :e="event" style="background-color:#fafafa"/>
    </section>

  </div>
</template>

<script>
  import Event from './event'
  import Api from '@/api'

  export default {
    name: 'main-page',
    components: { Event },
    created() {
      Object.assign(this, Api.getData())
    }
  }
</script>

<style scoped>
  .outdated {
    margin-top: 5em
  }

  section {
    display: flex;
    flex-wrap: wrap;
  }
</style>
