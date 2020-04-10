// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import animated from 'animate.css'
import VueJsonp from 'vue-jsonp'
import store from '../src/store/store.js'

Vue.prototype.axios = axios
Vue.use(animated)
Vue.use(VueJsonp)

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
