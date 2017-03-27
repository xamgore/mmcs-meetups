<template>
  <div id="app" :class="[!atMain && $root.theme]">
    <h1>
      <router-link to="/" :tag="atMain ? 'span' : 'a'" v-text="'mmcs meetups'"/>
    </h1>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      atMain() { return this.$route.name === 'main' }
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

  #app {
    color: #444;
    font-family: 'PT Sans', sans-serif;
    border-top: 6px solid #ade3e6;
    border-top-color: var(--border, #ade3e6);
  }

  @media screen and (min-width: 500px) {
    #app { padding-left: 5% }
  }

  a {
    color: #679e37;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover,a:focus,a:active {
    text-decoration: underline;
  }

  h1 a {
    color: inherit;
  }
</style>
