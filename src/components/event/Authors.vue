<template>
  <div>
    <div v-for="a in authors" class="author">
      <div class="ava" :style="{ 'background-image': url(a.ava) }"/>
      <span v-text="a.name"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'e-authors',
    props: ['authors'],
    methods: {
      url: src => `url(${src})`
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
    width: 1.6em;
    height: 1.6em;
    display: inline-block;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 0.5em;
  }
</style>
