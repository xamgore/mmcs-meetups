import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import EventPage from '../components/pages/event'
import MainPage from '../components/pages/main'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/:id',
      name: 'event',
      component: EventPage
    },

    {
      path: '/',
      name: 'main',
      component: MainPage
    }
  ]
})
