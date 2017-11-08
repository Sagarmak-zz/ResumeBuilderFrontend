import Vue from 'vue'
import App from './App'
import router from './router'

import 'bulma/css/bulma.css';
import Auth from '@/packages/auth/Auth.js'
Vue.use(Auth);
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
