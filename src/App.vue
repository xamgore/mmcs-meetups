<template>
  <div id="app">
    <h1>mmcs meetups</h1>

    <section class="news">
      <event v-for="event in events" :e="event"/>
    </section>

    <section class="outdated">
      <event v-for="event in outdated" :e="event" style="background-color:#fafafa"/>
    </section>
  </div>
</template>

<script>
  import Event from '@/components/event/.Event'

  export default {
    name: 'app',
    components: { Event },
    data: () => ({
      outdated: [
        {
          link: '',
          color: 'green',
          title: 'Распознавание речи на основе скрытых марковских моделей',
          date: '20.02.2016 17:30 [212 ауд.]',
          annotation: `
          Мы обсудили алгоритмы обучения СММ и проблемы в распознавании речи.
          Почти ничего не было понятно, но зато мы написали красивое решение-однострочник,
          так что теперь можно смело начинать заниматься областью.

          <a href="http://forum.mmcs.sfedu.ru/t/seminar-ko-kompyuternomu-zreniyu-i-obrabotke-izobrazhenij/678/56">
            Материалы к семинару</a>.

          <div class="img" style="background-image: url(https://pbs.twimg.com/media/C5H9B0MWIAMtcSa.jpg:large)"></div>
          <div style="text-align:center"><i>то самое решение</i></div>
        `,
          authors: [
            { name: 'Дмитрий Свиридкин', ava: 'https://pbs.twimg.com/profile_images/826897257689649154/JWf5zVTT.jpg' }
          ]
        }
      ],
      events: [
        {
          link: '#cat',
          theme: 'gray',
          title: 'Теория Категорий',
          date: '3.03.16 16:30',
          annotation: `
          Курс посвящён абстрактной фигне, которую никто никак не сможет применить в реальной жизни.
          Будет полезно, но это не точно.
        `,
          text: `
          Есть возможность официально сдавать зачёт или экзамен (по желанию слушателя).
          Для этого необходимо написать заявление в деканат.
        `,
          authors: [
            {
              name: 'Виталий Брагилевский',
              ava: 'http://compsciclub.ru/media/cache/eb/74/eb744370ecdcc277036c108e12cc8794.jpg'
            },
            {
              name: 'Денис Загумённов',
              ava: 'https://pbs.twimg.com/profile_images/2586456123/0msx978pkihz2xo7k9hu.jpeg'
            }
          ]
        },

        {
          link: '#datascience',
          theme: 'blue',
          title: 'Data Science Meetup',
          date: '4.03.16 16:00',
          annotation: `
          Всего будет четыре доклада, один из которых для новичков,
          поэтому туса мехмата собирается там.
          Подробнее: <a href="http://vk.com/dsmt61">vk.com/dsmt61</a>.
        `
        }
      ]
    })
  }
</script>

<style scoped>
  h1 {
    font-family: Lora, Roboto, serif;
    padding: 0 0.5em;
    font-size: 2em;
  }

  h1:after {
    content: ' ♥';
    color: #E91E63;
  }

  .outdated {
    margin-top: 5em
  }
</style>

<style>
  * {
    box-sizing: inherit;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    border-top: 6px solid #ade3e6; /*#c8e6ad;*/
  }

  #app {
    color: #444;
    font-family: 'PT Sans', sans-serif;
    margin-bottom: 0;
  }

  @media screen and (min-width: 500px) {
    #app {
      margin-left: 5%;
      margin-bottom: 3em;
    }

    article {
      font-size: 1.1em;
    }
  }

  a {
    color: #679e37;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover,a:focus,a:active {
    text-decoration: underline;
  }
</style>
