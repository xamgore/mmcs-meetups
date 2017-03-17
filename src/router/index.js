import Vue from 'vue'
import Router from 'vue-router'
import EventPage from '@/components/event'
import MainPage from '@/components/main'

Vue.use(Router)

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
