import Vue from 'vue'
import App from './components/App/App.vue'
import router from './router'

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
