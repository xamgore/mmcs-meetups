<template>
  <div class="page">
    <event e="e"/>
  </div>
</template>

<script>
  import event from '../event/extended'
  import api from '../../api'

  export default {
    name: 'event-page',
    components: { event },
    created() {
      this.e = api.getData().events[0]
    }
  }
</script>

<style scoped>
  .page {
    margin-left: 1.0em;
    margin-top: 2.5em;
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
