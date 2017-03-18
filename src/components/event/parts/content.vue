<template>
  <div @click="toggleText">

    <p v-html="text" :class="['prelude', { offerMoreText }]"/>

    <p v-if="crop && expanded && text" v-html="text" class="text"/>

  </div>
</template>

<script>
  export default {
    name: 'e-content',
    props: ['text', 'crop'],
    data: () => ({ expanded: false }),

    methods: {
      toggleText() { this.expanded = !this.expanded }
    },

    computed: {
      offerMoreText() { return this.crop && this.text && !this.expanded }
    }
  }
</script>

<style scoped>
  .prelude {
    margin: 0
  }

  .text {
    margin: 1em 0 0
  }

  .offerMoreText:after {
    content: 'ещё';
    padding: 0 0.3em;
    display: inline-block;
    background-color: #eee;
    color: #888;
    font-size: 0.8em;
    cursor: pointer;
  }

</style>
