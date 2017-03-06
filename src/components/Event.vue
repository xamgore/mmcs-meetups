<template>
  <article @click="toggleText" class="event" :style="{ 'border-left-color': e.color }" :id="e.link">

    <header class="title" :style="{ 'margin-bottom': shortStyle && '0.5rem' }">
      {{ e.title }}
      <small class="date">{{ e.date | toDate }}</small>
    </header>

    <p v-html="e.prelude" class="prelude" :class="{ offerMoreText }"/>

    <p v-if="expanded && e.text" v-html="e.text" class="text"/>

    <footer v-if="!shortStyle" class="info">
      <div v-for="a in e.authors" class="author">
        <div class="ava" :style="{ 'background-image': url(a.ava) }"></div>
        <span>{{ a.name }}</span>
      </div>
    </footer>

  </article>
</template>

<script>
export default {
  name: 'event',
  props: [ 'e' ],
  data: () => ({ expanded: false }),
  methods: {
    url(src) { return `url(${src})` },
    toggleText() { this.expanded = !this.expanded }
  },
  computed: {
    shortStyle() { return !this.e.authors },
    offerMoreText() { return this.e.text && !this.expanded }
  },
  filters: {
    toDate(str) {
      const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

      let matched = /^(\d\d?)\.(\d\d?)\.(\d\d\d?\d?)(.*)$/.exec(str)
      if (!matched) return ''

      let [_, d, m, y, time] = matched
      return `${d} ${months[m - 1]} ${time}`
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

  .title {
    margin-top: 0;
    margin-bottom: 1rem;
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

  .prelude { margin: 0 }
  .text { margin: 1em 0 0 }

  .offerMoreText::after {
    content: 'ещё';
    padding: 0 0.3em;
    display: inline-block;
    background-color: #eee;
    color: #888;
    font-size: 0.8em;
  }

  .info {
    font-size: 0.9em;
    margin-top: 1rem;
  }

  .ava {
    width: 1.6em;
    height: 1.6em;
    display: inline-block;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-right: 0.5em;
  }

  .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 4px;
  }
</style>
