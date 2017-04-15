<template>
  <div class="author">

    <div v-for="a in shuffled" :title="a.name" class="ava"
         :style="{ 'background-image': url(a.ava) }"/>

    <span style="margin-left:0.7em">и ещё {{ left }} человек</span>

  </div>
</template>

<script>
  export default {
    name: 'e-attendees',
    props: ['attendees'],
    methods: {
      url: src => `url(${src})`
    },
    computed: {
      shuffled() {
        let a = this.attendees.slice(0, this.attendees.length)

        for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i)
          let x = a[i - 1]
          a[i - 1] = a[j]
          a[j] = x
        }

        return a.slice(0, 7)
      },

      left() { return Math.max(0, this.attendees.length - 7) }
    }
  }
</script>

<style scoped>
  .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 4px;
    font-size: 0.9em;
  }

  .ava {
    width: 2em;
    height: 2em;
    display: inline-block;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 50%;
    margin-right: -0.2em;
  }

  @media screen and (max-width: 320px) {
    .ava { margin-right: -0.25em }
  }
</style>
