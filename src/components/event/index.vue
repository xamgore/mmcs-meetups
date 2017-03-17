<template>
  <div>
    Event id: {{ $route.params.id }}
  </div>
</template>

<script>
  export default {
    name: 'event-page',
    created() {
      console.log(this.$route)
    }
  }
</script>

<style scoped>

</style>
