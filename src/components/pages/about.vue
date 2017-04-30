<template>
  <article class="page">
    <h3>Какую проблему решает этот сайт?</h3>

    Здесь собраны все семинары, митапы и классные события,
    которые происходят на мехмате. Всегда можно заглянуть и найти что-нибудь интересное.


    <h3>Как можно подписаться?</h3>

    Пока что у нас есть канал в телеграмме
    <a href="https://t.me/mmcs_meetups">@mmcs_meetups</a>,
    новости в нём появляются при анонсе мероприятия и повторно за 4 часа.
    Скоро сделаем твиттер-аккаунт и паблик вконтакте.


    <h3>Как добавить событие?</h3>

    На данный момент доступ к админке имеют только
    <u title="организаторы мероприятий">доверенные</u> лица.
    Можно написать на почту (контакты ниже), и мы сами опубликуем мероприятие.


    <h3>Могу я помочь проекту?</h3>

    <p>Конечно! Расскажи о сайте своим друзьям, студентам или преподавателям.

    <p>Программируешь? Попробуй написать бота для twitter или vk,
    нарисовать классную статистику на <em>d3.js</em>, или решить проблему
    из <a href="https://github.com/xamgore/mmcs-meetups/issues">списка в репозитории</a>.

    Если сомневаешься в своих способностях, не переживай, мы поможем.


    <h3 style="margin-top: 2.5em">Контакты</h3>

    <p>Игорь — разработчик и модератор&nbsp;
      <a href="https://vk.com/strebz">vk</a> /
      <a href="http://www.google.com/recaptcha/mailhide/d?k=01iqeHr_Fxn8kukwxs4T6Q4A==&amp;c=8TvGhTGjFwnDEnl3twqjWJidqylH0_L9jxry-3-I3YU=" onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01iqeHr_Fxn8kukwxs4T6Q4A\x3d\x3d\x26c\x3d8TvGhTGjFwnDEnl3twqjWJidqylH0_L9jxry-3-I3YU\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300');return !1">email</a>

    <p>Яна — доцент, «крышует» проект&nbsp;
      <a href="https://vk.com/id297003875">vk</a> /
      <a href="http://www.google.com/recaptcha/mailhide/d?k=01NwdxQLAH4bVYVgSxQydqhA==&amp;c=jBX5Vm0ShMmNNmvtydg7XYBKqLWMyddZrJRkxs4vyNM=" onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01NwdxQLAH4bVYVgSxQydqhA\x3d\x3d\x26c\x3djBX5Vm0ShMmNNmvtydg7XYBKqLWMyddZrJRkxs4vyNM\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300');return !1">email</a>

  </article>
</template>

<script>
  export default {
    name: 'about-page'
  }
</script>

<style scoped>
  .page {
    margin-top: 2.5em;
    margin-left: 1.0em;
    margin-bottom: 1.5em;
    font-size: 1.1em;
  }

  @media screen and (max-width: 600px) {
    .page {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 1em;
    }
  }

  @media screen and (min-width: 600px) {
    article { width: 600px }
  }

  h3 {
    margin-top: 1.4em;
    margin-bottom: 0.7em;
  }

  h3:first-of-type { margin-top: 0 }

  u {
    text-decoration-style: dotted;
    cursor: help;
  }

  p { margin: 0.8em 0 }

  input[type=text], input[type=url], textarea {
    width: 320px;
  }

  input, textarea {
    background: transparent;
    border: 1px solid #ccc;
    font-family: monospace;
    padding: 0.2em 0.4em;
    line-height: 1.4em;
    margin: 0.1em 0;
  }

  .at::after {
    content: '@'
  }
</style>
