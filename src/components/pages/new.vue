<template>
  <form class="page" @submit.prevent="create">

    <div class="split">
      <div class="left">
        <div>
          <label>
            Название
            <input type="text" v-model="s.title" maxlength="60" :placeholder="p.title"/>
          </label>
        </div>

        <div>
          <label>
            Аннотация
            <textarea type="text" v-model="s.anno" maxlength="170" rows="3" :placeholder="p.anno"/>
          </label>
        </div>

        <div style="display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap">
          <div>
            <label>
              Дата
              <input type="date" v-model="s.date"/>
            </label>
          </div>

          <div>
            <label>
              Время
              <input type="time" v-model="s.time"/>
            </label>
          </div>
        </div>

        <div>
          <label>
            Место
            <input type="text" v-model="s.place" placeholder="211"/>
          </label>
        </div>

        <div>
          <label>
            Цветовая схема
            <select v-model="s.theme">
              <option value="" v-text="'default'"/>
              <option v-for="t in ['gray', 'blue', 'green', 'orange', 'yellow', 'violet']" v-text="t"/>
            </select>
          </label>
        </div>

        <div>
          <label>
            Ссылка
            <input v-model="s.url" :placeholder="event.title" type="url" inputmode="url"/>
          </label>

          <span style="background-color: #f7f7f7; font-size: 0.8em; padding: 0 0.3em; color: #0d47a1">
            meetups.sfedu.ru/{{ link }}</span>
        </div>
      </div>

      <div class="right">
        <event :e="event" style="margin-top: 0"/>
      </div>
    </div>

    Текст на отдельной странице
    <div class="split">
      <div class="left">
        <div>
          <label>
            <textarea type="text" v-model="s.text" ref="text" class="text" :placeholder="p.text"/>
          </label>
        </div>
      </div>

      <div class="right">
        <extended ref="preview" :e="event" :header="false" style="margin-top: 0"/>
      </div>
    </div>

    <!--<div style="margin-top: 1em; padding-top: 1em; border-top: solid 3px #ddd">-->
    <!--<label>-->
    <!--<input type="checkbox"/>-->
    <!--Подать заявку в деканат-->
    <!--</label>-->
    <!--</div>-->

    <div class="create">
      <label for="pass">Пароль:</label>
      <input id="pass" type="text" v-model="pass" style="width: 11em" required/>
      <input type="submit" class="okay" value="Создать"/>
    </div>

  </form>
</template>

<script>
  import event from '../event'
  import extended from '../event/extended'
  import { transliterate } from '../event/translit'

  import api from '../../api'

  export default {
    name: 'add-new-page',
    components: { event, extended },

    data: () => ({
      pass: '',
      s: { title: '', anno: '', theme: '', url: '', text: '', place: '', time: '', date: this.today },
      p: {
        title: 'Коротко и понятно, чтобы хотелось прийти',

        anno: `
          Никто не знает, что там расскажут, но обязательно приходите —
          тема пользуется бешенной популярностью.
        `.replace(/\s+/g, ' ').trim(),

        text: `
          Здесь можно писать обычный <i>html</i>, возможно,
          <span style="color: #e91e63">со стилями</span>.
          Хороший пример оформления текста можно найти
          <a href="/cat">здесь</a>.

          В будущем, можно будет использовать markdown разметку.
        `.split(/\s[\r\t\v\f ]+/).join('\n').replace(/(.)\n(?!\n)/g, '$1 ').trim()
      }
    }),

    created() {
      let d = new Date()
      const addZero = v => (v < 10 ? '0' : '') + v

      let [mo, da, ho, mi] = [
        d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes()].map(addZero)

      this.s.date = `${d.getFullYear()}-${mo}-${da}`
      this.s.time = `${ho}:${mi}`
    },

    watch: {
      text() {
        if (this.$root.$el.offsetWidth < 500) return
        this.$refs.text.style.height = `${this.$refs.preview.$el.offsetHeight}px`
      }
    },

    computed: {
      event() {
        return {
          title: this.s.title || this.p.title,
          annotation: this.s.anno || this.p.anno,
          text: this.s.text || this.p.text,
          date: this.s.date,
          time: this.s.time,
          link: this.link,
          theme: this.s.theme
        }
      },

      link() {
        let phrase = this.s.url || this.s.title || this.p.title
        return phrase.split(' ').join('-').toLowerCase()
      }
    },

    methods: {
      create() {
        api.events.create(this.event, this.pass)
          .then(_ => this.$router.push({ name: 'main' }))
      }
    }
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

  .split {
    display: flex;
    flex-wrap: wrap;
  }

  .split > .left {
    padding-right: 2em;
    max-width: 470px;
    width: 100%;
  }

  .split > .right {
    margin-bottom: 1em;
  }

  .split .left > div {
    margin-bottom: 1em
  }

  @media screen and (max-width: 500px) {
    .split > .left { padding-right: 0 }

    .split:first-child > .right { margin-bottom: 2em }
  }

  input[type=text], input[type=url], textarea {
    width: 100%;
    font-family: monospace;
    padding: 0.2em 0.4em;
    line-height: 1.4em;
    margin: 0.1em 0;
  }

  @media screen and (max-width: 500px) {
    input[type=text], input[type=url], textarea { letter-spacing: -0.7px }
  }

  label:active { user-select: none }

  textarea.text { min-height: 14em }

  .okay {
    all: inherit;
    background: #eee;
    padding: 0.1em 0.5em 0.2em;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    border: none;
  }

  .okay:hover {
    background: #e0e0e0;
  }

  .create * { margin-right: 0.3em !important }

  .create {
    display: flex;
    align-items: center;
  }
</style>
