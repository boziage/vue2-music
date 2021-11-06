import Vue from 'vue'
import App from './App.vue'

import 'normalize.css'

import { globalRegister } from './global'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const app = new Vue({
  globalRegister,
  router,
  store,
  render: (h) => h(App)
})

app.$mount('#app')
