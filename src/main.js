import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data: { theme: '' },
  components: { App },
  created() {
    this.$router.afterEach((to, from) => {
      this.$root.theme = ''
    })
  }
})
