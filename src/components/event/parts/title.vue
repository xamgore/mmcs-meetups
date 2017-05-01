<template>

  <div>
    <router-link v-if="link" :to="e.link" v-text="e.title"/>
    <span v-else v-text="e.title"/>

    <span v-text="fullDate" class="date"/>
  </div>

</template>

<script>
  export default {
    name: 'e-title',
    props: ['e', 'link', 'no-time'],
    computed: {
      fullDate() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

        let t = new Date()
        let isToday = (this.e.year === t.getFullYear()) &&
                      (this.e.month === t.getMonth() + 1) &&
                      (this.e.day === t.getDate())

        let date = isToday ? 'сегодня в' : `${this.e.day} ${months[this.e.month - 1]}`
        let time = `${this.noTime ? '' : this.e.time || ''}`
        return `${date} ${time}`
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

  a { color: #393939 }

  .date {
    font: 0.65em 'PT Sans';
    padding-left: 0.3em;
    color: #777;
    white-space: nowrap;
  }
</style>
