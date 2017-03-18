<template>

  <div>
    <router-link v-if="link" :to="link" v-text="title"/>
    <span v-else v-text="title"/>

    <span v-text="fullDate" class="date"/>
  </div>

</template>

<script>
  import { transliterate } from '../translit'

  export default {
    name: 'e-title',
    props: ['title', 'date', 'link'],
    computed: {
//      url() {
//        let phrase = this.link || this.title || 'meetup'
//        let string = phrase.split(' ').slice(0, 2).join('-').toLowerCase()
//        let hash = this.date.replace(/(\.|\s.*)/g, '')
//
//        return `${transliterate(string)}-${hash}`
//      },

      fullDate() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

        let matched = /^(\d\d?)\.(\d\d?)\.(\d\d\d?\d?)(.*)$/.exec(this.date)
        if (!matched) return ''

        let [_, d, m, y, time] = matched
        return `${d} ${months[m - 1]} ${time}`
      }
    }
  }
</script>

<style scoped>
  div {
    font-size: 1.25em;
    font-weight: normal;
    font-family: 'Roboto Slab', serif;
  }

  .date {
    font: 0.65em 'PT Sans';
    padding-left: 0.3em;
    color: #777;
    white-space: nowrap;
  }
</style>
