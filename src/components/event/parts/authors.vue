<template>
  <div>
    <div v-for="a in authors" class="author">

      <div class="ava" :style="{ 'background-image': url(a.ava) }">
        <img :src="a.ava" alt=""/>
      </div>

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
    width: 2em;
    height: 2em;
    display: inline-block;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: #ade3e6;
    background-color: var(--border, #ade3e6);
    border-radius: 50%;
    margin-right: 0.4em;
  }

  .ava img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    opacity: 0;
  }
</style>
