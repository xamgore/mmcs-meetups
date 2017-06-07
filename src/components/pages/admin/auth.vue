<template>
  <div class="page">

    <section v-if="store.admin_pass === null" class="more">
      <label for="pass">Секретная фраза</label>
      <div style="display:flex;align-items:center">
        <input type="text" v-model="pass" @keyup.enter="submit" id="pass" style="width: 200px"/>
        <button class="okay" @click="submit">Войти</button>
      </div>
    </section>


    <template v-else>
      <section class="admin-menu">
        <router-link :to="{name: 'proposals'}">Предложенные</router-link>

        <s>Соцсети</s>

      </section>

      <router-view/>
    </template>

  </div>
</template>

<script>
  import Event from '@/components/event/index'
  import store from '@/store'

  export default {
    name: 'main-page',
    data: () => ({ pass: null, store }),
    methods: { submit() { store.adminSignIn(this.pass) } }
  }
</script>

<style scoped>
  input, textarea, select {
    background: transparent;
    border: 1px solid #ccc;
    font-family: monospace;
    padding: 0.2em 0.4em;
    line-height: 1.4em;
    margin: 0.1em 0;
  }

  @media screen and (max-width: 500px) {
    input, textarea, select {
      /*letter-spacing: -0.7px*/
      font-size: 0.8em
    }
  }

  label:active { user-select: none }

  .okay {
    all: inherit;
    background: #eee;
    padding: 0 0.5em 2px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    border: 1px solid #ccc;
    border-left: none;
    margin: 0;
  }

  .okay:hover {
    background: #e0e0e0;
  }

  .page {
    margin-left: -5.24%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    padding-left: 5%;
    flex: none;
  }

  section.admin-menu > * {
    margin-right: 0.5em;
  }

  section.more {
    display: inline-block;
    margin-top: 3em;
    margin-right: 17%;
  }

  @media screen and (max-width: 500px) {
    section.more {
      margin-left: 5%;
      margin-right: 1em;
    }
  }
</style>
