<template>
  <div id="app">
    <h1>mmcs meetups</h1>

    <section class="news">
      <event v-for="event in events" :e="event"/>
    </section>

    <section class="outdated">
      <event v-for="event in outdated" :e="event" style="background-color:#fafafa"/>
    </section>
  </div>
</template>

<script>
  import Event from '@/components/event/.Event'
  import Api from './api'

  export default {
    name: 'app',
    components: { Event },
    created() {
      Object.assign(this, Api.getData())
    }
  }
</script>

<style scoped>
  h1 {
    font-family: Lora, Roboto, serif;
    padding: 0 0.5em;
    font-size: 2em;
  }

  h1:after {
    content: ' ♥';
    color: #E91E63;
  }

  .outdated {
    margin-top: 5em
  }
</style>

<style>
  * {
    box-sizing: inherit;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    border-top: 6px solid #ade3e6; /*#c8e6ad;*/
  }

  #app {
    color: #444;
    font-family: 'PT Sans', sans-serif;
    margin-bottom: 0;
  }

  @media screen and (min-width: 500px) {
    #app {
      margin-left: 5%;
      margin-bottom: 3em;
    }

    article {
      font-size: 1.1em;
    }
  }

  a {
    color: #679e37;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover,a:focus,a:active {
    text-decoration: underline;
  }
</style>
