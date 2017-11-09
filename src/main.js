import Vue from 'vue'
import App from './App'
import router from './router'

import 'bulma/css/bulma.css';
import Auth from '@/packages/auth/Auth.js'
Vue.use(Auth);
Vue.prototype.$bus = new Vue();
Vue.prototype.$Auth = new Vue();
Vue.config.productionTip = false
import axios from 'axios';
import Config from './config';

// Make Auth methods available globally
Object.defineProperties(Vue.prototype, {
  $auth: {
    get() {
      return Auth;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
