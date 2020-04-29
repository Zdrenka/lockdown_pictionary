// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import store from './store/store';

import '../config/fontawesome';
import "vue-slider-component/theme/default.css";

Vue.config.productionTip = false
Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
