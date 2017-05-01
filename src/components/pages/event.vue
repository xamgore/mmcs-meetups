<template>
  <div class="page">
    <event :e="e"/>
  </div>
</template>

<script>
  import event from '../event/extended'
  import store from '../../api/store'

  export default {
    name: 'event-page',
    components: { event },
    computed: {
      events: () => store.events || [],
      e() { return this.events.find(e => e.link === this.$route.params.id) || { theme: '' } }
    },
    watch: { 'e.theme'() { this.$root.theme = this.e.theme } },
    created() { store.fetchOnly(this.$route.params.id) }
  }
</script>

<style scoped>
  .page {
    margin-left: 1.0em;
    margin-bottom: 1.5em;
    font-size: 1.1em;
  }

  @media screen and (max-width: 550px) {
    .page {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 1em;
    }
  }
</style>
