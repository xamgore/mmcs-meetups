<template>
  <article :class="[e.theme, { compactly, outdated }]">

    <header>
      <e-title :title="e.title" :date="e.date" :time="e.time" :noTime="outdated" :link="e.link"/>
    </header>

    <e-content v-if="hasContent" :text="e.annotation"/>

  </article>
</template>

<script>
  import eTitle from './parts/title'
  import eAuthors from './parts/authors'
  import eContent from './parts/content'

  export default {
    name: 'event',
    props: ['e', 'isOutdated'],
    components: { eTitle, eAuthors, eContent },
    computed: {
      compactly() { return !this.e.authors },
      hasContent() { return this.e.text || this.e.annotation },
      outdated() { return typeof this.isOutdated !== 'undefined' }
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

  a {
    color: #50b5bb;
    color: var(--text, #50b5bb);
  }

  a:hover, a:focus, a:active {
    text-decoration-color: #E91E63;
    text-decoration-color: var(--border, #E91E63);
  }
</style>

<style scoped>
  @import "themes.css";

  article {
    border-left: 5px solid #ade3e6;
    border-left-color: var(--border, #ade3e6);
    padding: 0.5em 1em 0.7em;
    margin-top: 2em;
    margin-bottom: auto;
    word-break: break-word;
  }

  @media screen and (min-width: 450px) {
    article {
      max-width: 440px;
      min-width: 440px;
      font-size: 1.1em;
    }
  }

  @media screen and (min-width: 910px) {
    article {
      max-width: 400px;
      min-width: 400px;
      margin-right: 5%;
    }
  }

  .outdated { background-color: #fafafa }

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
