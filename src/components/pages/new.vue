<template>
  <div class="page">

    <div class="split">
      <div class="left">
        <div>
          <label>
            Название
            <input v-model="title" maxlength="60" type="text" :placeholder="ptitle"/>
          </label>
        </div>

        <div>
          <label>
            Аннотация
            <textarea v-model="anno" maxlength="170" rows="3" type="text" :placeholder="panno"/>
          </label>
        </div>

        <div style="display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap">
          <div>
            <label>
              Дата
              <input type="date" v-model="date"/>
            </label>
          </div>

          <div>
            <label>
              Время
              <input type="time" v-model="time"/>
            </label>
          </div>
        </div>

        <div>
          <label>
            Место
            <input type="text" v-model="place" placeholder="211"/>
          </label>
        </div>

        <div>
          <label>
            Цветовая схема
            <select v-model="theme">
              <option value="" v-text="'default'"/>
              <option v-for="t in ['gray', 'blue', 'green', 'orange', 'yellow', 'violet']" v-text="t"/>
            </select>
          </label>
        </div>

        <div>
          <label>
            Ссылка
            <input v-model="url" :placeholder="event.title" type="url" inputmode="url"/>
          </label>
          <span style="background-color: #f7f7f7; font-size: 0.8em; padding: 0 0.3em; color: blue">
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
            <textarea ref="text" class="text" v-model="text" type="text" :placeholder="ptext"/>
          </label>
        </div>

      </div>
      <div class="right">
        <extended ref="preview" :e="event" :header="false" style="margin-top: 0"/>
      </div>
    </div>

    <div style="margin-top: 1em; padding-top: 1em; border-top: solid 3px #ddd">
      <label>
        <input type="checkbox"/>
        Подать заявку в деканат
      </label>
    </div>

  </div>
</template>

<script>
  import event from '../event'
  import extended from '../event/extended'
  import { transliterate } from '../event/translit'

  // import api from '../../api'

  export default {
    name: 'add-new-page',
    components: { event, extended },
    data: () => ({
      title: '',
      anno: '',
      date: this.today,
      time: '',
      theme: '',
      url: '',
      text: '',
      place: '',

      ptitle: 'Коротко и понятно, чтобы хотелось прийти',
      panno: `
        Никто не знает, что там расскажут, но обязательно приходите —
        тема пользуется бешенной популярностью.
      `.replace(/\s+/g, ' ').trim(),
      ptext: `
        Здесь можно писать обычный <i>html</i>, возможно,
        <span style="color: #e91e63">со стилями</span>.
        Хороший пример оформления текста можно найти
        <a href="/cat">здесь</a>.

        В будущем, можно будет использовать markdown разметку.
      `.split(/\s[\r\t\v\f ]+/).join('\n').replace(/(.)\n(?!\n)/g, '$1 ').trim()
    }),
    created() {
      let d = new Date()
      const addZero = v => (v < 10 ? '0' : '') + v

      let [mo, da, ho, mi] = [
        d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes()].map(addZero)

      this.date = `${d.getFullYear()}-${mo}-${da}`
      this.time = `${ho}:${mi}`
    },
    watch: {
      text() {
        this.$refs.text.style.height = `${this.$refs.preview.$el.offsetHeight}px`
      }
    },
    computed: {
      event() {
        return {
          title: this.title || this.ptitle,
          annotation: this.anno || this.panno,
          text: this.text || this.ptext,
          date: this.date,
          link: this.link,
          theme: this.theme
        }
      },

      link() {
        let phrase = this.url || this.title || this.ptitle
        return phrase.split(' ').join('-').toLowerCase()
      }
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

  .split {
    display: flex;
    flex-wrap: wrap;
  }

  .split > .left {
    padding-right: 2em;
    max-width: 470px;
    width: 100%;
  }

  input[type=text], input[type=url], textarea {
    display: block;
    width: 100%;
    font-family: monospace;
    padding: 0.2em 0.4em;
    line-height: 1.4em;
    margin: 0.1em 0;
  }

  label:active { user-select: none }

  .split .left > div {
    margin-bottom: 1em
  }

  textarea.text { min-height: 14em }
</style>
