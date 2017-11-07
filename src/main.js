import Vue from 'vue'
import App from './App'
import router from './router'

import 'bulma/css/bulma.css';

// require('vue-bulma-collapse/src/Collapse')
// exports.Item = require('./Item')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
