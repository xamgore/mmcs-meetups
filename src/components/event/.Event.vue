<template>
  <article :id="e.link" :class="['event', { compactly }]"
           :style="{ 'border-left-color': e.color }">

    <header>
      <e-title :title="e.title" :date="e.date"/>
    </header>

    <e-content v-if="hasContent" :annotation="e.annotation" :text="e.text"/>

    <footer v-if="e.authors" class="info">
      <e-authors :authors="e.authors"/>
    </footer>

  </article>
</template>

<script>
  import eTitle from './Title'
  import eAuthors from './Authors'
  import eContent from './Content'

  export default {
    name: 'event',
    props: ['e'],
    components: { eTitle, eAuthors, eContent },
    computed: {
      compactly() { return !this.e.authors },
      hasContent() { return this.e.text || this.e.annotation }
    }
  }
</script>

<style>
  .img {
    margin: 0.5em -1em 0.2em;
    height: 200px;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>

<style scoped>
  .event {
    border-left: 5px solid #dedede;
    padding: 0.5em 1em 0.7em;
    margin-top: 2em;
    /*max-width: 400px;*/
  }

  @media screen and (min-width: 500px) {
    .event {
      max-width: 500px;
    }
  }

  /*.event:hover {
    background-color: #f9f9f9
  }*/

  header {
    margin-bottom: 1rem;
  }

  .compactly header {
    margin-bottom: 0.5rem;
  }

  header:last-child {
    margin-bottom: 0;
  }

  footer {
    margin-top: 1rem;
  }

  footer:first-child {
    margin-top: 0;
  }
</style>
