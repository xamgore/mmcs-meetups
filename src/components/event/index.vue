<template>
  <article :class="[e.theme, { compactly }]">

    <header>
      <e-title :title="e.title" :date="e.date" :link="e.link"/>
    </header>

    <e-content v-if="hasContent" :text="e.annotation"/>

    <footer v-if="e.authors" class="info">
      <e-authors :authors="e.authors"/>
    </footer>

  </article>
</template>

<script>
  import eTitle from './parts/title'
  import eAuthors from './parts/authors'
  import eContent from './parts/content'

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
  @import "themes.css";

  article {
    border-left: 5px solid #c8e6ad;
    padding: 0.5em 1em 0.7em;
    margin-top: 2em;
    margin-bottom: auto;
  }

  @media screen and (min-width: 450px) {
    article {
      max-width: 440px;
      font-size: 1.1em;
    }
  }

  @media screen and (min-width: 910px) {
    article {
      max-width: 400px;
      margin-right: 5%;
    }
  }

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
