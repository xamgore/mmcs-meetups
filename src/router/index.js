import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import EventPage from '@/components/pages/event'
import AboutPage from '@/components/pages/about'
import MainPage from '@/components/pages/main'
import AddNew from '@/components/pages/new'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/new',
      name: 'new',
      component: AddNew
    },

    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },

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
