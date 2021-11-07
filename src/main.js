import Vue from 'vue'
import App from './App.vue'

import 'normalize.css'

import { globalRegister } from './global'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(globalRegister)

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
})

app.$mount('#app')
