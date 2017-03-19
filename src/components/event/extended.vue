<template>
  <article :class="[e.theme]">

    <header style="margin-bottom: 1.5rem">
      <e-title :title="e.title" :date="e.date"/>
    </header>

    <e-content :text="text"/>


    <footer v-if="e.authors">
      <template v-if="e.authors">
        <h5 style="margin-bottom:0.5em;font-size:1em">
          {{ e.authors.length == 0 ? 'Докладчик:' : 'Докладчики:' }}
        </h5>

        <e-authors :authors="e.authors"/>
      </template>

      <h5 style="margin: 1em 0 0.5em; font-size:1em">
        Придут:
      </h5>
        <e-attendees v-if="e.attendees" :attendees="e.attendees"/>
    </footer>

  </article>
</template>

<script>
  import api from '../../api'
  import eTitle from './parts/title'
  import eContent from './parts/content'
  import eAuthors from './parts/authors'
  import eAttendees from './parts/attendees'

  export default {
    name: 'extended-event',
    components: { eTitle, eContent, eAuthors, eAttendees },
    data: () => ({ e: null }),
    computed: {
      text() { return this.e.text.trim().replace(/\s*\n\s*\n\s*/g, '<br><br>') }
    },
    created() {
      this.e = api.getData().events[0]
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
    /*border-left: 5px solid #c8e6ad;*/
    /*padding-left: 1em;*/
    margin-top: 2em;
    margin-bottom: auto;
    max-width: 550px !important;
  }

  @media screen and (min-width: 450px) {
    article { font-size: 1.1em }
  }

  header {
    margin-bottom: 1rem;
  }

  footer {
    margin-top: 0.5rem;
  }
</style>
