<template>
  <div class="author">

    <div v-for="a in (expand ? all : left)" :title="a.name" :class="['ava', {squeeze:expand}]"
         :style="{ 'background-image': url(a.ava) }"/>

    <span v-if="!expand" class="more">
      и <a @click="expand = true">ещё {{ rightCount }}</a>
    </span>

  </div>
</template>

<script>
  export default {
    name: 'e-attendees',
    props: ['attendees'],
    data: () => ({
      expand: false
    }),
    methods: {
      url: src => `url(${src})`
    },
    computed: {
      all() {
        let a = this.attendees.slice(0, this.attendees.length)

        for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i)
          let x = a[i - 1]
          a[i - 1] = a[j]
          a[j] = x
        }

        return a
      },

      left() { return this.all.slice(0, 7) },

      rightCount() { return Math.max(0, this.attendees.length - 7) }
    }
  }
</script>

<style scoped>
  .author {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 0 4px;
    font-size: 0.9em;
    cursor: help;
  }

  .ava {
    width: 2em;
    height: 2em;
    display: inline-block;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 5%;
    margin-right: 0.1em;
    margin-bottom: 0.1em;
  }

  .more { margin-left: 0.3em }

  .more a { text-decoration: underline }
</style>
