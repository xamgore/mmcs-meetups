<template>
  <div class="page">

    <section class="news">
      <event v-for="event in events" :e="event"/>
    </section>

    <section class="outdated">
      <event v-for="event in outdated" :e="event" isOutdated/>
    </section>

  </div>
</template>

<script>
  import Event from '../event/index'
  import Api from '../../api'

  export default {
    name: 'main-page',
    components: { Event },
    created() {
      Object.assign(this, Api.getData())
      this.events = [...this.events, ...this.events.reverse(), ...this.events.reverse()]
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
    background-color: #fafafa;
  }

  /*section.add {
    margin-top: 2em;
    display: flex;
    justify-content: center;
  }

  section.add button {
    all: initial;
    font: inherit;
    background-color: #ade3e6;
    color: #333;
    display: inline-block;
    padding: 0.5em 1em;
  }*/
</style>
