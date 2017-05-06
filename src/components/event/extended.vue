<template>
  <article :class="[e.theme]">

    <header v-if="header"><e-title :e="e" :extended="true"/></header>

    <e-content :text="text"/>


    <footer>
      <template v-if="e.authors">
        <h5>{{ e.authors.length == 0 ? 'Докладчик:' : 'Докладчики:' }}</h5>
        <e-authors :authors="e.authors"/>
      </template>

      <template v-if="e.attendees">
        <h5 style="margin-top: 1em">Придут:</h5>
        <e-attendees :attendees="e.attendees"/>
      </template>

      <!--<div style="margin-top: 1.2em">-->
        <!--пойдёшь? <a class="okay">нуок</a>-->
      <!--</div>-->

    </footer>

  </article>
</template>

<script>
  import api from '@/api'
  import eTitle from './parts/title'
  import eContent from './parts/content'
  import eAuthors from './parts/authors'
  import eAttendees from './parts/attendees'

  export default {
    name: 'extended-event',
    components: { eTitle, eContent, eAuthors, eAttendees },
    props: { e: {required: true}, header: {default: true} },
    computed: {
      text() {
        let source = this.e.text || this.e.annotation || ''
        return source.trim().replace(/\s*\n\s*\n\s*/g, '<br><br>')
      }
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
    margin-top: 2em;
    margin-bottom: auto;
    max-width: 550px !important;
  }

  @media screen and (min-width: 450px) {
    article { font-size: 1.1em }
  }

  header { margin-bottom: 0.66rem }

  footer { margin-top: 1.65em }

  h5 {
    margin-bottom: 0.5em;
    font-size: 1em;
  }

  .okay {
    background: #eee;
    padding: 0.1em 0.5em 0.2em;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .okay:hover {
    background: #e0e0e0;
  }
</style>
