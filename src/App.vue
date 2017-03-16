<template>
  <div id="app">
    <h1>mmcs meetups</h1>
    
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
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
